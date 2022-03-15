import { FC, memo } from "react";
import { Button, Container } from "@chakra-ui/react";

import { TodoList } from "./TodoList";
import { TodoModal } from "./TodoModal";
import { Calendar } from "../../molucules/todos/Calendar";
import { useGetAllTodoByUserQuery } from "../../../types/generated/graphql";
import { useTodoModal } from "../../../hooks/study/useTodoModal";

/**
 * Todoを表示するエリアのコンポーネント.
 */
export const TodosArea: FC = memo(() => {
  const userId = "621f1cba386085f036353ecd";

  // Todoのモーダルを使用するためのhookを使用する
  const { isOpen, onClose, openReadModal, openAddModal } = useTodoModal();

  // Todoリストを取得するためのqueryを使用する
  const { data, error, loading } = useGetAllTodoByUserQuery({
    variables: {
      userId,
    },
  });

  // todoの配列をデータから抽出
  const todos = data?.todos.node;

  return (
    <Container maxW="5xl">
      {/* Todoリストエリア */}
      <Button onClick={openAddModal}>Todo追加</Button>
      <TodoList
        todos={todos || []} // todosがなければ空配列を渡す
        loading={loading}
        error={error}
        openReadModal={openReadModal}
      />

      {/* カレンダーエリア */}
      <Calendar
        todos={todos || []} // todosがなければ空配列を渡す
        error={error}
        openReadModal={openReadModal}
      />

      {/* Todo詳細 */}
      <TodoModal isOpen={isOpen} onClose={onClose} />
    </Container>
  );
});
