import { FC, memo } from "react";
import styled from "styled-components";
import { Checkbox } from "@chakra-ui/react";

/**
 * Todoリストの一つのTodoを表示するコンポーネント.
 */
export const TodoWithCheck: FC = memo(() => {

  // Todoのダミーデータ
  const dummyTodo = {
    title: "dummy Todo",
    description: "dummy description",
    isStatus: true,
    startedAt: "3月1日",
    endedAt: null,
  };
  return (
    <_Todo>
      <Checkbox
        isChecked={dummyTodo.isStatus}
        colorScheme="teal"
        size="lg"
        onChange={() => alert("toggle")}
      />
      <span>{dummyTodo.title}</span>
      <span>{dummyTodo.startedAt}</span>
    </_Todo>
  );
});

const _Todo = styled.div`
  display: flex;
  align-items: center;
`;
