import { useRemoveTodoMutation, GetAllTodoByUserDocument } from "../../types/generated/graphql";

/**
 * Todoを削除するためのHook.
 */
export const useDeleteTodo = (todoId: string, onClose: () => void) => {
  const [removeTodo] = useRemoveTodoMutation({
    refetchQueries: [GetAllTodoByUserDocument],
  });
  console.log({ todoId });

  /**
   * Todoを削除する.
   */
  const onDeleteTodo = async () => {
    const res = await removeTodo({
      variables: {
        todoId
      }
    });
    console.log(res);
    onClose();
  };

  return { onDeleteTodo };
};