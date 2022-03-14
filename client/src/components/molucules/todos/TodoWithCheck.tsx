import { FC, memo, Dispatch, SetStateAction, MouseEventHandler } from "react";
import { Checkbox, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { getformattedTodoDate } from "../../../utils/methods";

import type { TodoData } from "../../../types/types";

// 自動生成したTodoの型から使用したいプロパティ名だけを指定
type Props = TodoData & {
  onOpen: (e: any) => void;
  setTodoId: Dispatch<SetStateAction<string>>;
};

/**
 * Todoリストの一つのTodoを表示するコンポーネント.
 */
export const TodoWithCheck: FC<Props> = memo((props) => {
  const { id, title, startedAt, finishedAt, isStatus, onOpen, setTodoId } =
    props;

  const onOpenTodoDetail: MouseEventHandler<HTMLDivElement> = (e) => {
    setTodoId(id);
    onOpen(e);
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      _hover={{ backgroundColor: "#f5f5f5", cursor: "pointer" }}
      onClick={(e) => onOpenTodoDetail(e)}
    >
      <Flex align="center" overflow="hidden" white-space="nowrap">
        <Checkbox
          isChecked={isStatus}
          colorScheme="teal"
          size="lg"
          onChange={() => alert("toggle")}
          padding="5px"
        />
        <_Title>{title}</_Title>
      </Flex>
      <_Date>{getformattedTodoDate(startedAt, finishedAt)}</_Date>
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
