import { StudyStack } from "../../../models/StudyStack.model";
import { success } from "../responseStatus";

const studyStackMutations = {
  /**
   * 学習記録を追加する.
   *
   * @param stack - 学習記録情報
   * @returns successステータス, 作成した学習記録の情報
   * @returns errorステータス
   */
  addStudyStack: (_: any, { stack }: any) => {
    const { content, timeStack, createdAt, skillTags, userId } = stack;
    try {
      const newStudyStack = new StudyStack({
        content,
        timeStack,
        createdAt,
        skillTags,
        userId,
      });
      const result = newStudyStack.save();
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * 学習記録を削除する.
   *
   * @param studyStackId - 学習記録ID
   * @returns successステータス or errorステータス
   */
  removeStudyStack: async (_: any, { studyStackId }: any) => {
    try {
      await StudyStack.deleteOne({ _id: studyStackId });
      return { status: "success" };
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
};

export default studyStackMutations;
