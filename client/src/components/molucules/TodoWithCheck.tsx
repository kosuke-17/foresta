import { FC, memo } from "react";
import { Checkbox, Flex } from "@chakra-ui/react";
// import styled from "styled-components";

/**
 * Todoリストの一つのTodoを表示するコンポーネント.
 */
export const TodoWithCheck: FC = memo(() => {
  // Todoのダミーデータ
  const dummyTodo = {
    title: "dummy Todo",
    description: "dummy description",
    isStatus: true,
    startedAt: "3月1日-3月3日",
    endedAt: null,
  };
  return (
    <Flex align="center" justify="space-between">
      <Flex align="center">
        <Checkbox
          isChecked={dummyTodo.isStatus}
          colorScheme="teal"
          size="lg"
          onChange={() => alert("toggle")}
          padding="5px"
        />
        <span>{dummyTodo.title}</span>
      </Flex>
      <span>{dummyTodo.startedAt}</span>
    </Flex>
  );
});

// const _Todo = styled.div`
//   display: flex;
//   align-items: center;
// `;
