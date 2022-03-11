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
  /** ユーザーの持つUrlを作成. */
  createUserUrls: ResponseUserUrls;
  /** ポートフォリオを削除. */
  removePortfolio: Res;
  /** ユーザーの学習記録を削除. */
  removeStudyStack: ResponseStudyStack;
  /** Todoを削除. */
  removeTodo: ResponseTodo;
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
export type MutationCreateUserUrlsArgs = {
  urlData: UserUrlsCreateInput;
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
  specSheetId: Scalars["ID"];
  title: Scalars["String"];
  userId: Scalars["ID"];
};

export type PortfolioCreateInput = {
  description: Scalars["String"];
  img?: InputMaybe<Scalars["String"]>;
  portfolioURL?: InputMaybe<Scalars["String"]>;
  specSheetId: Scalars["ID"];
  title: Scalars["String"];
  userId: Scalars["ID"];
};

export type PortfolioUpdateInput = {
  description: Scalars["String"];
  img?: InputMaybe<Scalars["String"]>;
  portfolioId: Scalars["ID"];
  portfolioURL?: InputMaybe<Scalars["String"]>;
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
  node?: Maybe<Portfolio>;
  status: Scalars["String"];
};

export type ResponseSpecProject = {
  __typename?: "ResponseSpecProject";
  msg?: Maybe<Scalars["String"]>;
  node?: Maybe<SpecProjectSheet>;
  status: Scalars["String"];
};

export type ResponseSpecSheet = {
  __typename?: "ResponseSpecSheet";
  msg?: Maybe<Scalars["String"]>;
  node?: Maybe<SpecSheet>;
  status: Scalars["String"];
};

export type ResponseSpecTechInfo = {
  __typename?: "ResponseSpecTechInfo";
  msg?: Maybe<Scalars["String"]>;
  node?: Maybe<SpecTechInfoSheet>;
  status: Scalars["String"];
};

export type ResponseSpecUserInfo = {
  __typename?: "ResponseSpecUserInfo";
  msg?: Maybe<Scalars["String"]>;
  node?: Maybe<SpecUserInfoSheet>;
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
  finishedAt: Scalars["String"];
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
  startedAt: Scalars["String"];
};

export type SpecProjectUpdateInput = {
  content: Scalars["String"];
  devRoles: Array<Scalars["String"]>;
  finishedAt: Scalars["String"];
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
  startedAt: Scalars["String"];
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
  createdAt: Scalars["String"];
  id: Scalars["ID"];
  skillTagId: Scalars["ID"];
  timeStack: Scalars["Int"];
  userId: Scalars["ID"];
};

export type StudyStackAddInput = {
  content: Scalars["String"];
  createdAt: Scalars["String"];
  skillTagId: Scalars["ID"];
  timeStack: Scalars["Int"];
  userId: Scalars["ID"];
};

export type StudyStackUpdateInput = {
  content: Scalars["String"];
  createdAt: Scalars["String"];
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
  id: Scalars["ID"];
  name: Scalars["String"];
  techArea_id: Scalars["ID"];
  techBranches: Array<TechBranch>;
};

export type TechTreeCreateInput = {
  name: Scalars["String"];
  techArea_id: Scalars["ID"];
};

export type Todo = {
  __typename?: "Todo";
  description?: Maybe<Scalars["String"]>;
  finishedAt?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isStatus: Scalars["Boolean"];
  startedAt: Scalars["String"];
  title: Scalars["String"];
  userId: Scalars["ID"];
};

export type TodoAddInput = {
  description: Scalars["String"];
  finishedAt: Scalars["String"];
  isStatus: Scalars["Boolean"];
  startedAt: Scalars["String"];
  title: Scalars["String"];
  userId: Scalars["ID"];
};

export type TodoUpdateInput = {
  description: Scalars["String"];
  finishedAt: Scalars["String"];
  isStatus: Scalars["Boolean"];
  startedAt: Scalars["String"];
  title: Scalars["String"];
  todoId: Scalars["ID"];
  userId: Scalars["ID"];
};

export type Url = {
  __typename?: "URL";
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
  myTech: Array<TreeInfo>;
  userId: Scalars["ID"];
};

export type UserLoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type UserTechLeafUpdateInput = {
  achievementRate: Scalars["Int"];
  currentStatus: Scalars["Boolean"];
  leafId: Scalars["ID"];
  treeId: Scalars["ID"];
  userLeafsId: Scalars["ID"];
};

export type UserUpdateInput = {
  email: Scalars["String"];
  githubURL: Scalars["String"];
  jobType: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  spreadSheetID: Scalars["String"];
  userId: Scalars["String"];
};

export type UserUrls = {
  __typename?: "UserUrls";
  userId: Scalars["ID"];
  user_urls: Array<Url>;
};

export type UserUrlsAddInput = {
  url: Scalars["String"];
  urlId: Scalars["ID"];
  urlName: Scalars["String"];
};

export type UserUrlsCreateInput = {
  url: Scalars["String"];
  urlName: Scalars["String"];
  userId: Scalars["ID"];
};

export type UserUrlsRemoveInput = {
  urlId: Scalars["ID"];
  userUrlsId: Scalars["ID"];
};

export type LeafInfo = {
  __typename?: "leafInfo";
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
  leafs: Array<LeafInfo>;
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
    node: {
      __typename?: "User";
      name: string;
      jobType: string;
      spreadSheetID: string;
      githubURL: string;
      portfolio: Array<{
        __typename?: "Portfolio";
        title: string;
        description: string;
        img: string;
        portfolioURL: string;
      } | null>;
      userUrls: {
        __typename?: "UserUrls";
        user_urls: Array<{ __typename?: "URL"; urlName: string; url: string }>;
      };
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
      createdAt: string;
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
      createdAt: string;
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
      createdAt: string;
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
      createdAt: string;
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
      startedAt: string;
      finishedAt?: string | null;
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
      startedAt: string;
      finishedAt?: string | null;
      isStatus: boolean;
    };
  };
};

export const GetUserByIdDocument = gql`
  query GetUserById($id: String!) {
    user: getUserById(_id: $id) {
      node {
        name
        jobType
        spreadSheetID
        githubURL
        portfolio {
          title
          description
          img
          portfolioURL
        }
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
