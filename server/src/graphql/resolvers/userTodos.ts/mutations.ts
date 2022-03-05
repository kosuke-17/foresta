import { UserTodos } from "../../../models/User.model";
import { TodoAddType, TodoIdType, TodoUpdateType } from "../../../types";
import { success } from "../responseStatus";
/**
 * ## todoの変更処理
 */
const userTodosMutations = {
  /**
   * todoの追加.
   *
   * @param todo - todo情報
   * @returns success : successステータス,追加したtodo情報
   * @returns error : errorステータス
   */
  addTodo: async (_: any, { todo }: TodoAddType) => {
    const { title, description, startedAt, finishedAt, isStatus, userId } =
      todo;
    try {
      const newTodo = new UserTodos({
        title,
        description,
        startedAt,
        finishedAt,
        isStatus,
        userId,
      });

      const result = await newTodo.save();
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * todoの削除.
   *
   * @param todoId - todoId
   * @returns success : successステータス
   * @returns error : errorステータス
   */
  removeTodo: async (_: any, { todoId }: TodoIdType) => {
    try {
      const result = await UserTodos.deleteOne({ _id: todoId });
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * todoの編集.
   *
   * @param todo - todo情報
   * @returns success : successステータス,更新したtodo情報
   * @returns error : errorステータス
   */
  updateTodo: async (_: any, { todo }: TodoUpdateType) => {
    const { todoId, title, description, startedAt, finishedAt, isStatus } =
      todo;
    try {
      const result = await UserTodos.findByIdAndUpdate(
        { _id: todoId },
        {
          $set: {
            title: title,
            description: description,
            startedAt: startedAt,
            finishedAt: finishedAt,
            isStatus: isStatus,
          },
        }
      );
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * todoの状態をtrueにする
   *
   * @param todoId - todoID
   * @returns success : successステータス,更新したtodo情報
   * @returns error : errorステータス
   */
  chekedTodoStatus: async (_: any, { todoId }: TodoIdType) => {
    try {
      const result = await UserTodos.findByIdAndUpdate(
        { _id: todoId },
        { $set: { isStatus: true } }
      );
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * todoの状態をfalseにする
   *
   * @param todoId - todoID
   * @returns success : successステータス,更新したtodo情報
   * @returns error : errorステータス
   */
  unChekedTodoStatus: async (_: any, { todoId }: TodoIdType) => {
    try {
      const result = await UserTodos.findByIdAndUpdate(
        { _id: todoId },
        { $set: { isStatus: false } }
      );
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
};

export default userTodosMutations;
