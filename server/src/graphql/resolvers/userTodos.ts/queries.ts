import { UserTodo } from "../../../models/User.model";

const userTodosQueries = {
  /**
   * ユーザーのTodo一覧情報を取得する
   *
   * @param userId - ユーザーID
   * @returns todo一覧情報
   */
  getAllTodoByUser: async (_parent: any, { userId }: any) => {
    return await UserTodo.find({ userId: userId });
  },
  /**
   * todoIDに紐づいたのTodoを取得する
   *
   * @param todoId - todoID
   * @returns todo一覧情報
   */
  getTodoByTodoId: async (_parent: any, { todoId }: any) => {
    return await UserTodo.findById({ _id: todoId });
  },
};

export default userTodosQueries;
