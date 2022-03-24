import { UserTodos } from "../../../models";
import { TodoIdType, UserToken } from "../../../types";
import { verifyJwtToken } from "../../../utli/fncJwtToken";
import { error, success } from "../responseStatus";
/**
 * ## todoの取得
 */
const userTodosQueries = {
  /**
   * ユーザーのTodo一覧情報を取得する
   *
   * @param userToken - ユーザートークン
   * @returns todo一覧情報
   */
  getAllTodoByUser: async (_: any, { userToken }: UserToken) => {
    const userId = verifyJwtToken(userToken);
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
