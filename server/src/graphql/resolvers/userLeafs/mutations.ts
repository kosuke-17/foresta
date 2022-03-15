import { UserLeafs } from "../../../models";
import { ChangeLeafInfoType } from "../../../types";
import { calcUserLeafsRate } from "../../../utli/calcLeafRate";
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
  changeLeafStatus: async (_: any, { techLeafInfo }: ChangeLeafInfoType) => {
    const { userLeafsId, treeId, branchId, leafId, currentStatus } =
      techLeafInfo;
    const changedStatus = !currentStatus;

    // 習得率の計算を行い値を受け取る
    const achievementRate = await calcUserLeafsRate(
      userLeafsId,
      treeId,
      changedStatus
    );

    try {
      const result = await UserLeafs.findOneAndUpdate(
        { _id: userLeafsId },
        {
          $set: {
            "myForest.$[treeInfo].achievementRate": achievementRate,
            "myForest.$[treeInfo].branches.$[branchInfo].leafs.$[leafInfo].isStatus":
              changedStatus,
          },
        },
        {
          arrayFilters: [
            { "treeInfo._id": { $eq: treeId } },
            { "branchInfo._id": { $eq: branchId } },
            { "leafInfo._id": { $eq: leafId } },
          ],
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
