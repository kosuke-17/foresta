import { Dispatch, FC, memo, SetStateAction, useContext } from "react";
import {
  Flex,
  Box,
  Input,
  Textarea,
  Checkbox,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import styled from "styled-components";

import type { TodoData } from "../../../types/types";
import { DateRangePicker } from "../../atoms/study/DateRangePicker";
import { useEditTodo } from "../../../hooks/study/useEditTodo";
import { TodoHeaderButtons } from "../../molucules/todos/TodoHeaderButtons";
import { TodoModalContext } from "../../../Providers/TodoModalProvider";

type Props = {
  todo: TodoData;
  setModalMode: Dispatch<SetStateAction<"read" | "edit" | "add" | "delete">>;
};

/**
 * Todoの詳細を編集するコンポーネント.
 */
export const TodoDetailEdit: FC<Props> = memo((props) => {
  const { todo, setModalMode } = props;
  const { modalMode } = useContext(TodoModalContext);

  const {
    register,
    handleSubmit,
    onUpdateTodo,
    errors,
    watch,
    startedAt,
    setStartedAt,
    finishedAt,
    setFinishedAt,
  } = useEditTodo(todo, setModalMode);

  const cancelEdit = () => {
    setModalMode("read");
  };

  return (
    <>
      <ModalHeader>
        {modalMode === "edit" && (
          <TodoHeaderButtons
            label1={"更新"}
            label2={"キャンセル"}
            func1={handleSubmit(onUpdateTodo)}
            func2={cancelEdit}
          />
        )}
        {modalMode === "add" && (
          <TodoHeaderButtons
            label1={"作成"}
            label2={"キャンセル"}
            func1={handleSubmit(onUpdateTodo)}
            func2={cancelEdit}
          />
        )}
      </ModalHeader>

      <ModalBody padding="0 4rem">
        <>
          <_Label>Todoタイトル: </_Label>
          <div>
            <Input
              focusBorderColor="green.200"
              bg="white"
              {...register("title")}
            />
            <Box textColor="red" fontSize="xs">
              {errors.title?.message}
            </Box>
          </div>
          <Flex alignItems="center" gap={2} mt={2}>
            <_Label>日付: </_Label>
            <DateRangePicker
              startedAt={startedAt}
              setStartedAt={setStartedAt}
              finishedAt={finishedAt}
              setFinishedAt={setFinishedAt}
            />
          </Flex>

          <Flex alignItems="center">
            <_Label>ステータス: </_Label>
            {watch("isStatus") ? "完了" : "未完了"}
            <Checkbox
              {...register("isStatus")}
              size="lg"
              colorScheme="teal"
              bg="white"
              ml={1}
            />
          </Flex>

          <Box mt={5}>
            <_Label>メモ</_Label>
            <Textarea
              {...register("description")}
              mb={5}
              bg="white"
              focusBorderColor="green.200"
            />
          </Box>
        </>
      </ModalBody>
    </>
  );
});

const _Label = styled.span`
  font-weight: bold;
  white-space: nowrap;
`;
