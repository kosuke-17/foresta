import { Todo } from "./generated/graphql";

// 一覧用のTodoの型
export type TodoData =
  Pick<
    Todo,
    "id" | "title" | "startedAt" | "finishedAt" | "isStatus"
  >;

// Todo詳細用の型(descriptionあり)
export type TodoDetail =
  Pick<
    Todo,
    "id" | "title" | "description" | "startedAt" | "finishedAt" | "isStatus"
  >;