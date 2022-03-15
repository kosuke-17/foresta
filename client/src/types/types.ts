import { Todo } from "./generated/graphql";

// Todoの型
export type TodoData =
  Pick<
    Todo,
    "id" | "title" | "description" | "startedAt" | "finishedAt" | "isStatus"
  >;

  // Todoモーダルのモードの型
  export type TodoModalModeType = "read" | "update" | "create" | "delete";