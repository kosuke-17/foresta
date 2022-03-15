import { Flex, ModalBody, Heading, Button } from "@chakra-ui/react";
import { FC, useContext } from "react";
import { useDeleteTodo } from "../../../hooks/study/useDeleteTodo";

import { TodoModalContext } from "../../../Providers/TodoModalProvider";

type Props = {
  onClose: () => void;
};

/**
 * Todoの削除確認モーダルコンポーネント.
 */
export const DeleteConfirm: FC<Props> = (props) => {
  const { onClose } = props;

  const { todo, setModalMode } = useContext(TodoModalContext);
  console.log({ todo });

  const { onDeleteTodo } = useDeleteTodo(todo.id, onClose);

  return (
    <>
      <ModalBody padding="0 4rem">
        <Flex
          height={"300px"}
          align="center"
          justify="center"
          direction="column"
          gap={8}
        >
          <Heading as="p" size="md">
            ⚠️Todoを削除しますか？
          </Heading>
          <Flex align="center" justify="center" gap={2}>
            <Button
              bg="pink.200"
              _hover={{ bg: "pink.100" }}
              onClick={onDeleteTodo}
            >
              削除する
            </Button>
            <Button onClick={() => setModalMode("read")}>キャンセル</Button>
          </Flex>
        </Flex>
      </ModalBody>
    </>
  );
};
