import { FC, memo, useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Heading,
  CloseButton,
  Flex,
  Box,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { useGetTodoByIdQuery } from "../../../types/generated/graphql";
import { getformattedTodoDate } from "../../../utils/methods";
import { TodoDetailEdit } from "./TodoDetailEdit";

type Props = {
  todoId: string; 
  isOpen: boolean;
  onClose: () => void;
};

/**
 * Todoの詳細を表示するコンポーネント.
 */
export const TodoDetail: FC<Props> = memo((props) => {
  const { todoId, isOpen, onClose } = props;

  // 編集モードかどうか
  const [isEditing, setIsEditing] = useState(false);

  const { data, error, loading } = useGetTodoByIdQuery({
    variables: {
      todoId,
    },
    fetchPolicy: "cache-and-network",
  });

  const todo = data?.todo;

  if (error) {
    return <div>{error.message}</div>;
  }

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size="xl">
        <ModalOverlay />
        <ModalContent bg="green.50">
          <ModalHeader>
            <Flex justify="space-between">
              <CloseButton onClick={onClose} />
              <Flex gap={1}>
                {isEditing ? (
                  <>
                    <Button
                      colorScheme="green"
                      size="sm"
                      onClick={() => alert("編集完了")}
                    >
                      保存
                    </Button>
                    <Button
                      colorScheme="green"
                      size="sm"
                      onClick={() => setIsEditing(false)}
                    >
                      キャンセル
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      colorScheme="green"
                      size="sm"
                      onClick={() => setIsEditing(true)}
                    >
                      <EditIcon />
                      編集
                    </Button>
                    <Button colorScheme="green" size="sm">
                      <DeleteIcon />
                      削除
                    </Button>
                  </>
                )}
              </Flex>
            </Flex>
          </ModalHeader>

          <ModalBody padding="0 4rem">
            {todo && (
              <>
                {isEditing ? (
                  // 編集モード
                  <TodoDetailEdit todo={todo} />
                ) : (
                  <>
                    <Heading as="h2" size="lg" mb={5}>
                      {todo.title}
                    </Heading>
                    <div>
                      <_Label>日付: </_Label>

                      {getformattedTodoDate(todo.startedAt, todo.finishedAt)}
                    </div>
                    <div>
                      <_Label>ステータス: </_Label>
                      {todo.isStatus ? "完了" : "未完了"}
                    </div>

                    <Box mt={5}>
                      <_Label>メモ</_Label>
                      <_MemoContent>
                        {todo.description ? todo.description : " "}
                      </_MemoContent>
                    </Box>
                  </>
                )}
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
});

const _Label = styled.span`
  font-weight: bold;
`;

const _MemoContent = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 40px;
  border-radius: 10px;
  min-height: 50px;
`;
