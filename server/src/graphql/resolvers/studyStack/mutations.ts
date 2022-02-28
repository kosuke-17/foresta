import { StudyStack } from "../../../models/StudyStack.model";
import { success } from "../responseStatus";

const studyStackMutations = {
  addStudyStack: (_: any, { stack }: any) => {
    const { content, timeStack, createdAt, userId } = stack;

    try {
      const newStudyStack = new StudyStack({
        content,
        timeStack,
        createdAt,
        userId,
      });
      const result = newStudyStack.save();
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
};

export default studyStackMutations;
