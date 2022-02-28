import { StudyStack } from "../../../models/StudyStack.model";

const studyStackQueries = {
  /**
   * ユーザーのStudyStack一覧情報を取得する.
   *
   * @param userId - userID
   * @returns StudyStack一覧情報
   */
  getAllStudyStackByUserId: async (_parent: any, { userId }: any) => {
    return await StudyStack.find({ userId: userId });
  },
};

export default studyStackQueries;
