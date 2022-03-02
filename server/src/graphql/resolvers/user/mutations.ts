import { TechTree } from "../../../models/TechForest.model";
import { Users, UserLeafs } from "../../../models/User.model";
import { success } from "../responseStatus";
import { UserType, UserTechLeafsType, UserLoginType } from "../types";

const userMutations = {
  /**
   * ユーザー追加.
   *
   * @param user - 名、職種、email、パスワード、GithubURL
   * @returns success : successステータス,作成したユーザー
   * @returns error : errorステータス
   */
  createUser: async (_parent: any, { user }: { user: UserType }) => {
    // user_paramを分割代入
    let { name, jobType, email, password, githubURL } = user;
    if (githubURL == null) {
      githubURL = "";
    }

    try {
      // ここでobj_idが生成される
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
        // ユーザーの技術オブジェクトを保存
        createdTechLeafs.save();
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
  userLogin: async (_parent: any, { user }: { user: UserLoginType }) => {
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

  /**
   * 習得技術追加.
   *
   * @param user - ユーザー情報
   * @returns success : successステータス,技術を習得したユーザー
   * @returns error : errorステータス
   */
  addUserTechLeafs: async (_parent: any, { user }: { user: any }) => {
    const { _id, haveTechLeafId, achievementRate, techLeafIds } = user;
    try {
      // const result = await User.find({
      //   $and: [{ _id: _id }, { techTreeId: "6219ab06358ce51f57b9dfa5" }],
      // });
      const result = await Users.findOneAndUpdate(
        {
          $and: [
            { _id: { $eq: _id } },
            { "have_techLeafs._id": haveTechLeafId },
          ],
        },
        {
          $set: {
            "have_techLeafs.$[_id].achievementRate": achievementRate,
          },
          // $addToSet: {
          //   "have_techLeafs.$[techLeafIds]": { $each: [...techLeafIds] },
          // },
        },
        {
          new: true,
          arrayFilters: [{ _id: { $eq: haveTechLeafId } }],
        }
      );
      return success(result);
    } catch (e) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * 習得技術削除.
   *
   * @param user - ユーザー情報
   * @returns success : successステータス,習得技術を削除したユーザー
   * @returns error : errorステータス
   */
  removeUserTechLeafs: async (
    _parent: any,
    { user }: { user: UserTechLeafsType }
  ) => {
    const { _id, techLeafId } = user;
    try {
      const result = await Users.findByIdAndUpdate(
        { _id: _id },
        {
          $pull: { have_techLeafs: techLeafId },
        }
      );
      return success(result);
    } catch (e) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
};

export default userMutations;
