import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
};

export type CreatedTechArea = {
  __typename?: "CreatedTechArea";
  node: TechArea;
  status: Scalars["String"];
};

export type CreatedTechBranch = {
  __typename?: "CreatedTechBranch";
  node: TechBranch;
  status: Scalars["String"];
};

export type CreatedTechLeaf = {
  __typename?: "CreatedTechLeaf";
  node: TechLeaf;
  status: Scalars["String"];
};

export type CreatedTechTree = {
  __typename?: "CreatedTechTree";
  node: TechTree;
  status: Scalars["String"];
};

/** データを変更する */
export type Mutation = {
  __typename?: "Mutation";
  /** ユーザーの学習記録を追加. */
  addStudyStack: ResponseStudyStack;
  /** Todoを追加. */
  addTodo: ResponseTodo;
  /** ユーザーの持つUrlを追加. */
  addUserUrls: ResponseUserUrls;
  /** ユーザー習得技術を更新. */
  changeLeafStatus: ResponseUserTechLeaf;
  /** Todo状態をtrueまたはfalse. */
  changeTodoStatus: ResponseTodo;
  /** ポートフォリオを作成. */
  createPortfolio: ResponsePortfolio;
  createTechArea: CreatedTechArea;
  createTechBranch: CreatedTechBranch;
  /** Techを追加. */
  createTechLeaf: CreatedTechLeaf;
  createTechTree: CreatedTechTree;
  /** ユーザーを追加. */
  createUser: ResponseUser;
  /** ポートフォリオを削除. */
  removePortfolio: Res;
  /** ユーザーの学習記録を削除. */
  removeStudyStack: ResponseStudyStack;
  /** Todoを削除. */
  removeTodo: ResponseTodo;
  /** ユーザーの持つUrlを削除. */
  removeUserUrls: ResponseUserUrls;
  /** ポートフォリオを更新. */
  updatePortfolio: ResponsePortfolio;
  /** スプレッドシートの自己PRなどを更新. */
  updateSpeadSelfPR: Res;
  /** 開発経験情報を更新. */
  updateSpecProject: ResponseSpecProject;
  /** スペックシート情報を更新. */
  updateSpecSheet: ResponseSpecSheet;
  /** スキル要約情報を更新. */
  updateSpecTechInfo: ResponseSpecTechInfo;
  /** 基本情報を更新. */
  updateSpecUserInfo: ResponseSpecUserInfo;
  /** スプレッドシートのポートフォリオURLを更新. */
  updateSpreadPortfolioUrl: Res;
  /** スプレッドシートの開発経験を更新. */
  updateSpreadProject: Res;
  /** スプレッドシートのスキル要約を更新. */
  updateSpreadTechInfo: Res;
  /** スプレッドシートの基本情報を更新. */
  updateSpreadUserInfo: Res;
  /** ユーザーの学習記録を更新. */
  updateStudyStack: ResponseStudyStack;
  /** Todoを更新. */
  updateTodo: ResponseTodo;
  /** ユーザーを編集. */
  updateUser: ResponseUser;
  /** ユーザーがログイン. */
  userLogin: ResponseUser;
};

/** データを変更する */
export type MutationAddStudyStackArgs = {
  stack: StudyStackAddInput;
};

/** データを変更する */
export type MutationAddTodoArgs = {
  todo: TodoAddInput;
};

/** データを変更する */
export type MutationAddUserUrlsArgs = {
  urlData: UserUrlsAddInput;
};

/** データを変更する */
export type MutationChangeLeafStatusArgs = {
  techLeafInfo: UserTechLeafUpdateInput;
};

/** データを変更する */
export type MutationChangeTodoStatusArgs = {
  todoId: Scalars["String"];
};

/** データを変更する */
export type MutationCreatePortfolioArgs = {
  portfolio: PortfolioCreateInput;
};

/** データを変更する */
export type MutationCreateTechAreaArgs = {
  techArea: TechAreaCreateInput;
};

/** データを変更する */
export type MutationCreateTechBranchArgs = {
  techBranch: TechBranchCreateInput;
};

/** データを変更する */
export type MutationCreateTechLeafArgs = {
  techLeaf: TechLeafCreateInput;
};

/** データを変更する */
export type MutationCreateTechTreeArgs = {
  techTree: TechTreeCreateInput;
};

/** データを変更する */
export type MutationCreateUserArgs = {
  user: UserCreateInput;
};

/** データを変更する */
export type MutationRemovePortfolioArgs = {
  portfolioId: Scalars["String"];
};

/** データを変更する */
export type MutationRemoveStudyStackArgs = {
  studyStackId: Scalars["String"];
};

/** データを変更する */
export type MutationRemoveTodoArgs = {
  todoId: Scalars["String"];
};

/** データを変更する */
export type MutationRemoveUserUrlsArgs = {
  urlData: UserUrlsRemoveInput;
};

/** データを変更する */
export type MutationUpdatePortfolioArgs = {
  portfolio: PortfolioUpdateInput;
};

/** データを変更する */
export type MutationUpdateSpeadSelfPrArgs = {
  userId: Scalars["String"];
};

/** データを変更する */
export type MutationUpdateSpecProjectArgs = {
  specProject: SpecProjectUpdateInput;
};

/** データを変更する */
export type MutationUpdateSpecSheetArgs = {
  specSheet: SpecSheetUpdateInput;
};

/** データを変更する */
export type MutationUpdateSpecTechInfoArgs = {
  specTechInfo: SpecTechInfoUpdateInput;
};

/** データを変更する */
export type MutationUpdateSpecUserInfoArgs = {
  specUserInfo: SpecUserInfoUpdateInput;
};

/** データを変更する */
export type MutationUpdateSpreadPortfolioUrlArgs = {
  userId: Scalars["String"];
};

/** データを変更する */
export type MutationUpdateSpreadProjectArgs = {
  projectIndex: Scalars["Int"];
  userId: Scalars["String"];
};

/** データを変更する */
export type MutationUpdateSpreadTechInfoArgs = {
  userId: Scalars["String"];
};

/** データを変更する */
export type MutationUpdateSpreadUserInfoArgs = {
  userId: Scalars["String"];
};

/** データを変更する */
export type MutationUpdateStudyStackArgs = {
  stack: StudyStackUpdateInput;
};

/** データを変更する */
export type MutationUpdateTodoArgs = {
  todo: TodoUpdateInput;
};

/** データを変更する */
export type MutationUpdateUserArgs = {
  user: UserUpdateInput;
};

/** データを変更する */
export type MutationUserLoginArgs = {
  user: UserLoginInput;
};

export type Portfolio = {
  __typename?: "Portfolio";
  description: Scalars["String"];
  id: Scalars["ID"];
  img: Scalars["String"];
  portfolioURL: Scalars["String"];
  skills: Array<Scalars["String"]>;
  specSheetId: Scalars["ID"];
  title: Scalars["String"];
  userId: Scalars["ID"];
};

export type PortfolioCreateInput = {
  description: Scalars["String"];
  img?: InputMaybe<Scalars["String"]>;
  portfolioURL?: InputMaybe<Scalars["String"]>;
  skills: Array<InputMaybe<Scalars["String"]>>;
  specSheetId: Scalars["ID"];
  title: Scalars["String"];
  userId: Scalars["ID"];
};

export type PortfolioUpdateInput = {
  description: Scalars["String"];
  img?: InputMaybe<Scalars["String"]>;
  portfolioId: Scalars["ID"];
  portfolioURL?: InputMaybe<Scalars["String"]>;
  skills: Array<InputMaybe<Scalars["String"]>>;
  title: Scalars["String"];
};

/** データを取得する */
export type Query = {
  __typename?: "Query";
  /** スキル取得. */
  getAllSkill: Array<Skill>;
  /** ユーザーのTodo一覧情報を取得. */
  getAllStudyStack: ResponseStudyStackArr;
  getAllTechArea: Array<TechArea>;
  getAllTechBranch: Array<TechBranch>;
  /** それぞれのTechを取得. */
  getAllTechLeaf: Array<TechLeaf>;
  getAllTechTree: Array<TechTree>;
  /** ユーザーのTodo一覧情報を取得. */
  getAllTodoByUser: ResponseTodoArr;
  /** 全てのユーザー情報を取得. */
  getAllUser: Array<User>;
  /** フレームワーク取得 */
  getFrameworks: Skill;
  /** 言語取得 */
  getLanguages: Skill;
  /** ライブラリ取得 */
  getLibraries: Skill;
  /** 動作環境取得 */
  getOperationEnvs: Skill;
  /** その他のツール取得 */
  getOtherTools: Skill;
  /** ユーザーIDに紐づくポートフォリオ情報を取得. */
  getPortfolioByUserId: ResponsePortfolio;
  /** ユーザーIDに紐づくスペックシート情報を取得. */
  getSheetByUserId: ResponseSpecSheet;
  /** スプレッドシートを取得 */
  getSpreadSheet: Res;
  /** StudyStackIdに紐づいたStudyStack情報を取得. */
  getStudyStackById: ResponseStudyStack;
  /** TodoIdに紐づいたTodo情報を取得. */
  getTodoById: ResponseTodo;
  /** ユーザーidに紐づくユーザー情報を取得. */
  getUserById: ResponseUser;
  /** エリアidに紐づく技術情報を取得. */
  getUserLeafsById: ResponseUserTechLeaf;
};

/** データを取得する */
export type QueryGetAllStudyStackArgs = {
  userId: Scalars["String"];
};

/** データを取得する */
export type QueryGetAllTodoByUserArgs = {
  userId: Scalars["String"];
};

/** データを取得する */
export type QueryGetFrameworksArgs = {
  name: Scalars["String"];
};

/** データを取得する */
export type QueryGetLanguagesArgs = {
  name: Scalars["String"];
};

/** データを取得する */
export type QueryGetLibrariesArgs = {
  name: Scalars["String"];
};

/** データを取得する */
export type QueryGetOperationEnvsArgs = {
  name: Scalars["String"];
};

/** データを取得する */
export type QueryGetOtherToolsArgs = {
  name: Scalars["String"];
};

/** データを取得する */
export type QueryGetPortfolioByUserIdArgs = {
  userId: Scalars["String"];
};

/** データを取得する */
export type QueryGetSheetByUserIdArgs = {
  userId: Scalars["String"];
};

/** データを取得する */
export type QueryGetSpreadSheetArgs = {
  userId: Scalars["String"];
};

/** データを取得する */
export type QueryGetStudyStackByIdArgs = {
  studyStackId: Scalars["String"];
};

/** データを取得する */
export type QueryGetTodoByIdArgs = {
  todoId: Scalars["String"];
};

/** データを取得する */
export type QueryGetUserByIdArgs = {
  _id: Scalars["String"];
};

/** データを取得する */
export type QueryGetUserLeafsByIdArgs = {
  userId: Scalars["String"];
};

export type Res = {
  __typename?: "Res";
  msg?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
};

export type ResponsePortfolio = {
  __typename?: "ResponsePortfolio";
  msg?: Maybe<Scalars["String"]>;
  node: Portfolio;
  status: Scalars["String"];
};

export type ResponseSpecProject = {
  __typename?: "ResponseSpecProject";
  msg?: Maybe<Scalars["String"]>;
  node: SpecProjectSheet;
  status: Scalars["String"];
};

export type ResponseSpecSheet = {
  __typename?: "ResponseSpecSheet";
  msg?: Maybe<Scalars["String"]>;
  node: SpecSheet;
  status: Scalars["String"];
};

export type ResponseSpecTechInfo = {
  __typename?: "ResponseSpecTechInfo";
  msg?: Maybe<Scalars["String"]>;
  node: SpecTechInfoSheet;
  status: Scalars["String"];
};

export type ResponseSpecUserInfo = {
  __typename?: "ResponseSpecUserInfo";
  msg?: Maybe<Scalars["String"]>;
  node: SpecUserInfoSheet;
  status: Scalars["String"];
};

export type ResponseStudyStack = {
  __typename?: "ResponseStudyStack";
  node: StudyStack;
  status: Scalars["String"];
};

export type ResponseStudyStackArr = {
  __typename?: "ResponseStudyStackArr";
  msg: Scalars["String"];
  node: Array<StudyStack>;
  status: Scalars["String"];
};

export type ResponseTodo = {
  __typename?: "ResponseTodo";
  msg: Scalars["String"];
  node: Todo;
  status: Scalars["String"];
};

export type ResponseTodoArr = {
  __typename?: "ResponseTodoArr";
  msg: Scalars["String"];
  node: Array<Todo>;
  status: Scalars["String"];
};

export type ResponseUser = {
  __typename?: "ResponseUser";
  msg: Scalars["String"];
  node: User;
  status: Scalars["String"];
};

export type ResponseUserTechLeaf = {
  __typename?: "ResponseUserTechLeaf";
  msg: Scalars["String"];
  node: UserLeafs;
  status: Scalars["String"];
};

export type ResponseUserUrls = {
  __typename?: "ResponseUserUrls";
  msg: Scalars["String"];
  node: UserUrls;
  status: Scalars["String"];
};

export type Skill = {
  __typename?: "Skill";
  data: Array<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type SpecProjectSheet = {
  __typename?: "SpecProjectSheet";
  content: Scalars["String"];
  devRoles: Array<Scalars["String"]>;
  finishedAt: Scalars["Date"];
  frameworks: Array<Scalars["String"]>;
  id: Scalars["String"];
  languages: Array<Scalars["String"]>;
  libraries: Array<Scalars["String"]>;
  memberCount: Scalars["Int"];
  name: Scalars["String"];
  operationEnvs: Array<Scalars["String"]>;
  otherTools: Array<Scalars["String"]>;
  roleSharing: Scalars["String"];
  specSheetId: Scalars["ID"];
  startedAt: Scalars["Date"];
};

export type SpecProjectUpdateInput = {
  content: Scalars["String"];
  devRoles: Array<Scalars["String"]>;
  finishedAt: Scalars["Date"];
  frameworks: Array<Scalars["String"]>;
  languages: Array<Scalars["String"]>;
  libraries: Array<Scalars["String"]>;
  memberCount: Scalars["Int"];
  name: Scalars["String"];
  operationEnvs: Array<Scalars["String"]>;
  otherTools: Array<Scalars["String"]>;
  roleSharing: Scalars["String"];
  specProjectId: Scalars["ID"];
  specSheetId: Scalars["ID"];
  startedAt: Scalars["Date"];
};

export type SpecSheet = {
  __typename?: "SpecSheet";
  certification: Scalars["String"];
  id: Scalars["ID"];
  prevJobs: Array<PrevJobsContent>;
  project: Array<SpecProjectSheet>;
  selfIntro: Scalars["String"];
  studyOnOwnTime: Scalars["String"];
  techInfo: SpecTechInfoSheet;
  userId: Scalars["ID"];
  userInfo: SpecUserInfoSheet;
};

export type SpecSheetUpdateInput = {
  certification: Scalars["String"];
  prevJobs: Array<Scalars["String"]>;
  selfIntro: Scalars["String"];
  specSheetId: Scalars["ID"];
  studyOnOwnTime: Scalars["String"];
};

export type SpecTechInfoSheet = {
  __typename?: "SpecTechInfoSheet";
  devRoles: Array<Scalars["String"]>;
  frameworks: Array<Scalars["String"]>;
  languages: Array<Scalars["String"]>;
  libraries: Array<Scalars["String"]>;
  operationEnvs: Array<Scalars["String"]>;
  otherTools: Array<Scalars["String"]>;
  specSheetId: Scalars["ID"];
};

export type SpecTechInfoUpdateInput = {
  devRoles: Array<Scalars["String"]>;
  frameworks: Array<Scalars["String"]>;
  languages: Array<Scalars["String"]>;
  libraries: Array<Scalars["String"]>;
  operationEnvs: Array<Scalars["String"]>;
  otherTools: Array<Scalars["String"]>;
  specTechInfoId: Scalars["ID"];
};

export type SpecUserInfoSheet = {
  __typename?: "SpecUserInfoSheet";
  age: Scalars["Int"];
  gender: Scalars["String"];
  itExpAmount: Scalars["Int"];
  nearestStation: Scalars["String"];
  pgExpAmount: Scalars["Int"];
  seExpAmount: Scalars["Int"];
  specSheetId: Scalars["ID"];
  startWorkDate: Scalars["String"];
  stuffID: Scalars["ID"];
};

export type SpecUserInfoUpdateInput = {
  age: Scalars["Int"];
  gender: Scalars["String"];
  itExpAmount: Scalars["Int"];
  nearestStation: Scalars["String"];
  pgExpAmount: Scalars["Int"];
  seExpAmount: Scalars["Int"];
  specUserInfoId: Scalars["ID"];
  startWorkDate: Scalars["String"];
  stuffID: Scalars["ID"];
};

export type StudyStack = {
  __typename?: "StudyStack";
  content: Scalars["String"];
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  skillTagId: Scalars["ID"];
  timeStack: Scalars["Int"];
  userId: Scalars["ID"];
};

export type StudyStackAddInput = {
  content: Scalars["String"];
  createdAt: Scalars["Date"];
  skillTagId: Scalars["ID"];
  timeStack: Scalars["Int"];
  userId: Scalars["ID"];
};

export type StudyStackUpdateInput = {
  content: Scalars["String"];
  createdAt: Scalars["Date"];
  skillTagId: Scalars["ID"];
  studyStackId: Scalars["ID"];
  timeStack: Scalars["Int"];
};

export type TechArea = {
  __typename?: "TechArea";
  id: Scalars["ID"];
  name: Scalars["String"];
  techTrees: Array<TechTree>;
};

export type TechAreaCreateInput = {
  name: Scalars["String"];
};

export type TechBranch = {
  __typename?: "TechBranch";
  id: Scalars["ID"];
  name: Scalars["String"];
  techLeafs: Array<TechLeaf>;
  techTree_id: Scalars["ID"];
};

export type TechBranchCreateInput = {
  name: Scalars["String"];
  techTree_id: Scalars["ID"];
};

export type TechLeaf = {
  __typename?: "TechLeaf";
  id: Scalars["ID"];
  name: Scalars["String"];
  techBranch_id: Scalars["ID"];
};

export type TechLeafCreateInput = {
  name: Scalars["String"];
  techBranch_id: Scalars["ID"];
};

export type TechTree = {
  __typename?: "TechTree";
  color: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  techArea_id: Scalars["ID"];
  techBranches: Array<TechBranch>;
};

export type TechTreeCreateInput = {
  color: Scalars["String"];
  name: Scalars["String"];
  techArea_id: Scalars["ID"];
};

export type Todo = {
  __typename?: "Todo";
  description?: Maybe<Scalars["String"]>;
  finishedAt?: Maybe<Scalars["Date"]>;
  id: Scalars["ID"];
  isStatus: Scalars["Boolean"];
  startedAt: Scalars["Date"];
  title: Scalars["String"];
  userId: Scalars["ID"];
};

export type TodoAddInput = {
  description?: InputMaybe<Scalars["String"]>;
  finishedAt?: InputMaybe<Scalars["Date"]>;
  isStatus: Scalars["Boolean"];
  startedAt: Scalars["Date"];
  title: Scalars["String"];
  userId: Scalars["ID"];
};

export type TodoUpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  finishedAt?: InputMaybe<Scalars["Date"]>;
  isStatus: Scalars["Boolean"];
  startedAt: Scalars["Date"];
  title: Scalars["String"];
  todoId: Scalars["ID"];
  userId: Scalars["ID"];
};

export type Url = {
  __typename?: "URL";
  id: Scalars["ID"];
  url: Scalars["String"];
  urlName: Scalars["String"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"];
  githubURL: Scalars["String"];
  id: Scalars["ID"];
  jobType: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  portfolio: Array<Maybe<Portfolio>>;
  spreadSheetID: Scalars["String"];
  userLeafs: UserLeafs;
  userUrls: UserUrls;
};

export type UserCreateInput = {
  email: Scalars["String"];
  githubURL: Scalars["String"];
  jobType: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  spreadSheetID: Scalars["String"];
};

export type UserLeafs = {
  __typename?: "UserLeafs";
  id: Scalars["ID"];
  myForest: Array<TreeInfo>;
  userId: Scalars["ID"];
};

export type UserLoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type UserTechLeafUpdateInput = {
  branchId: Scalars["ID"];
  currentStatus: Scalars["Boolean"];
  leafId: Scalars["ID"];
  treeId: Scalars["ID"];
  userLeafsId: Scalars["ID"];
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars["String"]>;
  githubURL: Scalars["String"];
  jobType: Scalars["String"];
  name: Scalars["String"];
  password?: InputMaybe<Scalars["String"]>;
  spreadSheetID: Scalars["String"];
  userId: Scalars["String"];
};

export type UserUrls = {
  __typename?: "UserUrls";
  id: Scalars["ID"];
  userId: Scalars["ID"];
  user_urls: Array<Maybe<Url>>;
};

export type UserUrlsAddInput = {
  url: Scalars["String"];
  urlId: Scalars["ID"];
  urlName: Scalars["String"];
};

export type UserUrlsRemoveInput = {
  urlId: Scalars["ID"];
  userUrlsId: Scalars["ID"];
};

export type BranchInfo = {
  __typename?: "branchInfo";
  id: Scalars["ID"];
  leafs: Array<LeafInfo>;
  name: Scalars["String"];
};

export type LeafInfo = {
  __typename?: "leafInfo";
  id: Scalars["String"];
  isStatus: Scalars["Boolean"];
  name: Scalars["String"];
  techBranch_id: Scalars["String"];
  techTree_id: Scalars["String"];
};

export type PrevJobsContent = {
  __typename?: "prevJobsContent";
  content: Scalars["String"];
};

export type TreeInfo = {
  __typename?: "treeInfo";
  achievementRate: Scalars["Int"];
  areaId: Scalars["ID"];
  branches: Array<BranchInfo>;
  color: Scalars["String"];
  id: Scalars["ID"];
  treeId: Scalars["ID"];
  treeName: Scalars["String"];
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetUserByIdQuery = {
  __typename?: "Query";
  user: {
    __typename?: "ResponseUser";
    status: string;
    msg: string;
    node: {
      __typename?: "User";
      name: string;
      jobType: string;
      spreadSheetID: string;
      githubURL: string;
    };
  };
};

export type GetUserPortfolioByIdQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetUserPortfolioByIdQuery = {
  __typename?: "Query";
  portfolios: {
    __typename?: "ResponseUser";
    status: string;
    msg: string;
    node: {
      __typename?: "User";
      portfolio: Array<{
        __typename?: "Portfolio";
        id: string;
        title: string;
        description: string;
        img: string;
        portfolioURL: string;
        skills: Array<string>;
        specSheetId: string;
      } | null>;
    };
  };
};

export type GetUrlByIdQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetUrlByIdQuery = {
  __typename?: "Query";
  urls: {
    __typename?: "ResponseUser";
    status: string;
    msg: string;
    node: {
      __typename?: "User";
      userUrls: {
        __typename?: "UserUrls";
        user_urls: Array<{
          __typename?: "URL";
          urlName: string;
          url: string;
        } | null>;
      };
    };
  };
};

export type GetSheetByUserIdQueryVariables = Exact<{
  userId: Scalars["String"];
}>;

export type GetSheetByUserIdQuery = {
  __typename?: "Query";
  user: {
    __typename?: "ResponseSpecSheet";
    status: string;
    msg?: string | null;
    node: {
      __typename?: "SpecSheet";
      userInfo: {
        __typename?: "SpecUserInfoSheet";
        stuffID: string;
        age: number;
        gender: string;
        nearestStation: string;
        startWorkDate: string;
        seExpAmount: number;
        pgExpAmount: number;
        itExpAmount: number;
        specSheetId: string;
      };
    };
  };
};

export type GetSheetPrByUserIdQueryVariables = Exact<{
  userId: Scalars["String"];
}>;

export type GetSheetPrByUserIdQuery = {
  __typename?: "Query";
  pr: {
    __typename?: "ResponseSpecSheet";
    status: string;
    msg?: string | null;
    node: { __typename?: "SpecSheet"; id: string; selfIntro: string };
  };
};

export type GetSheetSkillByUserIdQueryVariables = Exact<{
  userId: Scalars["String"];
}>;

export type GetSheetSkillByUserIdQuery = {
  __typename?: "Query";
  skills: {
    __typename?: "ResponseSpecSheet";
    status: string;
    msg?: string | null;
    node: {
      __typename?: "SpecSheet";
      techInfo: {
        __typename?: "SpecTechInfoSheet";
        operationEnvs: Array<string>;
        languages: Array<string>;
        frameworks: Array<string>;
        libraries: Array<string>;
        otherTools: Array<string>;
        devRoles: Array<string>;
        specSheetId: string;
      };
    };
  };
};

export type GetSheetOtherByUserIdQueryVariables = Exact<{
  userId: Scalars["String"];
}>;

export type GetSheetOtherByUserIdQuery = {
  __typename?: "Query";
  other: {
    __typename?: "ResponseSpecSheet";
    status: string;
    msg?: string | null;
    node: {
      __typename?: "SpecSheet";
      id: string;
      studyOnOwnTime: string;
      certification: string;
      prevJobs: Array<{ __typename?: "prevJobsContent"; content: string }>;
    };
  };
};

export type GetSheetProjectByUserIdQueryVariables = Exact<{
  userId: Scalars["String"];
}>;

export type GetSheetProjectByUserIdQuery = {
  __typename?: "Query";
  projects: {
    __typename?: "ResponseSpecSheet";
    status: string;
    msg?: string | null;
    node: {
      __typename?: "SpecSheet";
      project: Array<{
        __typename?: "SpecProjectSheet";
        id: string;
        name: string;
        startedAt: any;
        finishedAt: any;
        roleSharing: string;
        memberCount: number;
        content: string;
        operationEnvs: Array<string>;
        languages: Array<string>;
        frameworks: Array<string>;
        libraries: Array<string>;
        otherTools: Array<string>;
        devRoles: Array<string>;
        specSheetId: string;
      }>;
    };
  };
};

export type GetSpreadSheetIdQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetSpreadSheetIdQuery = {
  __typename?: "Query";
  getUserById: {
    __typename?: "ResponseUser";
    status: string;
    msg: string;
    node: { __typename?: "User"; spreadSheetID: string };
  };
};

export type GetPrAndSheetByUserIdQueryVariables = Exact<{
  userId: Scalars["String"];
}>;

export type GetPrAndSheetByUserIdQuery = {
  __typename?: "Query";
  pr: {
    __typename?: "ResponseSpecSheet";
    status: string;
    msg?: string | null;
    node: { __typename?: "SpecSheet"; id: string; selfIntro: string };
  };
  other: {
    __typename?: "ResponseSpecSheet";
    status: string;
    msg?: string | null;
    node: {
      __typename?: "SpecSheet";
      id: string;
      studyOnOwnTime: string;
      certification: string;
      prevJobs: Array<{ __typename?: "prevJobsContent"; content: string }>;
    };
  };
};

export type UpdateUserMutationVariables = Exact<{
  user: UserUpdateInput;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  updateUser: { __typename?: "ResponseUser"; status: string; msg: string };
};

export type CreatePortfolioMutationVariables = Exact<{
  portfolio: PortfolioCreateInput;
}>;

export type CreatePortfolioMutation = {
  __typename?: "Mutation";
  createPortfolio: {
    __typename?: "ResponsePortfolio";
    status: string;
    msg?: string | null;
  };
};

export type UpdatePortfolioMutationVariables = Exact<{
  portfolio: PortfolioUpdateInput;
}>;

export type UpdatePortfolioMutation = {
  __typename?: "Mutation";
  updatePortfolio: {
    __typename?: "ResponsePortfolio";
    status: string;
    msg?: string | null;
    node: {
      __typename?: "Portfolio";
      id: string;
      title: string;
      description: string;
      img: string;
      portfolioURL: string;
      skills: Array<string>;
      userId: string;
      specSheetId: string;
    };
  };
};

export type RemovePortfolioMutationVariables = Exact<{
  portfolioId: Scalars["String"];
}>;

export type RemovePortfolioMutation = {
  __typename?: "Mutation";
  removePortfolio: {
    __typename?: "Res";
    status?: string | null;
    msg?: string | null;
  };
};

export type GetUserUrlByIdQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetUserUrlByIdQuery = {
  __typename?: "Query";
  urls: {
    __typename?: "ResponseUser";
    node: {
      __typename?: "User";
      userUrls: {
        __typename?: "UserUrls";
        id: string;
        user_urls: Array<{
          __typename?: "URL";
          urlName: string;
          url: string;
          id: string;
        } | null>;
      };
    };
  };
};

export type AddUserUrlsMutationVariables = Exact<{
  urlData: UserUrlsAddInput;
}>;

export type AddUserUrlsMutation = {
  __typename?: "Mutation";
  addUserUrls: { __typename?: "ResponseUserUrls"; status: string; msg: string };
};

export type RemoveUserUrlsMutationVariables = Exact<{
  urlData: UserUrlsRemoveInput;
}>;

export type RemoveUserUrlsMutation = {
  __typename?: "Mutation";
  removeUserUrls: {
    __typename?: "ResponseUserUrls";
    status: string;
    msg: string;
  };
};

export type UserLoginMutationVariables = Exact<{
  user: UserLoginInput;
}>;

export type UserLoginMutation = {
  __typename?: "Mutation";
  userLogin: {
    __typename?: "ResponseUser";
    status: string;
    node: {
      __typename?: "User";
      id: string;
      name: string;
      jobType: string;
      email: string;
      password: string;
      githubURL: string;
    };
  };
};

export type GetAllTechAreaQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllTechAreaQuery = {
  __typename?: "Query";
  getAllTechArea: Array<{ __typename?: "TechArea"; id: string; name: string }>;
};

export type GetUserLeafsByIdQueryVariables = Exact<{
  userId: Scalars["String"];
}>;

export type GetUserLeafsByIdQuery = {
  __typename?: "Query";
  getUserLeafsById: {
    __typename?: "ResponseUserTechLeaf";
    status: string;
    node: {
      __typename?: "UserLeafs";
      id: string;
      myForest: Array<{
        __typename?: "treeInfo";
        id: string;
        treeId: string;
        areaId: string;
        treeName: string;
        achievementRate: number;
        color: string;
        branches: Array<{
          __typename?: "branchInfo";
          id: string;
          name: string;
          leafs: Array<{
            __typename?: "leafInfo";
            id: string;
            name: string;
            techBranch_id: string;
            techTree_id: string;
            isStatus: boolean;
          }>;
        }>;
      }>;
    };
  };
};

export type ChangeLeafStatusMutationVariables = Exact<{
  techLeafInfo: UserTechLeafUpdateInput;
}>;

export type ChangeLeafStatusMutation = {
  __typename?: "Mutation";
  changeLeafStatus: {
    __typename?: "ResponseUserTechLeaf";
    status: string;
    msg: string;
  };
};

export type GetAllUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUserQuery = {
  __typename?: "Query";
  getAllUser: Array<{
    __typename?: "User";
    name: string;
    jobType: string;
    email: string;
    password: string;
    githubURL: string;
  }>;
};

export type GetAllStudyStackQueryVariables = Exact<{
  userId: Scalars["String"];
}>;

export type GetAllStudyStackQuery = {
  __typename?: "Query";
  getAllStudyStack: {
    __typename?: "ResponseStudyStackArr";
    status: string;
    msg: string;
    node: Array<{
      __typename?: "StudyStack";
      id: string;
      content: string;
      timeStack: number;
      createdAt: any;
      skillTagId: string;
      userId: string;
    }>;
  };
};

export type GetStudyStackByIdQueryVariables = Exact<{
  studyStackId: Scalars["String"];
}>;

export type GetStudyStackByIdQuery = {
  __typename?: "Query";
  getStudyStackById: {
    __typename?: "ResponseStudyStack";
    status: string;
    node: {
      __typename?: "StudyStack";
      id: string;
      content: string;
      timeStack: number;
      createdAt: any;
      skillTagId: string;
      userId: string;
    };
  };
};

export type AddStudyStackMutationVariables = Exact<{
  stack: StudyStackAddInput;
}>;

export type AddStudyStackMutation = {
  __typename?: "Mutation";
  addStudyStack: {
    __typename?: "ResponseStudyStack";
    status: string;
    node: {
      __typename?: "StudyStack";
      id: string;
      content: string;
      timeStack: number;
      createdAt: any;
      skillTagId: string;
      userId: string;
    };
  };
};

export type UpdateStudyStackMutationVariables = Exact<{
  stack: StudyStackUpdateInput;
}>;

export type UpdateStudyStackMutation = {
  __typename?: "Mutation";
  updateStudyStack: {
    __typename?: "ResponseStudyStack";
    status: string;
    node: {
      __typename?: "StudyStack";
      id: string;
      content: string;
      timeStack: number;
      createdAt: any;
      skillTagId: string;
      userId: string;
    };
  };
};

export type RemoveStudyStackMutationVariables = Exact<{
  studyStackId: Scalars["String"];
}>;

export type RemoveStudyStackMutation = {
  __typename?: "Mutation";
  removeStudyStack: { __typename?: "ResponseStudyStack"; status: string };
};

export type GetAllTodoByUserQueryVariables = Exact<{
  userId: Scalars["String"];
}>;

export type GetAllTodoByUserQuery = {
  __typename?: "Query";
  todos: {
    __typename?: "ResponseTodoArr";
    node: Array<{
      __typename?: "Todo";
      id: string;
      title: string;
      description?: string | null;
      startedAt: any;
      finishedAt?: any | null;
      isStatus: boolean;
    }>;
  };
};

export type GetTodoByIdQueryVariables = Exact<{
  todoId: Scalars["String"];
}>;

export type GetTodoByIdQuery = {
  __typename?: "Query";
  todo: {
    __typename?: "ResponseTodo";
    node: {
      __typename?: "Todo";
      id: string;
      title: string;
      description?: string | null;
      startedAt: any;
      finishedAt?: any | null;
      isStatus: boolean;
    };
  };
};

export type UpdateTodoMutationVariables = Exact<{
  todo: TodoUpdateInput;
}>;

export type UpdateTodoMutation = {
  __typename?: "Mutation";
  updateTodo: {
    __typename?: "ResponseTodo";
    status: string;
    node: {
      __typename?: "Todo";
      id: string;
      title: string;
      description?: string | null;
      startedAt: any;
      finishedAt?: any | null;
      isStatus: boolean;
      userId: string;
    };
  };
};

export type ChangeTodoStatusMutationVariables = Exact<{
  todoId: Scalars["String"];
}>;

export type ChangeTodoStatusMutation = {
  __typename?: "Mutation";
  changeTodoStatus: {
    __typename?: "ResponseTodo";
    status: string;
    node: { __typename?: "Todo"; isStatus: boolean; title: string };
  };
};

export type AddTodoMutationVariables = Exact<{
  todo: TodoAddInput;
}>;

export type AddTodoMutation = {
  __typename?: "Mutation";
  addTodo: {
    __typename?: "ResponseTodo";
    status: string;
    node: {
      __typename?: "Todo";
      id: string;
      title: string;
      description?: string | null;
      startedAt: any;
      finishedAt?: any | null;
      isStatus: boolean;
    };
  };
};

export type RemoveTodoMutationVariables = Exact<{
  todoId: Scalars["String"];
}>;

export type RemoveTodoMutation = {
  __typename?: "Mutation";
  removeTodo: { __typename?: "ResponseTodo"; status: string };
};

export const GetUserByIdDocument = gql`
  query GetUserById($id: String!) {
    user: getUserById(_id: $id) {
      status
      msg
      node {
        name
        jobType
        spreadSheetID
        githubURL
      }
    }
  }
`;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options,
  );
}
export function useGetUserByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options,
  );
}
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<
  typeof useGetUserByIdLazyQuery
>;
export type GetUserByIdQueryResult = Apollo.QueryResult<
  GetUserByIdQuery,
  GetUserByIdQueryVariables
>;
export const GetUserPortfolioByIdDocument = gql`
  query GetUserPortfolioById($id: String!) {
    portfolios: getUserById(_id: $id) {
      status
      msg
      node {
        portfolio {
          id
          title
          description
          img
          portfolioURL
          skills
          specSheetId
        }
      }
    }
  }
`;

/**
 * __useGetUserPortfolioByIdQuery__
 *
 * To run a query within a React component, call `useGetUserPortfolioByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPortfolioByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPortfolioByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserPortfolioByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserPortfolioByIdQuery,
    GetUserPortfolioByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetUserPortfolioByIdQuery,
    GetUserPortfolioByIdQueryVariables
  >(GetUserPortfolioByIdDocument, options);
}
export function useGetUserPortfolioByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserPortfolioByIdQuery,
    GetUserPortfolioByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserPortfolioByIdQuery,
    GetUserPortfolioByIdQueryVariables
  >(GetUserPortfolioByIdDocument, options);
}
export type GetUserPortfolioByIdQueryHookResult = ReturnType<
  typeof useGetUserPortfolioByIdQuery
>;
export type GetUserPortfolioByIdLazyQueryHookResult = ReturnType<
  typeof useGetUserPortfolioByIdLazyQuery
>;
export type GetUserPortfolioByIdQueryResult = Apollo.QueryResult<
  GetUserPortfolioByIdQuery,
  GetUserPortfolioByIdQueryVariables
>;
export const GetUrlByIdDocument = gql`
  query GetUrlById($id: String!) {
    urls: getUserById(_id: $id) {
      status
      msg
      node {
        userUrls {
          user_urls {
            urlName
            url
          }
        }
      }
    }
  }
`;

/**
 * __useGetUrlByIdQuery__
 *
 * To run a query within a React component, call `useGetUrlByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUrlByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUrlByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUrlByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUrlByIdQuery,
    GetUrlByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUrlByIdQuery, GetUrlByIdQueryVariables>(
    GetUrlByIdDocument,
    options,
  );
}
export function useGetUrlByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUrlByIdQuery,
    GetUrlByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUrlByIdQuery, GetUrlByIdQueryVariables>(
    GetUrlByIdDocument,
    options,
  );
}
export type GetUrlByIdQueryHookResult = ReturnType<typeof useGetUrlByIdQuery>;
export type GetUrlByIdLazyQueryHookResult = ReturnType<
  typeof useGetUrlByIdLazyQuery
>;
export type GetUrlByIdQueryResult = Apollo.QueryResult<
  GetUrlByIdQuery,
  GetUrlByIdQueryVariables
>;
export const GetSheetByUserIdDocument = gql`
  query GetSheetByUserId($userId: String!) {
    user: getSheetByUserId(userId: $userId) {
      status
      msg
      node {
        userInfo {
          stuffID
          age
          gender
          nearestStation
          startWorkDate
          seExpAmount
          pgExpAmount
          itExpAmount
          specSheetId
        }
      }
    }
  }
`;

/**
 * __useGetSheetByUserIdQuery__
 *
 * To run a query within a React component, call `useGetSheetByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSheetByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSheetByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetSheetByUserIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSheetByUserIdQuery,
    GetSheetByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSheetByUserIdQuery, GetSheetByUserIdQueryVariables>(
    GetSheetByUserIdDocument,
    options,
  );
}
export function useGetSheetByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSheetByUserIdQuery,
    GetSheetByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSheetByUserIdQuery,
    GetSheetByUserIdQueryVariables
  >(GetSheetByUserIdDocument, options);
}
export type GetSheetByUserIdQueryHookResult = ReturnType<
  typeof useGetSheetByUserIdQuery
>;
export type GetSheetByUserIdLazyQueryHookResult = ReturnType<
  typeof useGetSheetByUserIdLazyQuery
>;
export type GetSheetByUserIdQueryResult = Apollo.QueryResult<
  GetSheetByUserIdQuery,
  GetSheetByUserIdQueryVariables
>;
export const GetSheetPrByUserIdDocument = gql`
  query GetSheetPrByUserId($userId: String!) {
    pr: getSheetByUserId(userId: $userId) {
      status
      msg
      node {
        id
        selfIntro
      }
    }
  }
`;

/**
 * __useGetSheetPrByUserIdQuery__
 *
 * To run a query within a React component, call `useGetSheetPrByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSheetPrByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSheetPrByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetSheetPrByUserIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSheetPrByUserIdQuery,
    GetSheetPrByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetSheetPrByUserIdQuery,
    GetSheetPrByUserIdQueryVariables
  >(GetSheetPrByUserIdDocument, options);
}
export function useGetSheetPrByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSheetPrByUserIdQuery,
    GetSheetPrByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSheetPrByUserIdQuery,
    GetSheetPrByUserIdQueryVariables
  >(GetSheetPrByUserIdDocument, options);
}
export type GetSheetPrByUserIdQueryHookResult = ReturnType<
  typeof useGetSheetPrByUserIdQuery
>;
export type GetSheetPrByUserIdLazyQueryHookResult = ReturnType<
  typeof useGetSheetPrByUserIdLazyQuery
>;
export type GetSheetPrByUserIdQueryResult = Apollo.QueryResult<
  GetSheetPrByUserIdQuery,
  GetSheetPrByUserIdQueryVariables
>;
export const GetSheetSkillByUserIdDocument = gql`
  query GetSheetSkillByUserId($userId: String!) {
    skills: getSheetByUserId(userId: $userId) {
      status
      msg
      node {
        techInfo {
          operationEnvs
          languages
          frameworks
          libraries
          otherTools
          devRoles
          specSheetId
        }
      }
    }
  }
`;

/**
 * __useGetSheetSkillByUserIdQuery__
 *
 * To run a query within a React component, call `useGetSheetSkillByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSheetSkillByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSheetSkillByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetSheetSkillByUserIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSheetSkillByUserIdQuery,
    GetSheetSkillByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetSheetSkillByUserIdQuery,
    GetSheetSkillByUserIdQueryVariables
  >(GetSheetSkillByUserIdDocument, options);
}
export function useGetSheetSkillByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSheetSkillByUserIdQuery,
    GetSheetSkillByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSheetSkillByUserIdQuery,
    GetSheetSkillByUserIdQueryVariables
  >(GetSheetSkillByUserIdDocument, options);
}
export type GetSheetSkillByUserIdQueryHookResult = ReturnType<
  typeof useGetSheetSkillByUserIdQuery
>;
export type GetSheetSkillByUserIdLazyQueryHookResult = ReturnType<
  typeof useGetSheetSkillByUserIdLazyQuery
>;
export type GetSheetSkillByUserIdQueryResult = Apollo.QueryResult<
  GetSheetSkillByUserIdQuery,
  GetSheetSkillByUserIdQueryVariables
>;
export const GetSheetOtherByUserIdDocument = gql`
  query GetSheetOtherByUserId($userId: String!) {
    other: getSheetByUserId(userId: $userId) {
      status
      msg
      node {
        id
        studyOnOwnTime
        certification
        prevJobs {
          content
        }
      }
    }
  }
`;

/**
 * __useGetSheetOtherByUserIdQuery__
 *
 * To run a query within a React component, call `useGetSheetOtherByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSheetOtherByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSheetOtherByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetSheetOtherByUserIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSheetOtherByUserIdQuery,
    GetSheetOtherByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetSheetOtherByUserIdQuery,
    GetSheetOtherByUserIdQueryVariables
  >(GetSheetOtherByUserIdDocument, options);
}
export function useGetSheetOtherByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSheetOtherByUserIdQuery,
    GetSheetOtherByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSheetOtherByUserIdQuery,
    GetSheetOtherByUserIdQueryVariables
  >(GetSheetOtherByUserIdDocument, options);
}
export type GetSheetOtherByUserIdQueryHookResult = ReturnType<
  typeof useGetSheetOtherByUserIdQuery
>;
export type GetSheetOtherByUserIdLazyQueryHookResult = ReturnType<
  typeof useGetSheetOtherByUserIdLazyQuery
>;
export type GetSheetOtherByUserIdQueryResult = Apollo.QueryResult<
  GetSheetOtherByUserIdQuery,
  GetSheetOtherByUserIdQueryVariables
>;
export const GetSheetProjectByUserIdDocument = gql`
  query GetSheetProjectByUserId($userId: String!) {
    projects: getSheetByUserId(userId: $userId) {
      status
      msg
      node {
        project {
          id
          name
          startedAt
          finishedAt
          roleSharing
          memberCount
          content
          operationEnvs
          languages
          frameworks
          libraries
          otherTools
          devRoles
          specSheetId
        }
      }
    }
  }
`;

/**
 * __useGetSheetProjectByUserIdQuery__
 *
 * To run a query within a React component, call `useGetSheetProjectByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSheetProjectByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSheetProjectByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetSheetProjectByUserIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSheetProjectByUserIdQuery,
    GetSheetProjectByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetSheetProjectByUserIdQuery,
    GetSheetProjectByUserIdQueryVariables
  >(GetSheetProjectByUserIdDocument, options);
}
export function useGetSheetProjectByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSheetProjectByUserIdQuery,
    GetSheetProjectByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSheetProjectByUserIdQuery,
    GetSheetProjectByUserIdQueryVariables
  >(GetSheetProjectByUserIdDocument, options);
}
export type GetSheetProjectByUserIdQueryHookResult = ReturnType<
  typeof useGetSheetProjectByUserIdQuery
>;
export type GetSheetProjectByUserIdLazyQueryHookResult = ReturnType<
  typeof useGetSheetProjectByUserIdLazyQuery
>;
export type GetSheetProjectByUserIdQueryResult = Apollo.QueryResult<
  GetSheetProjectByUserIdQuery,
  GetSheetProjectByUserIdQueryVariables
>;
export const GetSpreadSheetIdDocument = gql`
  query GetSpreadSheetID($id: String!) {
    getUserById(_id: $id) {
      status
      msg
      node {
        spreadSheetID
      }
    }
  }
`;

/**
 * __useGetSpreadSheetIdQuery__
 *
 * To run a query within a React component, call `useGetSpreadSheetIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpreadSheetIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpreadSheetIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSpreadSheetIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSpreadSheetIdQuery,
    GetSpreadSheetIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSpreadSheetIdQuery, GetSpreadSheetIdQueryVariables>(
    GetSpreadSheetIdDocument,
    options,
  );
}
export function useGetSpreadSheetIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSpreadSheetIdQuery,
    GetSpreadSheetIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSpreadSheetIdQuery,
    GetSpreadSheetIdQueryVariables
  >(GetSpreadSheetIdDocument, options);
}
export type GetSpreadSheetIdQueryHookResult = ReturnType<
  typeof useGetSpreadSheetIdQuery
>;
export type GetSpreadSheetIdLazyQueryHookResult = ReturnType<
  typeof useGetSpreadSheetIdLazyQuery
>;
export type GetSpreadSheetIdQueryResult = Apollo.QueryResult<
  GetSpreadSheetIdQuery,
  GetSpreadSheetIdQueryVariables
>;
export const GetPrAndSheetByUserIdDocument = gql`
  query GetPrAndSheetByUserId($userId: String!) {
    pr: getSheetByUserId(userId: $userId) {
      status
      msg
      node {
        id
        selfIntro
      }
    }
    other: getSheetByUserId(userId: $userId) {
      status
      msg
      node {
        id
        studyOnOwnTime
        certification
        prevJobs {
          content
        }
      }
    }
  }
`;

/**
 * __useGetPrAndSheetByUserIdQuery__
 *
 * To run a query within a React component, call `useGetPrAndSheetByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrAndSheetByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrAndSheetByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetPrAndSheetByUserIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPrAndSheetByUserIdQuery,
    GetPrAndSheetByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPrAndSheetByUserIdQuery,
    GetPrAndSheetByUserIdQueryVariables
  >(GetPrAndSheetByUserIdDocument, options);
}
export function useGetPrAndSheetByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPrAndSheetByUserIdQuery,
    GetPrAndSheetByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPrAndSheetByUserIdQuery,
    GetPrAndSheetByUserIdQueryVariables
  >(GetPrAndSheetByUserIdDocument, options);
}
export type GetPrAndSheetByUserIdQueryHookResult = ReturnType<
  typeof useGetPrAndSheetByUserIdQuery
>;
export type GetPrAndSheetByUserIdLazyQueryHookResult = ReturnType<
  typeof useGetPrAndSheetByUserIdLazyQuery
>;
export type GetPrAndSheetByUserIdQueryResult = Apollo.QueryResult<
  GetPrAndSheetByUserIdQuery,
  GetPrAndSheetByUserIdQueryVariables
>;
export const UpdateUserDocument = gql`
  mutation UpdateUser($user: UserUpdateInput!) {
    updateUser(user: $user) {
      status
      msg
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options,
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const CreatePortfolioDocument = gql`
  mutation CreatePortfolio($portfolio: PortfolioCreateInput!) {
    createPortfolio(portfolio: $portfolio) {
      status
      msg
    }
  }
`;
export type CreatePortfolioMutationFn = Apollo.MutationFunction<
  CreatePortfolioMutation,
  CreatePortfolioMutationVariables
>;

/**
 * __useCreatePortfolioMutation__
 *
 * To run a mutation, you first call `useCreatePortfolioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePortfolioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPortfolioMutation, { data, loading, error }] = useCreatePortfolioMutation({
 *   variables: {
 *      portfolio: // value for 'portfolio'
 *   },
 * });
 */
export function useCreatePortfolioMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePortfolioMutation,
    CreatePortfolioMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreatePortfolioMutation,
    CreatePortfolioMutationVariables
  >(CreatePortfolioDocument, options);
}
export type CreatePortfolioMutationHookResult = ReturnType<
  typeof useCreatePortfolioMutation
>;
export type CreatePortfolioMutationResult =
  Apollo.MutationResult<CreatePortfolioMutation>;
export type CreatePortfolioMutationOptions = Apollo.BaseMutationOptions<
  CreatePortfolioMutation,
  CreatePortfolioMutationVariables
>;
export const UpdatePortfolioDocument = gql`
  mutation UpdatePortfolio($portfolio: PortfolioUpdateInput!) {
    updatePortfolio(portfolio: $portfolio) {
      status
      msg
      node {
        id
        title
        description
        img
        portfolioURL
        skills
        userId
        specSheetId
      }
    }
  }
`;
export type UpdatePortfolioMutationFn = Apollo.MutationFunction<
  UpdatePortfolioMutation,
  UpdatePortfolioMutationVariables
>;

/**
 * __useUpdatePortfolioMutation__
 *
 * To run a mutation, you first call `useUpdatePortfolioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePortfolioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePortfolioMutation, { data, loading, error }] = useUpdatePortfolioMutation({
 *   variables: {
 *      portfolio: // value for 'portfolio'
 *   },
 * });
 */
export function useUpdatePortfolioMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePortfolioMutation,
    UpdatePortfolioMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdatePortfolioMutation,
    UpdatePortfolioMutationVariables
  >(UpdatePortfolioDocument, options);
}
export type UpdatePortfolioMutationHookResult = ReturnType<
  typeof useUpdatePortfolioMutation
>;
export type UpdatePortfolioMutationResult =
  Apollo.MutationResult<UpdatePortfolioMutation>;
export type UpdatePortfolioMutationOptions = Apollo.BaseMutationOptions<
  UpdatePortfolioMutation,
  UpdatePortfolioMutationVariables
>;
export const RemovePortfolioDocument = gql`
  mutation RemovePortfolio($portfolioId: String!) {
    removePortfolio(portfolioId: $portfolioId) {
      status
      msg
    }
  }
`;
export type RemovePortfolioMutationFn = Apollo.MutationFunction<
  RemovePortfolioMutation,
  RemovePortfolioMutationVariables
>;

/**
 * __useRemovePortfolioMutation__
 *
 * To run a mutation, you first call `useRemovePortfolioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePortfolioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePortfolioMutation, { data, loading, error }] = useRemovePortfolioMutation({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useRemovePortfolioMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemovePortfolioMutation,
    RemovePortfolioMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemovePortfolioMutation,
    RemovePortfolioMutationVariables
  >(RemovePortfolioDocument, options);
}
export type RemovePortfolioMutationHookResult = ReturnType<
  typeof useRemovePortfolioMutation
>;
export type RemovePortfolioMutationResult =
  Apollo.MutationResult<RemovePortfolioMutation>;
export type RemovePortfolioMutationOptions = Apollo.BaseMutationOptions<
  RemovePortfolioMutation,
  RemovePortfolioMutationVariables
>;
export const GetUserUrlByIdDocument = gql`
  query GetUserUrlById($id: String!) {
    urls: getUserById(_id: $id) {
      node {
        userUrls {
          user_urls {
            urlName
            url
            id
          }
          id
        }
      }
    }
  }
`;

/**
 * __useGetUserUrlByIdQuery__
 *
 * To run a query within a React component, call `useGetUserUrlByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserUrlByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserUrlByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserUrlByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserUrlByIdQuery,
    GetUserUrlByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserUrlByIdQuery, GetUserUrlByIdQueryVariables>(
    GetUserUrlByIdDocument,
    options,
  );
}
export function useGetUserUrlByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserUrlByIdQuery,
    GetUserUrlByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserUrlByIdQuery, GetUserUrlByIdQueryVariables>(
    GetUserUrlByIdDocument,
    options,
  );
}
export type GetUserUrlByIdQueryHookResult = ReturnType<
  typeof useGetUserUrlByIdQuery
>;
export type GetUserUrlByIdLazyQueryHookResult = ReturnType<
  typeof useGetUserUrlByIdLazyQuery
>;
export type GetUserUrlByIdQueryResult = Apollo.QueryResult<
  GetUserUrlByIdQuery,
  GetUserUrlByIdQueryVariables
>;
export const AddUserUrlsDocument = gql`
  mutation AddUserUrls($urlData: UserUrlsAddInput!) {
    addUserUrls(urlData: $urlData) {
      status
      msg
    }
  }
`;
export type AddUserUrlsMutationFn = Apollo.MutationFunction<
  AddUserUrlsMutation,
  AddUserUrlsMutationVariables
>;

/**
 * __useAddUserUrlsMutation__
 *
 * To run a mutation, you first call `useAddUserUrlsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserUrlsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserUrlsMutation, { data, loading, error }] = useAddUserUrlsMutation({
 *   variables: {
 *      urlData: // value for 'urlData'
 *   },
 * });
 */
export function useAddUserUrlsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddUserUrlsMutation,
    AddUserUrlsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddUserUrlsMutation, AddUserUrlsMutationVariables>(
    AddUserUrlsDocument,
    options,
  );
}
export type AddUserUrlsMutationHookResult = ReturnType<
  typeof useAddUserUrlsMutation
>;
export type AddUserUrlsMutationResult =
  Apollo.MutationResult<AddUserUrlsMutation>;
export type AddUserUrlsMutationOptions = Apollo.BaseMutationOptions<
  AddUserUrlsMutation,
  AddUserUrlsMutationVariables
>;
export const RemoveUserUrlsDocument = gql`
  mutation RemoveUserUrls($urlData: UserUrlsRemoveInput!) {
    removeUserUrls(urlData: $urlData) {
      status
      msg
    }
  }
`;
export type RemoveUserUrlsMutationFn = Apollo.MutationFunction<
  RemoveUserUrlsMutation,
  RemoveUserUrlsMutationVariables
>;

/**
 * __useRemoveUserUrlsMutation__
 *
 * To run a mutation, you first call `useRemoveUserUrlsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserUrlsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserUrlsMutation, { data, loading, error }] = useRemoveUserUrlsMutation({
 *   variables: {
 *      urlData: // value for 'urlData'
 *   },
 * });
 */
export function useRemoveUserUrlsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveUserUrlsMutation,
    RemoveUserUrlsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveUserUrlsMutation,
    RemoveUserUrlsMutationVariables
  >(RemoveUserUrlsDocument, options);
}
export type RemoveUserUrlsMutationHookResult = ReturnType<
  typeof useRemoveUserUrlsMutation
>;
export type RemoveUserUrlsMutationResult =
  Apollo.MutationResult<RemoveUserUrlsMutation>;
export type RemoveUserUrlsMutationOptions = Apollo.BaseMutationOptions<
  RemoveUserUrlsMutation,
  RemoveUserUrlsMutationVariables
>;
export const UserLoginDocument = gql`
  mutation UserLogin($user: UserLoginInput!) {
    userLogin(user: $user) {
      status
      node {
        id
        name
        jobType
        email
        password
        githubURL
      }
    }
  }
`;
export type UserLoginMutationFn = Apollo.MutationFunction<
  UserLoginMutation,
  UserLoginMutationVariables
>;

/**
 * __useUserLoginMutation__
 *
 * To run a mutation, you first call `useUserLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLoginMutation, { data, loading, error }] = useUserLoginMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUserLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserLoginMutation,
    UserLoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UserLoginMutation, UserLoginMutationVariables>(
    UserLoginDocument,
    options,
  );
}
export type UserLoginMutationHookResult = ReturnType<
  typeof useUserLoginMutation
>;
export type UserLoginMutationResult = Apollo.MutationResult<UserLoginMutation>;
export type UserLoginMutationOptions = Apollo.BaseMutationOptions<
  UserLoginMutation,
  UserLoginMutationVariables
>;
export const GetAllTechAreaDocument = gql`
  query GetAllTechArea {
    getAllTechArea {
      id
      name
    }
  }
`;

/**
 * __useGetAllTechAreaQuery__
 *
 * To run a query within a React component, call `useGetAllTechAreaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTechAreaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTechAreaQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTechAreaQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllTechAreaQuery,
    GetAllTechAreaQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllTechAreaQuery, GetAllTechAreaQueryVariables>(
    GetAllTechAreaDocument,
    options,
  );
}
export function useGetAllTechAreaLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllTechAreaQuery,
    GetAllTechAreaQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllTechAreaQuery, GetAllTechAreaQueryVariables>(
    GetAllTechAreaDocument,
    options,
  );
}
export type GetAllTechAreaQueryHookResult = ReturnType<
  typeof useGetAllTechAreaQuery
>;
export type GetAllTechAreaLazyQueryHookResult = ReturnType<
  typeof useGetAllTechAreaLazyQuery
>;
export type GetAllTechAreaQueryResult = Apollo.QueryResult<
  GetAllTechAreaQuery,
  GetAllTechAreaQueryVariables
>;
export const GetUserLeafsByIdDocument = gql`
  query GetUserLeafsById($userId: String!) {
    getUserLeafsById(userId: $userId) {
      status
      node {
        id
        myForest {
          id
          treeId
          areaId
          treeName
          achievementRate
          color
          branches {
            id
            name
            leafs {
              id
              name
              techBranch_id
              techTree_id
              isStatus
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetUserLeafsByIdQuery__
 *
 * To run a query within a React component, call `useGetUserLeafsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserLeafsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserLeafsByIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserLeafsByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserLeafsByIdQuery,
    GetUserLeafsByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserLeafsByIdQuery, GetUserLeafsByIdQueryVariables>(
    GetUserLeafsByIdDocument,
    options,
  );
}
export function useGetUserLeafsByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserLeafsByIdQuery,
    GetUserLeafsByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserLeafsByIdQuery,
    GetUserLeafsByIdQueryVariables
  >(GetUserLeafsByIdDocument, options);
}
export type GetUserLeafsByIdQueryHookResult = ReturnType<
  typeof useGetUserLeafsByIdQuery
>;
export type GetUserLeafsByIdLazyQueryHookResult = ReturnType<
  typeof useGetUserLeafsByIdLazyQuery
>;
export type GetUserLeafsByIdQueryResult = Apollo.QueryResult<
  GetUserLeafsByIdQuery,
  GetUserLeafsByIdQueryVariables
>;
export const ChangeLeafStatusDocument = gql`
  mutation ChangeLeafStatus($techLeafInfo: UserTechLeafUpdateInput!) {
    changeLeafStatus(techLeafInfo: $techLeafInfo) {
      status
      msg
    }
  }
`;
export type ChangeLeafStatusMutationFn = Apollo.MutationFunction<
  ChangeLeafStatusMutation,
  ChangeLeafStatusMutationVariables
>;

/**
 * __useChangeLeafStatusMutation__
 *
 * To run a mutation, you first call `useChangeLeafStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeLeafStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeLeafStatusMutation, { data, loading, error }] = useChangeLeafStatusMutation({
 *   variables: {
 *      techLeafInfo: // value for 'techLeafInfo'
 *   },
 * });
 */
export function useChangeLeafStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ChangeLeafStatusMutation,
    ChangeLeafStatusMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ChangeLeafStatusMutation,
    ChangeLeafStatusMutationVariables
  >(ChangeLeafStatusDocument, options);
}
export type ChangeLeafStatusMutationHookResult = ReturnType<
  typeof useChangeLeafStatusMutation
>;
export type ChangeLeafStatusMutationResult =
  Apollo.MutationResult<ChangeLeafStatusMutation>;
export type ChangeLeafStatusMutationOptions = Apollo.BaseMutationOptions<
  ChangeLeafStatusMutation,
  ChangeLeafStatusMutationVariables
>;
export const GetAllUserDocument = gql`
  query GetAllUser {
    getAllUser {
      name
      jobType
      email
      password
      githubURL
    }
  }
`;

/**
 * __useGetAllUserQuery__
 *
 * To run a query within a React component, call `useGetAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllUserQuery,
    GetAllUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllUserQuery, GetAllUserQueryVariables>(
    GetAllUserDocument,
    options,
  );
}
export function useGetAllUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllUserQuery,
    GetAllUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllUserQuery, GetAllUserQueryVariables>(
    GetAllUserDocument,
    options,
  );
}
export type GetAllUserQueryHookResult = ReturnType<typeof useGetAllUserQuery>;
export type GetAllUserLazyQueryHookResult = ReturnType<
  typeof useGetAllUserLazyQuery
>;
export type GetAllUserQueryResult = Apollo.QueryResult<
  GetAllUserQuery,
  GetAllUserQueryVariables
>;
export const GetAllStudyStackDocument = gql`
  query GetAllStudyStack($userId: String!) {
    getAllStudyStack(userId: $userId) {
      status
      node {
        id
        content
        timeStack
        createdAt
        skillTagId
        userId
      }
      msg
    }
  }
`;

/**
 * __useGetAllStudyStackQuery__
 *
 * To run a query within a React component, call `useGetAllStudyStackQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllStudyStackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllStudyStackQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetAllStudyStackQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAllStudyStackQuery,
    GetAllStudyStackQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllStudyStackQuery, GetAllStudyStackQueryVariables>(
    GetAllStudyStackDocument,
    options,
  );
}
export function useGetAllStudyStackLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllStudyStackQuery,
    GetAllStudyStackQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAllStudyStackQuery,
    GetAllStudyStackQueryVariables
  >(GetAllStudyStackDocument, options);
}
export type GetAllStudyStackQueryHookResult = ReturnType<
  typeof useGetAllStudyStackQuery
>;
export type GetAllStudyStackLazyQueryHookResult = ReturnType<
  typeof useGetAllStudyStackLazyQuery
>;
export type GetAllStudyStackQueryResult = Apollo.QueryResult<
  GetAllStudyStackQuery,
  GetAllStudyStackQueryVariables
>;
export const GetStudyStackByIdDocument = gql`
  query GetStudyStackById($studyStackId: String!) {
    getStudyStackById(studyStackId: $studyStackId) {
      status
      node {
        id
        content
        timeStack
        createdAt
        skillTagId
        userId
      }
    }
  }
`;

/**
 * __useGetStudyStackByIdQuery__
 *
 * To run a query within a React component, call `useGetStudyStackByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudyStackByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudyStackByIdQuery({
 *   variables: {
 *      studyStackId: // value for 'studyStackId'
 *   },
 * });
 */
export function useGetStudyStackByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetStudyStackByIdQuery,
    GetStudyStackByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetStudyStackByIdQuery,
    GetStudyStackByIdQueryVariables
  >(GetStudyStackByIdDocument, options);
}
export function useGetStudyStackByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStudyStackByIdQuery,
    GetStudyStackByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetStudyStackByIdQuery,
    GetStudyStackByIdQueryVariables
  >(GetStudyStackByIdDocument, options);
}
export type GetStudyStackByIdQueryHookResult = ReturnType<
  typeof useGetStudyStackByIdQuery
>;
export type GetStudyStackByIdLazyQueryHookResult = ReturnType<
  typeof useGetStudyStackByIdLazyQuery
>;
export type GetStudyStackByIdQueryResult = Apollo.QueryResult<
  GetStudyStackByIdQuery,
  GetStudyStackByIdQueryVariables
>;
export const AddStudyStackDocument = gql`
  mutation AddStudyStack($stack: StudyStackAddInput!) {
    addStudyStack(stack: $stack) {
      status
      node {
        id
        content
        timeStack
        createdAt
        skillTagId
        userId
      }
    }
  }
`;
export type AddStudyStackMutationFn = Apollo.MutationFunction<
  AddStudyStackMutation,
  AddStudyStackMutationVariables
>;

/**
 * __useAddStudyStackMutation__
 *
 * To run a mutation, you first call `useAddStudyStackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddStudyStackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addStudyStackMutation, { data, loading, error }] = useAddStudyStackMutation({
 *   variables: {
 *      stack: // value for 'stack'
 *   },
 * });
 */
export function useAddStudyStackMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddStudyStackMutation,
    AddStudyStackMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddStudyStackMutation,
    AddStudyStackMutationVariables
  >(AddStudyStackDocument, options);
}
export type AddStudyStackMutationHookResult = ReturnType<
  typeof useAddStudyStackMutation
>;
export type AddStudyStackMutationResult =
  Apollo.MutationResult<AddStudyStackMutation>;
export type AddStudyStackMutationOptions = Apollo.BaseMutationOptions<
  AddStudyStackMutation,
  AddStudyStackMutationVariables
>;
export const UpdateStudyStackDocument = gql`
  mutation UpdateStudyStack($stack: StudyStackUpdateInput!) {
    updateStudyStack(stack: $stack) {
      status
      node {
        id
        content
        timeStack
        createdAt
        skillTagId
        userId
      }
    }
  }
`;
export type UpdateStudyStackMutationFn = Apollo.MutationFunction<
  UpdateStudyStackMutation,
  UpdateStudyStackMutationVariables
>;

/**
 * __useUpdateStudyStackMutation__
 *
 * To run a mutation, you first call `useUpdateStudyStackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudyStackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudyStackMutation, { data, loading, error }] = useUpdateStudyStackMutation({
 *   variables: {
 *      stack: // value for 'stack'
 *   },
 * });
 */
export function useUpdateStudyStackMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateStudyStackMutation,
    UpdateStudyStackMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateStudyStackMutation,
    UpdateStudyStackMutationVariables
  >(UpdateStudyStackDocument, options);
}
export type UpdateStudyStackMutationHookResult = ReturnType<
  typeof useUpdateStudyStackMutation
>;
export type UpdateStudyStackMutationResult =
  Apollo.MutationResult<UpdateStudyStackMutation>;
export type UpdateStudyStackMutationOptions = Apollo.BaseMutationOptions<
  UpdateStudyStackMutation,
  UpdateStudyStackMutationVariables
>;
export const RemoveStudyStackDocument = gql`
  mutation RemoveStudyStack($studyStackId: String!) {
    removeStudyStack(studyStackId: $studyStackId) {
      status
    }
  }
`;
export type RemoveStudyStackMutationFn = Apollo.MutationFunction<
  RemoveStudyStackMutation,
  RemoveStudyStackMutationVariables
>;

/**
 * __useRemoveStudyStackMutation__
 *
 * To run a mutation, you first call `useRemoveStudyStackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveStudyStackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeStudyStackMutation, { data, loading, error }] = useRemoveStudyStackMutation({
 *   variables: {
 *      studyStackId: // value for 'studyStackId'
 *   },
 * });
 */
export function useRemoveStudyStackMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveStudyStackMutation,
    RemoveStudyStackMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveStudyStackMutation,
    RemoveStudyStackMutationVariables
  >(RemoveStudyStackDocument, options);
}
export type RemoveStudyStackMutationHookResult = ReturnType<
  typeof useRemoveStudyStackMutation
>;
export type RemoveStudyStackMutationResult =
  Apollo.MutationResult<RemoveStudyStackMutation>;
export type RemoveStudyStackMutationOptions = Apollo.BaseMutationOptions<
  RemoveStudyStackMutation,
  RemoveStudyStackMutationVariables
>;
export const GetAllTodoByUserDocument = gql`
  query GetAllTodoByUser($userId: String!) {
    todos: getAllTodoByUser(userId: $userId) {
      node {
        id
        title
        description
        startedAt
        finishedAt
        isStatus
      }
    }
  }
`;

/**
 * __useGetAllTodoByUserQuery__
 *
 * To run a query within a React component, call `useGetAllTodoByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTodoByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTodoByUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetAllTodoByUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAllTodoByUserQuery,
    GetAllTodoByUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllTodoByUserQuery, GetAllTodoByUserQueryVariables>(
    GetAllTodoByUserDocument,
    options,
  );
}
export function useGetAllTodoByUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllTodoByUserQuery,
    GetAllTodoByUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAllTodoByUserQuery,
    GetAllTodoByUserQueryVariables
  >(GetAllTodoByUserDocument, options);
}
export type GetAllTodoByUserQueryHookResult = ReturnType<
  typeof useGetAllTodoByUserQuery
>;
export type GetAllTodoByUserLazyQueryHookResult = ReturnType<
  typeof useGetAllTodoByUserLazyQuery
>;
export type GetAllTodoByUserQueryResult = Apollo.QueryResult<
  GetAllTodoByUserQuery,
  GetAllTodoByUserQueryVariables
>;
export const GetTodoByIdDocument = gql`
  query GetTodoById($todoId: String!) {
    todo: getTodoById(todoId: $todoId) {
      node {
        id
        title
        description
        startedAt
        finishedAt
        isStatus
      }
    }
  }
`;

/**
 * __useGetTodoByIdQuery__
 *
 * To run a query within a React component, call `useGetTodoByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoByIdQuery({
 *   variables: {
 *      todoId: // value for 'todoId'
 *   },
 * });
 */
export function useGetTodoByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTodoByIdQuery,
    GetTodoByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTodoByIdQuery, GetTodoByIdQueryVariables>(
    GetTodoByIdDocument,
    options,
  );
}
export function useGetTodoByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTodoByIdQuery,
    GetTodoByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTodoByIdQuery, GetTodoByIdQueryVariables>(
    GetTodoByIdDocument,
    options,
  );
}
export type GetTodoByIdQueryHookResult = ReturnType<typeof useGetTodoByIdQuery>;
export type GetTodoByIdLazyQueryHookResult = ReturnType<
  typeof useGetTodoByIdLazyQuery
>;
export type GetTodoByIdQueryResult = Apollo.QueryResult<
  GetTodoByIdQuery,
  GetTodoByIdQueryVariables
>;
export const UpdateTodoDocument = gql`
  mutation updateTodo($todo: TodoUpdateInput!) {
    updateTodo(todo: $todo) {
      status
      node {
        id
        title
        description
        startedAt
        finishedAt
        isStatus
        userId
      }
    }
  }
`;
export type UpdateTodoMutationFn = Apollo.MutationFunction<
  UpdateTodoMutation,
  UpdateTodoMutationVariables
>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      todo: // value for 'todo'
 *   },
 * });
 */
export function useUpdateTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTodoMutation,
    UpdateTodoMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(
    UpdateTodoDocument,
    options,
  );
}
export type UpdateTodoMutationHookResult = ReturnType<
  typeof useUpdateTodoMutation
>;
export type UpdateTodoMutationResult =
  Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<
  UpdateTodoMutation,
  UpdateTodoMutationVariables
>;
export const ChangeTodoStatusDocument = gql`
  mutation ChangeTodoStatus($todoId: String!) {
    changeTodoStatus(todoId: $todoId) {
      status
      node {
        isStatus
        title
      }
    }
  }
`;
export type ChangeTodoStatusMutationFn = Apollo.MutationFunction<
  ChangeTodoStatusMutation,
  ChangeTodoStatusMutationVariables
>;

/**
 * __useChangeTodoStatusMutation__
 *
 * To run a mutation, you first call `useChangeTodoStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeTodoStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeTodoStatusMutation, { data, loading, error }] = useChangeTodoStatusMutation({
 *   variables: {
 *      todoId: // value for 'todoId'
 *   },
 * });
 */
export function useChangeTodoStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ChangeTodoStatusMutation,
    ChangeTodoStatusMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ChangeTodoStatusMutation,
    ChangeTodoStatusMutationVariables
  >(ChangeTodoStatusDocument, options);
}
export type ChangeTodoStatusMutationHookResult = ReturnType<
  typeof useChangeTodoStatusMutation
>;
export type ChangeTodoStatusMutationResult =
  Apollo.MutationResult<ChangeTodoStatusMutation>;
export type ChangeTodoStatusMutationOptions = Apollo.BaseMutationOptions<
  ChangeTodoStatusMutation,
  ChangeTodoStatusMutationVariables
>;
export const AddTodoDocument = gql`
  mutation AddTodo($todo: TodoAddInput!) {
    addTodo(todo: $todo) {
      status
      node {
        id
        title
        description
        startedAt
        finishedAt
        isStatus
      }
    }
  }
`;
export type AddTodoMutationFn = Apollo.MutationFunction<
  AddTodoMutation,
  AddTodoMutationVariables
>;

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      todo: // value for 'todo'
 *   },
 * });
 */
export function useAddTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddTodoMutation,
    AddTodoMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(
    AddTodoDocument,
    options,
  );
}
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<
  AddTodoMutation,
  AddTodoMutationVariables
>;
export const RemoveTodoDocument = gql`
  mutation RemoveTodo($todoId: String!) {
    removeTodo(todoId: $todoId) {
      status
    }
  }
`;
export type RemoveTodoMutationFn = Apollo.MutationFunction<
  RemoveTodoMutation,
  RemoveTodoMutationVariables
>;

/**
 * __useRemoveTodoMutation__
 *
 * To run a mutation, you first call `useRemoveTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTodoMutation, { data, loading, error }] = useRemoveTodoMutation({
 *   variables: {
 *      todoId: // value for 'todoId'
 *   },
 * });
 */
export function useRemoveTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveTodoMutation,
    RemoveTodoMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveTodoMutation, RemoveTodoMutationVariables>(
    RemoveTodoDocument,
    options,
  );
}
export type RemoveTodoMutationHookResult = ReturnType<
  typeof useRemoveTodoMutation
>;
export type RemoveTodoMutationResult =
  Apollo.MutationResult<RemoveTodoMutation>;
export type RemoveTodoMutationOptions = Apollo.BaseMutationOptions<
  RemoveTodoMutation,
  RemoveTodoMutationVariables
>;
