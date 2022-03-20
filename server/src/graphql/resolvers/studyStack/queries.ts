import { StudyStack } from "../../../models";
import { StudyStackIdType, UserToken } from "../../../types";
import { verifyJwtToken } from "../../../utli/fncJwtToken";
import { error, success } from "../responseStatus";
/**
 * ## 学習記録の取得
 */
const studyStackQueries = {
  /**
   * ユーザーのStudyStack一覧情報を取得する.
   *
   * @param userToken - ユーザートークン
   * @returns StudyStack一覧情報
   */
  getAllStudyStack: async (_: any, { userToken }: UserToken) => {
    const userId = verifyJwtToken(userToken);
    try {
      const result = await StudyStack.find({ userId: userId });
      return success(result, "取得に成功しました。");
    } catch {
      return error("取得に失敗しました。");
    }
  },
  /**
   * 学習記録IDに紐づく学習記録の取得
   *
   * @param studyStackId - 学習記録ID
   * @returns 学習記録IDに紐づく学習記録
   */
  getStudyStackById: async (_: any, { studyStackId }: StudyStackIdType) => {
    try {
      const result = await StudyStack.findById({ _id: studyStackId });
      return success(result, "取得に成功しました。");
    } catch {
      return error("取得に失敗しました。");
    }
  },
};
export default studyStackQueries;
