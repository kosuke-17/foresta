import { Todo, Portfolio, User } from "./generated/graphql";

// Todoの型
export type TodoData =
  Pick<
    Todo,
    "id" | "title" | "description" | "startedAt" | "finishedAt" | "isStatus"
  >;

// Todoモーダルのモードの型
export type TodoModalModeType = "read" | "update" | "create" | "delete";

//ユーザ型
export type UserType = Pick<
  User,
  "id" | "name" | "jobType" | "githubURL" | "spreadSheetID"
>;

//制作物
export type PortfolioType = Pick<
  Portfolio,
  | "id"
  | "title"
  | "description"
  | "img"
  | "portfolioURL"
  | "specSheetId"
  | "skills"
>;

//ユーザ情報編集
export type userInfoEditType = {
  name: string;
  jobType: string;
  githubURL: string;
};
