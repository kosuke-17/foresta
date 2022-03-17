import { Todo, Portfolio, User, StudyStack } from "./generated/graphql";

// Todoの型
export type TodoData = Pick<
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

//技術ツリーの型
export type TechTree = {
  treeData: any;
  techTreeData: any;
  indexOfTreeData: number;
};

//技術ブランチの型
export type TechBranch = {
  treeData: any;
  techTreeData: any;
  indexOfTreeData: number;
  techBranchData: any;
  indexOfBranchData: number;
  cheakedLeaf: (
    treeId: string,
    branchId: string,
    leafId: string,
    isStatus: boolean,
  ) => void;
};

//技術リーフの型
export type TechLeaf = {
  treeData: any;
  techLeafData: any;
  techBranchData: any;
  indexOfTreeData: number;
  indexOfBranchData: number;
  indexOfLeafData: number;
  cheakedLeaf: (
    treeId: string,
    branchId: string,
    leafId: string,
    isStatus: boolean,
  ) => void;
};

// エンジニアの型
export type Engineer = {
  engineerData: {
    __typename?: "User" | undefined;
    id: string;
    name: string;
    jobType: string;
    email: string;
    password: string;
    githubURL: string;
  };
  key: number;
};

//学習リストの型
export type AddStack = Pick<
  StudyStack,
  "createdAt" | "skillTagId" | "timeStack" | "content"
>;
