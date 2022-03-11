import { UserLeafs } from "../../../models";
import { UserIdType } from "../../../types";
import { error, success } from "../responseStatus";

const userLeafsQueries = {
  /**
   * ユーザーIDに紐づく習得技術を取得する
   *
   * @param userId - ユーザーID
   * @returns 取得時のステータスとメッセージとデータ
   */
  getUserLeafsById: async (_: any, { userId }: UserIdType) => {
    try {
      const result = await UserLeafs.findOne({ userId: userId });
      if (result === null) {
        return error("該当のスペックシートが見つかりません。");
      }
      return success(result, "取得に成功しました。");
    } catch {
      return error("取得に失敗しました。");
    }
  },
};

export default userLeafsQueries;
