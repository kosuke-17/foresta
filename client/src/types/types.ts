import { Todo, Portfolio, User, StudyStack } from "./generated/graphql";

// 一覧用のTodoの型
export type TodoData = Pick<
  Todo,
  "id" | "title" | "startedAt" | "finishedAt" | "isStatus"
>;

// Todo詳細用の型(descriptionあり)
export type TodoDetail = Pick<
  Todo,
  "id" | "title" | "description" | "startedAt" | "finishedAt" | "isStatus"
>;

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

//学習リストの型
export type AddStack = Pick<
  StudyStack,
  "createdAt" | "skillTagId" | "timeStack" | "content"
>;
