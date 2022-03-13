import { UserLeafs } from "../../../models";
import { UserIdType } from "../../../types";
import { error, success } from "../responseStatus";

const userLeafsQueries = {
  /**
   * ユーザーIDと技術エリアIDに紐づく技術情報を取得する
   *
   * @param userId - ユーザーID
   * @returns 取得時のステータスとメッセージとデータ
   */
  getUserLeafsById: async (_: any, { userId, areaId }: any) => {
    try {
      // ユーザーに紐づく技術情報を取得
      let userLeafsById = await UserLeafs.findOne({ userId: userId });
      // 技術エリアIDに紐づく技術情報としてフィルタリング
      const userLeafByAreaId = userLeafsById.myForest.filter(
        (userLeaf: any) => userLeaf.areaId == areaId
      );
      // フィルタリングした技術情報を代入
      userLeafsById.myForest = userLeafByAreaId;
      if (userLeafsById === null) {
        return error("該当の技術が見つかりません。");
      }
      return success(userLeafsById, "取得に成功しました。");
    } catch {
      return error("取得に失敗しました。");
    }
  },
};

export default userLeafsQueries;
