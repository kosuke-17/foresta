import { TechTree } from "../../../models/TechForest.model";
import { Users, UserLeafs } from "../../../models/User.model";
import { success } from "../responseStatus";
import { UserType, UserLoginType } from "../../../types";
import {
  SpecProjectSheet,
  SpecSheet,
  SpecTechInfoSheet,
  SpecUserInfoSheet,
} from "../../../models/SpecSheet.model";

const userMutations = {
  /**
   * ユーザー追加.
   *
   * @remarks ユーザーを作成すると同時に、ユーザーの技術情報のコレクションを作成する
   *
   * @param user - 名、職種、email、パスワード、GithubURL
   * @returns success : successステータス,作成したユーザー
   * @returns error : errorステータス
   */
  createUser: async (_: any, { user }: UserType) => {
    // user_paramを分割代入
    let { name, jobType, email, password, githubURL } = user;
    if (githubURL == null) {
      githubURL = "";
    }

    try {
      // ユーザーオブジェクト生成
      const createUser = new Users({
        name,
        jobType,
        email,
        password,
        githubURL,
      });
      const result = await createUser.save();

      // ユーザー技術情報オブジェクトを生成
      if (result !== null) {
        const techTrees = await TechTree.find({});
        const techLeafInfo = { techLeafs: new Array(), userId: createUser._id };
        for (const tech of techTrees) {
          const userTechInfo = new Object({
            techTreeId: tech._id,
            achievementRate: 0,
            techLeafIds: [],
          });
          techLeafInfo.techLeafs.push(userTechInfo);
        }
        const createdTechLeafs = new UserLeafs({ ...techLeafInfo });

        // スペックシートオブジェクト作成
        const createdSpecSheet = new SpecSheet({
          selfIntro: "",
          studyOnOwnTime: "",
          certification: "",
          prevJobs: [],
          userId: createUser._id,
        });

        // スペックシートユーザー基本情報オブジェクト作成
        const createdSpecUserInfoSheet = new SpecUserInfoSheet({
          stuffID: "",
          age: 0,
          gender: "",
          nearestStation: "",
          startWorkDate: "",
          seExpAmount: 0,
          pgExpAmount: 0,
          itExpAmount: 0,
          specSheetId: createdSpecSheet._id,
        });
        // スペックシート技術情報オブジェクト作成
        const createdSpecTechInfoSheet = new SpecTechInfoSheet({
          operationEnvs: [],
          languages: [],
          frameworks: [],
          libraries: [],
          OtherTools: [],
          devRoles: [],
          specSheetId: createdSpecSheet._id,
        });
        // スペックシートプロジェクト情報オブジェクト作成
        const createdSpecProjectSheet = new SpecProjectSheet({
          name: "",
          startedAt: "",
          finishedAt: "",
          roleSharing: "",
          content: "",
          operationEnvs: [],
          languages: [],
          frameworks: [],
          libraries: [],
          OtherTools: [],
          devRoles: [],
          specSheetId: createdSpecSheet._id,
        });
        // ユーザーの技術オブジェクトを保存
        await createdTechLeafs.save();
        try {
          // スペックシート関連のオブジェクト保存
          await createdSpecSheet.save();
          await createdSpecUserInfoSheet.save();
          await createdSpecTechInfoSheet.save();
          await createdSpecProjectSheet.save();
        } catch (error) {
          console.log("error: " + error);
        }
      }

      return success(result);
    } catch (e) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * ログインする処理.
   *
   * @param user - ユーザーID, email, パスワード
   * @returns success : successステータス,当てはまったユーザー
   * @returns error : errorステータス
   */
  userLogin: async (_: any, { user }: UserLoginType) => {
    const { email, password } = user;
    try {
      const result = await Users.findOne({
        email: email,
        password: password,
      });
      if (result === null) {
        return {
          status: "error",
          message: "該当のユーザーが見つかりませんでした",
        };
      }

      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
};

export default userMutations;
