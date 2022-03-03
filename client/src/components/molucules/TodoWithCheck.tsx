import { FC, memo } from "react";
import { Checkbox, Flex } from "@chakra-ui/react";
import { Todo } from "../../types/generated/graphql";
// import styled from "styled-components";

// 自動生成したTodoの型から使用したいプロパティ名だけを指定
type Props = Pick<
  Todo,
  "id" | "title" | "startedAt" | "finishedAt" | "isStatus"
>;

/**
 * Todoリストの一つのTodoを表示するコンポーネント.
 */
export const TodoWithCheck: FC<Props> = memo((props) => {
  const { id, title, startedAt, finishedAt, isStatus } = props;

  // Todoのダミーデータ
  // const dummyTodo = {
  //   title: "dummy Todo",
  //   description: "dummy description",
  //   isStatus: true,
  //   startedAt: "3月1日-3月3日",
  //   endedAt: null,
  // };
  return (
    <Flex
      align="center"
      justify="space-between"
      _hover={{ backgroundColor: "#f5f5f5", cursor: "pointer" }}
    >
      <Flex align="center">
        <Checkbox
          isChecked={isStatus!}
          colorScheme="teal"
          size="lg"
          onChange={() => alert("toggle")}
          padding="5px"
        />
        <span>{title}</span>
      </Flex>
      <span>{startedAt}</span>
    </Flex>
  );
});

// const _Todo = styled.div`
//   display: flex;
//   align-items: center;
// `;
