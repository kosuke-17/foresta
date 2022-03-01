import { TechTree } from "../../../models/TechForest.model";
import { User } from "../../../models/User.model";
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
    const techTrees = await TechTree.find({});
    const techLeafInfo = [];
    for (const tech of techTrees) {
      techLeafInfo.push(
        new Object({
          techTreeId: tech._id,
          achievementRate: 0,
          techLeafIds: [],
        })
      );
    }

    try {
      const createUser = new User({
        name,
        jobType,
        email,
        password,
        githubURL,
        have_techLeafs: techLeafInfo,
      });
      const result = await createUser.save();
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
      const result = await User.findOne({
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
      // console.log("_id" + _id);
      // console.log("haveTechLeafId" + haveTechLeafId);
      // console.log("achievementRate" + achievementRate);
      // console.dir("techLeafIds" + techLeafIds);
      // console.log("");

      // const result = await User.find({
      //   _id: _id,
      //   have_techLeafs: { $elemMatch: { _id: haveTechLeafId } },
      // });
      const result = await User.findOneAndUpdate(
        { have_techLeafs: { $elemMatch: { _id: haveTechLeafId } } },
        {
          $addToSet: {
            have_techLeafs: { techLeafIds: { $each: [...techLeafIds] } },
          },
          $set: { have_techLeafs: { achievementRate: achievementRate } },
        },
        {
          new: true,
        }
      );
      return success(result[0]);
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
      const result = await User.findByIdAndUpdate(
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
