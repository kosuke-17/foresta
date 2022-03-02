import { UserTodos } from "../../../models/User.model";

const userTodosQueries = {
  /**
   * ユーザーのTodo一覧情報を取得する
   *
   * @param userId - ユーザーID
   * @returns todo一覧情報
   */
  getAllTodoByUser: async (_: any, { userId }: any) =>
    await UserTodos.find({ userId: userId }),
  /**
   * todoIDに紐づいたのTodoを取得する
   *
   * @param todoId - todoID
   * @returns todo一覧情報
   */
  getTodoById: async (_: any, { todoId }: any) =>
    await UserTodos.findById({ _id: todoId }),
};

export default userTodosQueries;
