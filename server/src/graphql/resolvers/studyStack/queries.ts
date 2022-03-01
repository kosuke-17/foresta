import { StudyStack } from "../../../models/StudyStack.model";

const studyStackQueries = {
  /**
   * ユーザーのStudyStack一覧情報を取得する.
   *
   * @param userId - userID
   * @returns StudyStack一覧情報
   */
  getAllStudyStackByUserId: async (_: any, { userId }: any) => {
    return await StudyStack.find({ userId: userId });
  },
  /**
   * 学習記録IDに紐づく学習記録の取得
   *
   * @param studyStackId - 学習記録ID
   * @returns 学習記録IDに紐づく学習記録
   */
  getStudyStackByStudyStackId: async (_: any, { studyStackId }: any) => {
    return await StudyStack.findById({ _id: studyStackId });
  },
};

export default studyStackQueries;
