import { StudyStack } from "../../../models/StudyStack.model";
import { StackAddType, StackUpdateType } from "../../../types/studyStack";
import { success } from "../responseStatus";

const studyStackMutations = {
  /**
   * 学習記録を追加する.
   *
   * @param stack - 学習記録情報
   * @returns successステータス, 作成した学習記録の情報
   * @returns errorステータス
   */
  addStudyStack: (_: any, { stack }: StackAddType) => {
    const { content, timeStack, createdAt, skillTagId, userId } = stack;
    try {
      const newStudyStack = new StudyStack({
        content,
        timeStack,
        createdAt,
        skillTagId,
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
  /**
   * 学習記録を更新する.
   *
   * @param stack - 学習記録情報
   * @returns successステータス, 更新した学習記録の情報
   * @returns errorステータス
   */
  updateStudyStack: async (_: any, { stack }: StackUpdateType) => {
    const { studyStackId, content, timeStack, createdAt, skillTagId, userId } =
      stack;
    try {
      const result = await StudyStack.findByIdAndUpdate(
        { _id: studyStackId },
        {
          $set: {
            content,
            timeStack,
            createdAt,
            skillTagId,
            userId,
          },
        },
        { new: true }
      );
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
};

export default studyStackMutations;
