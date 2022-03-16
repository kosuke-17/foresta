import { FC, memo, useContext } from "react";
import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  ModalBody,
  Heading,
  Box,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import styled from "styled-components";

import { getformattedTodoDate, returnCodeToBr } from "../../../utils/methods";
import { TodoEditForm } from "./TodoEditForm";
import { TodoModalContext } from "../../../Providers/TodoModalProvider";
import { TodoHeaderButtons } from "../../molucules/todos/TodoHeaderButtons";
import { DeleteConfirm } from "../../molucules/todos/DeleteConfirm";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

/**
 * Todoの詳細表示や編集のためのモーダルコンポーネント.
 */
export const TodoModal: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;

  const { todo, modalMode, setModalMode } = useContext(TodoModalContext);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size="xl">
        <ModalOverlay />
        <ModalContent bg="green.50">
          {/* 編集モードもしくは追加モード */}
          {(modalMode === "update" || modalMode === "create") && (
            <TodoEditForm
              todo={todo}
              setModalMode={setModalMode}
              onClose={onClose}
            />
          )}
          {/* 閲覧モード */}
          {modalMode === "read" && (
            <>
              <ModalHeader>
                <Flex justify="space-between">
                  <CloseButton onClick={onClose} />
                  <TodoHeaderButtons
                    label1={
                      <>
                        <EditIcon />
                        <span>編集</span>
                      </>
                    }
                    label2={
                      <>
                        <DeleteIcon />
                        削除
                      </>
                    }
                    func1={() => setModalMode("update")}
                    func2={() => setModalMode("delete")}
                  />
                </Flex>
              </ModalHeader>

              <ModalBody padding="0 4rem">
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
                      {todo.description
                        ? returnCodeToBr(todo.description)
                        : " "}
                    </_MemoContent>
                  </Box>
                </>
              </ModalBody>
            </>
          )}

          {/* 削除モード */}
          {modalMode === "delete" && <DeleteConfirm onClose={onClose}/>}
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
