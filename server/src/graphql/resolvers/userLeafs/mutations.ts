import { UserLeafs } from "../../../models";
import { TechLeafUpdateType } from "../../../types";
import { error, success } from "../responseStatus";
/**
 * ## 習得技術の変更処理
 */
const userLeafsMutations = {
  /**
   * 習得技術更新.
   *
   * @remarks upsertがあることで指定したフィールドが配列でなかったり、指定したフィールドが存在しなかった場合にエラーが発生する
   *
   * @param techLeaf - ユーザーの技術情報
   * @returns success : successステータス,技術を習得したユーザー
   * @returns error : errorステータス
   */
  updateUserTechLeafs: async (_: any, { techLeaf }: TechLeafUpdateType) => {
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
      return success(result, "更新に成功しました。");
    } catch {
      return error("更新に失敗しました。");
    }
  },
};

export default userLeafsMutations;
