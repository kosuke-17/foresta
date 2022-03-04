import { Todo } from "./generated/graphql";

// 一覧用のTodoの型
export type TodoData =
  Pick<
    Todo,
    "id" | "title" | "startedAt" | "finishedAt" | "isStatus"
  >;