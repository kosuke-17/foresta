import { UserTodos } from "../../../models";
import { TodoIdType, UserIdType } from "../../../types";
import { error, success } from "../responseStatus";
/**
 * ## todoの取得
 */
const userTodosQueries = {
  /**
   * ユーザーのTodo一覧情報を取得する
   *
   * @param userId - ユーザーID
   * @returns todo一覧情報
   */
  getAllTodoByUser: async (_: any, { userId }: UserIdType) => {
    try {
      const result = await UserTodos.find({ userId: userId });
      return success(result, "取得に成功しました。");
    } catch {
      return error("取得に失敗しました。");
    }
  },
  /**
   * todoIDに紐づいたのTodoを取得する
   *
   * @param todoId - todoID
   * @returns todo一覧情報
   */
  getTodoById: async (_: any, { todoId }: TodoIdType) => {
    try {
      const result = await UserTodos.findById({ _id: todoId });
      return success(result, "取得に成功しました。");
    } catch {
      return error("取得に失敗しました。");
    }
  },
};

export default userTodosQueries;
