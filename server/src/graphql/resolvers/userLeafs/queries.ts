import { UserLeafs } from "../../../models";
import { UserIdType } from "../../../types";
import { error, success } from "../responseStatus";

const userLeafsQueries = {
  /**
   * ユーザーIDに紐づく技術情報を取得する
   *
   * @param userId - ユーザーID
   * @returns 取得時のステータスとメッセージとデータ
   */
  getUserLeafsById: async (_: any, { userId }: UserIdType) => {
    try {
      // ユーザーに紐づく技術情報を取得
      const result = await UserLeafs.findOne({ userId: userId });
      if (result === null) {
        return error("該当の技術が見つかりません。");
      }
      return success(result, "取得に成功しました。");
    } catch {
      return error("取得に失敗しました。");
    }
  },
};

export default userLeafsQueries;
