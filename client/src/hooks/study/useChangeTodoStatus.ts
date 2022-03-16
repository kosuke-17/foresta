import { MouseEventHandler } from "react";
import { useChangeTodoStatusMutation, GetAllTodoByUserDocument } from "../../types/generated/graphql";

/**
 * Todoの完了/未完了を切り替えるためのHook.
 * @param todoId 更新するTodoのId
 */
export const useChangeTodoStatus = (todoId: string) => {

  // Todoの完了/未完了を切り替えるためのmutation
  const [changeTodoStatus] = useChangeTodoStatusMutation({
    refetchQueries: [GetAllTodoByUserDocument],
  });

  /**
   * チェックボックス押下時にTodoの完了/未完了を切り替える.
   */
  const onChangeTodoStatus: MouseEventHandler<HTMLDivElement> = (e) => {
    // 親要素への伝播を止める(チェックボックス押下時にモーダルを開かないようにする)
    e.stopPropagation();

    changeTodoStatus({
      variables: {
        todoId
      }
    });
  };

  return { onChangeTodoStatus };
};