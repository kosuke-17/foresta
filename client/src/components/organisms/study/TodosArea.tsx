import { FC, memo, useState } from "react";
import {
  Container,
} from "@chakra-ui/react";

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

  const [todoId, setTodoId] = useState("");

  const { data, error, loading } = useGetAllTodoByUserQuery({
    variables: {
      userId,
    },
  });

  return (
    <Container maxW="5xl">
      {/* Todoリストエリア */}
      <TodoList
        todos={data?.todos}
        loading={loading}
        error={error}
        onOpen={onOpen}
        setTodoId={setTodoId}
      />

      {/* カレンダーエリア */}
      <Calendar todos={data?.todos} onOpen={onOpen} setTodoId={setTodoId} />

      {/* Todo詳細 */}
      <TodoDetail todoId={todoId} isOpen={isOpen} onClose={onClose} />
    </Container>
  );
});
