import { StudyStack } from "../../../models";
import {
  StudyStackIdType,
  StackAddType,
  StackUpdateType,
} from "../../../types/studyStack";
import { verifyJwtToken } from "../../../utli/fncJwtToken";
import { success, error } from "../responseStatus";

/**
 * ## 学習記録の変更処理
 */
const studyStackMutations = {
  /**
   * 学習記録を追加する.
   *
   * @param stack - 学習記録情報
   * @returns successステータス, 作成した学習記録の情報
   * @returns errorステータス
   */
  addStudyStack: async (_: any, { stack }: StackAddType) => {
    const { content, timeStack, createdAt, skillTagId, userToken } = stack;
    const userId = verifyJwtToken(userToken);
    try {
      const newStudyStack = new StudyStack({
        content,
        timeStack,
        createdAt,
        skillTagId,
        userId,
      });
      const result = await newStudyStack.save();
      return success(result, "追加に成功しました");
    } catch {
      return error("追加に失敗しました");
    }
  },
  /**
   * 学習記録を削除する.
   *
   * @param studyStackId - 学習記録ID
   * @returns successステータス or errorステータス
   */
  removeStudyStack: async (_: any, { studyStackId }: StudyStackIdType) => {
    try {
      await StudyStack.deleteOne({ _id: studyStackId });
      return success("", "削除に成功しました");
    } catch {
      return error("削除に失敗しました");
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
    const { studyStackId, content, timeStack, createdAt, skillTagId } = stack;
    try {
      const result = await StudyStack.findByIdAndUpdate(
        { _id: studyStackId },
        {
          $set: {
            content,
            timeStack,
            createdAt,
            skillTagId,
          },
        },
        { new: true }
      );
      return success(result, "更新に成功しました");
    } catch {
      return error("更新に失敗しました");
    }
  },
};

export default studyStackMutations;
