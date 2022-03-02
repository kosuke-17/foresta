import { UserLeafs, Users } from "../../../models/User.model";
import { success } from "../responseStatus";
import { UserTechLeafsType } from "../types";

const userLeafsMutation = {
  /**
   * 習得技術追加.
   *
   * @remarks upsertがあることで指定したフィールドが配列でなかったり、指定したフィールドが存在しなかった場合にエラーが発生する
   *
   * @param techLeaf - ユーザーの技術情報
   * @returns success : successステータス,技術を習得したユーザー
   * @returns error : errorステータス
   */
  addUserTechLeafs: async (_: any, { techLeaf }: { techLeaf: any }) => {
    const { techTreeId, achievementRate, techLeafIds, userId } = techLeaf;
    try {
      const result = await UserLeafs.findOneAndUpdate(
        { userId: userId, "techLeafs.techTreeId": techTreeId },
        {
          $set: {
            "techLeafs.$[techLeafInfo].techLeafIds": [...techLeafIds],
            "techLeafs.$[techLeafInfo].achievementRate": achievementRate,
          },
        },
        {
          arrayFilters: [{ "techLeafInfo.techTreeId": { $eq: techTreeId } }],
          upsert: true,
          new: true,
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
    _: any,
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

export default userLeafsMutation;
