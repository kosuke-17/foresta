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

import { DateRangePicker } from "../../atoms/study/DateRangePicker";
import { TodoHeaderButtons } from "../../molucules/todos/TodoHeaderButtons";
import type { TodoData, TodoModalModeType } from "../../../types/types";
import { useEditTodo } from "../../../hooks/study/useEditTodo";
import { TodoModalContext } from "../../../Providers/TodoModalProvider";

type Props = {
  todo: TodoData;
  setModalMode: Dispatch<SetStateAction<TodoModalModeType>>;
  onClose: () => void;
};

/**
 * Todoの詳細を編集するコンポーネント.
 */
export const TodoEditForm: FC<Props> = memo((props) => {
  const { todo, setModalMode, onClose } = props;
  const { modalMode } = useContext(TodoModalContext);

  const {
    register,
    handleSubmit,
    onUpdateTodo,
    onCreateTodo,
    errors,
    watch,
    startedAt,
    setStartedAt,
    finishedAt,
    setFinishedAt,
  } = useEditTodo(todo, setModalMode, onClose);

  return (
    <>
      <ModalHeader>
        {modalMode === "update" && (
          <TodoHeaderButtons
            label1={"更新"}
            label2={"キャンセル"}
            func1={handleSubmit(onUpdateTodo)}
            func2={() => setModalMode("read")}
          />
        )}
        {modalMode === "create" && (
          <TodoHeaderButtons
            label1={"作成"}
            label2={"キャンセル"}
            func1={handleSubmit(onCreateTodo)}
            func2={onClose}
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
          <Flex alignItems="center" mt={2}>
            <_Label>日付: </_Label>
            <DateRangePicker
              startedAt={startedAt}
              setStartedAt={setStartedAt}
              finishedAt={finishedAt}
              setFinishedAt={setFinishedAt}
            />
          </Flex>

          <Flex alignItems="center" >
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
              rows={10}
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
  margin-right: 4px;
`;
