import { FC, memo, useState } from "react";
import { Container } from "@chakra-ui/react";

import { TodoList } from "./TodoList";
import { TodoDetail } from "./TodoDetail";
import { Calendar } from "../../molucules/todos/Calendar";
import { useModal } from "../../../hooks/useModal";
import { useGetAllTodoByUserQuery } from "../../../types/generated/graphql";

/**
 * Todoを表示するエリアのコンポーネント.
 */
export const TodosArea: FC = memo(() => {
  const userId = "621f1cba386085f036353ecd";
  const { isOpen, onOpen, onClose } = useModal();

  // モーダルを開く対象のTodoを取得する
  const [todoId, setTodoId] = useState("");

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
      <TodoList
        todos={todos || []} // todosがなければ空配列を渡す
        loading={loading}
        error={error}
        onOpen={onOpen}
        setTodoId={setTodoId}
      />

      {/* カレンダーエリア */}
      <Calendar
        todos={todos || []} // todosがなければ空配列を渡す
        error={error}
        onOpen={onOpen}
        setTodoId={setTodoId}
      />

      {/* Todo詳細 */}
      <TodoDetail todoId={todoId} isOpen={isOpen} onClose={onClose} />
    </Container>
  );
});
