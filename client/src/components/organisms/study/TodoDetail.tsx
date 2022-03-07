import { FC, memo } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
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

type Props = {
  todoId: string;
  isOpen: boolean;
  onClose: () => void;
};

export const TodoDetail: FC<Props> = memo((props) => {
  const { todoId, isOpen, onClose } = props;

  const { data, error, loading } = useGetTodoByIdQuery({
    variables: {
      todoId,
    },
  });

  if (error) {
    return <div>{error.message}</div>;
  }

  if (loading) {
    return <div>loading...</div>;
  }

  console.log(data);
  const todo = data?.todo;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay />
        <ModalContent bg="green.50">
          <ModalHeader>
            <Flex justify="space-between">
              <CloseButton />
              <Flex gap={1}>
                <Button colorScheme="green" size="sm">
                  <EditIcon />
                  編集
                </Button>
                <Button colorScheme="green" size="sm">
                  <DeleteIcon />
                  削除
                </Button>
              </Flex>
            </Flex>
          </ModalHeader>

          <ModalBody padding="0 4rem">
            {todo && (
              <>
                <Heading as="h2" size="lg" mb={5}>
                  {todo?.title}
                </Heading>
                <div>
                  <_Label>日付: </_Label>

                  {getformattedTodoDate(todo?.startedAt, todo?.finishedAt)}
                </div>
                <div>
                  <_Label>ステータス: </_Label>
                  {todo?.isStatus ? "完了" : "未完了"}
                </div>

                <Box mt={5}>
                  <_Label>メモ</_Label>
                  <_MemoContent>
                    {todo?.description ? todo?.description : " "}
                  </_MemoContent>
                </Box>
              </>
            )}
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
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
`;
