import { Dispatch, SetStateAction, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
// import { useCookies } from 'react-cookie';
import { getFormattedDate } from "../../utils/methods";
import { useUpdateTodoMutation, GetAllTodoByUserDocument } from "../../types/generated/graphql";
import { TodoData, TodoModalModeType } from "../../types/types";

//バリデーションチェック
const schema = yup.object().shape({
  title: yup
    .string()
    .required("Todoのタイトルを入力してください")
    .max(50, "50文字以内で入力してください"),
  isStatus: yup.boolean(),
  description: yup.string(),
});

type Data = {
  title: string;
  isStatus: boolean;
  description: string;
}

export const useEditTodo = (todo: TodoData, setModalMode: Dispatch<SetStateAction<TodoModalModeType>>) => {
  //cookie情報取得
  // const [cookies] = useCookies();

  const [updateTodo] = useUpdateTodoMutation({
    refetchQueries: [GetAllTodoByUserDocument],
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: todo.title || "",
      isStatus: todo.isStatus || false,
      description: todo.description || " ",
    },
  });

  // Todoの開始日
  const [startedAt, setStartedAt] = useState(todo.startedAt ? new Date(todo.startedAt) : new Date());

  // Todoの終了日
  const [finishedAt, setFinishedAt] = useState(
    todo.finishedAt ? new Date(todo.finishedAt) : null,
  );

  const onUpdateTodo = async (data: Data) => {
    console.log(startedAt, finishedAt);
    const newData = {
      todoId: todo.id,
      title: data.title,
      description: data.description,
      startedAt: getFormattedDate(startedAt),
      finishedAt: finishedAt ? getFormattedDate(finishedAt) : "",
      isStatus: data.isStatus,
      userId: "621f1cba386085f036353ecd",
      // userId: cookies.ForestaID,
    };

    const upDateTodoDate = await updateTodo({
      variables: {
        todo: newData,
      }
    });
    console.log(upDateTodoDate);
    setModalMode("read");
  };

  return {
    register,
    handleSubmit,
    onUpdateTodo,
    errors,
    reset,
    watch,
    startedAt,
    setStartedAt,
    finishedAt,
    setFinishedAt,
  };
};