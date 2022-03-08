import { StudyStack } from "../../../models";
import { StudyStackIdType, UserIdType } from "../../../types";
/**
 * ## 学習記録の取得
 */
const studyStackQueries = {
  /**
   * ユーザーのStudyStack一覧情報を取得する.
   *
   * @param userId - userID
   * @returns StudyStack一覧情報
   */
  getAllStudyStack: async (_: any, { userId }: UserIdType) =>
    await StudyStack.find({ userId: userId }),
  /**
   * 学習記録IDに紐づく学習記録の取得
   *
   * @param studyStackId - 学習記録ID
   * @returns 学習記録IDに紐づく学習記録
   */
  getStudyStackById: async (_: any, { studyStackId }: StudyStackIdType) =>
    await StudyStack.findById({ _id: studyStackId }),
};

export default studyStackQueries;
