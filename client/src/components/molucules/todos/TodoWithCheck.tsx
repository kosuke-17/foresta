import { FC, memo } from "react";
import { Checkbox, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { getformattedTodoDate } from "../../../utils/methods";

import type { TodoData } from "../../../types/types";

// 自動生成したTodoの型から使用したいプロパティ名だけを指定
type Props = {
  todo: TodoData;
  openReadModal: (todo: TodoData) => void;
};

/**
 * Todoリストの一つのTodoを表示するコンポーネント.
 */
export const TodoWithCheck: FC<Props> = memo((props) => {
  const { todo, openReadModal } = props;

  return (
    <Flex
      align="center"
      justify="space-between"
      _hover={{ backgroundColor: "#f5f5f5", cursor: "pointer" }}
      onClick={() => openReadModal(todo)}
    >
      <Flex align="center" overflow="hidden" white-space="nowrap">
        <Checkbox
          isChecked={todo.isStatus}
          colorScheme="teal"
          size="lg"
          onChange={() => alert("toggle")}
          padding="5px"
        />
        <_Title>{todo.title}</_Title>
      </Flex>
      <_Date>{getformattedTodoDate(todo.startedAt, todo.finishedAt)}</_Date>
    </Flex>
  );
});

// Todoのタイトルのスタイル
// 長すぎる場合は...で省略する
const _Title = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const _Date = styled.span`
  white-space: nowrap;
`;
