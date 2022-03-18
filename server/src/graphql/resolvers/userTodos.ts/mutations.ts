import { UserTodos } from "../../../models";
import { TodoAddType, TodoIdType, TodoUpdateType } from "../../../types";
import { error, success } from "../responseStatus";
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
      return success(result, "追加に成功しました。");
    } catch {
      return error("追加に失敗しました。");
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
      return success(result, "削除に成功しました。");
    } catch {
      return error("削除に失敗しました。");
    }
  },
  /**
   * todoの更新.
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
        },
        { new: true }
      );
      return success(result, "更新に成功しました。");
    } catch {
      return error("更新に失敗しました。");
    }
  },
  /**
   * todoの状態をtrueまたはfalseにする
   *
   * @param todoId - todoID
   * @returns success : successステータス,更新したtodo情報
   * @returns error : errorステータス
   */
  changeTodoStatus: async (_: any, { todoId }: TodoIdType) => {
    const userTodo = await UserTodos.findById({ _id: todoId });
    const updateStatus = !userTodo.isStatus;
    try {
      const result = await UserTodos.findByIdAndUpdate(
        { _id: todoId },
        { $set: { isStatus: updateStatus } },
        { new: true }
      );
      return success(result, "更新に成功しました。");
    } catch {
      return error("更新に失敗しました。");
    }
  },
};

export default userTodosMutations;
