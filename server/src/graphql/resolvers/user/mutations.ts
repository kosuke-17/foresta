import {
  Users,
  UserLeafs,
  SpecSheet,
  SpecTechInfoSheet,
  SpecUserInfoSheet,
  TechTree,
  SpecProjectSheet,
  TechLeaf,
  TechBranch,
  UserUrls,
} from "../../../models";
import { error, success } from "../responseStatus";
import {
  UserLoginType,
  UserCreateType,
  UserUpdateType,
  UserToken,
} from "../../../types";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { signJwtToken, verifyJwtToken } from "../../../utli/fncJwtToken";

dotenv.config();

/**
 * ## ユーザーの変更処理
 */
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
  createUser: async (_: any, { user }: UserCreateType) => {
    // user_paramを分割代入
    let { name, jobType, email, password, spreadSheetID, githubURL } = user;
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
        spreadSheetID,
        githubURL,
      });
      const result = await createUser.save();

      // ユーザー技術情報オブジェクトを生成
      if (result !== null) {
        const techTrees = await TechTree.find({});
        const techLeafs = await TechLeaf.find({});
        const techLeafInfo = { myForest: new Array(), userId: createUser._id };
        for (const tree of techTrees) {
          let techBranches = await TechBranch.find({ techTree_id: tree._id });
          // ブランチオブジェクトにリーフを格納し、代入
          let branch_leaf = new Array();
          for (let i = 0; i < techBranches.length; i++) {
            branch_leaf = techLeafs.filter(
              (leaf) => techBranches[i]._id == leaf.techBranch_id
            );
            const newBranch = new Object({
              name: techBranches[i].name,
              leafs: branch_leaf,
            });
            techBranches[i] = newBranch;
          }
          const userTechInfo = new Object({
            treeId: tree._id,
            areaId: tree.techArea_id,
            treeName: tree.name,
            achievementRate: 0,
            color: tree.color,
            branches: techBranches,
          });
          techLeafInfo.myForest.push(userTechInfo);
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
          otherTools: [],
          devRoles: [],
          specSheetId: createdSpecSheet._id,
        });

        // ユーザーの持つURLオブジェクトを作成
        const createUserUrls = new UserUrls({
          user_urls: [],
          userId: createUser._id,
        });

        // ユーザーの開発経験(3つ)のオブジェクト作成・保存
        for (let i = 0; i < 3; i++) {
          const createdSpecProjectSheet = new SpecProjectSheet({
            name: "",
            startedAt: "",
            finishedAt: "",
            roleSharing: "",
            memberCount: 0,
            content: "",
            operationEnvs: [],
            languages: [],
            frameworks: [],
            libraries: [],
            otherTools: [],
            devRoles: [],
            specSheetId: createdSpecSheet._id,
          });
          await createdSpecProjectSheet.save();
        }

        // ユーザーの技術オブジェクトを保存
        await createdTechLeafs.save();
        // ユーザーのURLオブジェクトを保存
        await createUserUrls.save();
        // スペックシート関連のオブジェクト保存
        await createdSpecSheet.save();
        await createdSpecUserInfoSheet.save();
        await createdSpecTechInfoSheet.save();
      }

      return success(result, "作成に成功しました。");
    } catch {
      return error("作成に失敗しました。");
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
      const existUser = await Users.findOne({
        email: email,
        password: password,
      });
      if (existUser === null) {
        return error("該当のユーザーが見つかりませんでした");
      }

      // トークンデータ
      const TokenUserData = {
        _id: existUser._id as string,
      };

      const token = signJwtToken(TokenUserData);
      const userToken = { token: token };

      return success(userToken, "ログインできました。");
    } catch {
      return error("ログインできませんでした。");
    }
  },
  /**
   * 自動ログイン用の処理.
   *
   * @param userToken - ユーザートークン
   * @returns ステータス
   */
  userAutoLogin: async (_: any, { userToken }: UserToken) => {
    try {
      const userId = verifyJwtToken(userToken);
      const exitsUser = await Users.findById({ _id: userId });
      if (exitsUser._id) {
        return success(null, "ユーザーが見つかりました。");
      } else {
        return error("ユーザーが見つかりませんでした。");
      }
    } catch (e) {
      // jwtのエラーハンドリング
      if (e instanceof jwt.TokenExpiredError) {
        console.error("トークンの有効期限が切れています。", e);
      } else if (e instanceof jwt.JsonWebTokenError) {
        console.error("トークンが不正です。", e);
      } else {
        console.error("トークンの検証でその他のエラーが発生しました。", e);
      }
      throw e;
    }
  },
  /**
   * ユーザー情報を更新する.
   *
   * @param user - 更新ユーザー情報
   * @returns ステータス 更新ユーザーの情報
   * `https://lunchkus.net/user/${}`
   */
  updateUser: async (_: any, { user }: UserUpdateType) => {
    const {
      userToken,
      name,
      jobType,
      email,
      password,
      spreadSheetID,
      githubURL,
    } = user;
    const userId = verifyJwtToken(userToken);
    try {
      const result = await Users.findOneAndUpdate(
        { _id: userId },
        { name, jobType, email, password, spreadSheetID, githubURL },
        { new: true }
      );

      // 該当のIDが存在したかのチェック
      if (result === null) return error("該当のユーザーが存在しません。");

      return success(result, "更新に成功しました。");
    } catch {
      return error("更新に失敗しました。");
    }
  },
};

export default userMutations;
