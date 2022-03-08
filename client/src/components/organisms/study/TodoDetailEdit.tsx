import { FC, memo, useCallback, useState } from "react";
import {
  ModalBody,
  Heading,
  Flex,
  Box,
  Input,
  Textarea,
  Checkbox,
} from "@chakra-ui/react";
import styled from "styled-components";

import { getformattedTodoDate } from "../../../utils/methods";

type Props = {
  todo: any;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
};

/**
 * Todoの詳細を編集するコンポーネント.
 */
export const TodoDetailEdit: FC<Props> = memo((props) => {
  const { todo } = props;

  // Todoのタイトル
  const [title, setTitle] = useState(todo.title);

  // Todoのメモ
  const [description, setDescription] = useState(todo.description || " ");

  // Todoのステータス
  const [isStatus, setIsStatus] = useState(todo.isStatus);

  /**
   * タイトルを入力したときのハンドラ.
   */
  const inputTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  /**
   * メモを入力したときのハンドラ.
   */
  const inputDescription = useCallback((e) => {
    setDescription(e.target.value);
  }, []);

  /**
   * ステータスのチェックを切り替えたときのハンドラ.
   */
  const onToggleStatus = useCallback(() => {
    setIsStatus((isStatus: boolean) => !isStatus);
  }, []);

  return (
    <>
      {todo && (
        <>
          <Heading as="h2" size="lg" mb={5}>
            <Input
              value={title}
              onChange={inputTitle}
              focusBorderColor="green.200"
              bg="white"
            />
          </Heading>
          <div>
            <_Label>日付: </_Label>

            {getformattedTodoDate(todo.startedAt, todo.finishedAt)}
          </div>
          <Flex alignItems="center">
            <div>
              <_Label>ステータス: </_Label>
              {isStatus ? "完了" : "未完了"}
            </div>
            <Checkbox
              isChecked={isStatus}
              onChange={onToggleStatus}
              size="lg"
              colorScheme="teal"
              bg="white"
              ml={1}
            />
          </Flex>

          <Box mt={5}>
            <_Label>メモ</_Label>

            <Textarea
              value={description}
              onChange={inputDescription}
              mb={5}
              bg="white"
              focusBorderColor="green.200"
            />
          </Box>
        </>
      )}
    </>
  );
});

const _Label = styled.span`
  font-weight: bold;
`;
