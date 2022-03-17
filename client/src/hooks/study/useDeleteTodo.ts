import { useToast } from "@chakra-ui/react";
import { useRemoveTodoMutation, GetAllTodoByUserDocument } from "../../types/generated/graphql";

/**
 * Todoを削除するためのHook.
 */
export const useDeleteTodo = (todoId: string, onClose: () => void) => {
  // トーストアラート
  const toast = useToast();

  // Todoを削除するmutation
  const [removeTodo] = useRemoveTodoMutation({
    refetchQueries: [GetAllTodoByUserDocument],
  });

  /**
   * Todoを削除する.
   */
  const onDeleteTodo = async () => {
    try {
      const res = await removeTodo({
        variables: {
          todoId
        }
      });
      if (res.data?.removeTodo.status === "success") {
        toast({
          title: "Todoを削除しました",
          status: "success",
          position: "bottom-left",
          isClosable: true
        });
        onClose();
      } else if (res.data?.removeTodo.status === "error") {
        toast({
          title: "Todoの削除に失敗しました",
          status: "error",
          position: "bottom-left",
          isClosable: true
        });
      }

    } catch (error) {
      if (error instanceof Error) { // errorがunknown型で返ってくるので型ガード
        toast({
          title: "Todoの削除に失敗しました",
          status: "error",
          position: "bottom-left",
          isClosable: true
        });
      }
    }
  };

  return { onDeleteTodo };
};