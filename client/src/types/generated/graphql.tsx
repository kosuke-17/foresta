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
  node?: Maybe<TechArea>;
  status: Scalars["String"];
};

export type CreatedTechBranch = {
  __typename?: "CreatedTechBranch";
  node?: Maybe<TechBranch>;
  status: Scalars["String"];
};

export type CreatedTechLeaf = {
  __typename?: "CreatedTechLeaf";
  node?: Maybe<TechLeaf>;
  status: Scalars["String"];
};

export type CreatedTechTree = {
  __typename?: "CreatedTechTree";
  node?: Maybe<TechTree>;
  status: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  /** 開発経験情報を追加する */
  addSpecProject: ResponseSpecProject;
  /** ユーザーの学習記録を追加する */
  addStudyStack: ResponseStudyStack;
  /** Todoを追加する：引数(タイトル,説明,開始日,終了日,todo状態,ユーザーID) */
  addTodo: ResponseTodo;
  addUserUrls: ResponseUserUrls;
  /** Todo状態をtrueまたはfalseにする：引数(todoId) */
  changeTodoStatus: ResponseTodo;
  /** ポートフォリオを作成する */
  createPortfolio: ResponsePortfolio;
  createTechArea: CreatedTechArea;
  createTechBranch: CreatedTechBranch;
  /** Techを追加する：引数(Leaf名 or Branch名 or Tree名) */
  createTechLeaf: CreatedTechLeaf;
  createTechTree: CreatedTechTree;
  /** ユーザーを追加する：引数(ユーザー名、エンジニアタイプ、GithubURL?) */
  createUser: ResponseUser;
  /** ユーザーの持つUrlを作成する：引数(ユーザーID, TechLeafID) */
  createUserUrls: ResponseUserUrls;
  /** ポートフォリオを削除する */
  removePortfolio: ResponseRemove;
  /** 開発経験情報を削除する */
  removeSpecProject: ResponseRemove;
  /** ユーザーの学習記録を削除する */
  removeStudyStack: ResponseStudyStack;
  /** Todoを削除する：引数(todoId) */
  removeTodo: ResponseTodo;
  removeUserUrls: ResponseUserUrls;
  /** ポートフォリオを更新する */
  updatePortfolio: ResponsePortfolio;
  /** 開発経験情報を更新する */
  updateSpecProject: ResponseSpecProject;
  /** スペックシート情報を更新する */
  updateSpecSheet: ResponseSpecSheet;
  /** スキル要約情報を更新する */
  updateSpecTechInfo: ResponseSpecTechInfo;
  /** 基本情報を更新する */
  updateSpecUserInfo: ResponseSpecUserInfo;
  /** ユーザーの学習記録を更新する */
  updateStudyStack: ResponseStudyStack;
  /** Todoを更新する：引数(タイトル,説明,開始日,終了日,todo状態,ユーザーID) */
  updateTodo: ResponseTodo;
  /** ユーザー習得技術を更新する：引数(ユーザーID, TechLeafID) */
  updateUserTechLeafs: ResponseUserTechLeaf;
  /** ユーザーがログインする：引数(ユーザーID, email, password) */
  userLogin: ResponseUser;
};

export type MutationAddSpecProjectArgs = {
  specProject: SpecProjectAddInput;
};

export type MutationAddStudyStackArgs = {
  stack: StudyStackAddInput;
};

export type MutationAddTodoArgs = {
  todo?: InputMaybe<TodoAddInput>;
};

export type MutationAddUserUrlsArgs = {
  urlData: UserUrlsAddInput;
};

export type MutationChangeTodoStatusArgs = {
  todoId?: InputMaybe<Scalars["String"]>;
};

export type MutationCreatePortfolioArgs = {
  portfolio: PortfolioCreateInput;
};

export type MutationCreateTechAreaArgs = {
  techArea: TechAreaCreateInput;
};

export type MutationCreateTechBranchArgs = {
  techBranch: TechBranchCreateInput;
};

export type MutationCreateTechLeafArgs = {
  techLeaf: TechLeafCreateInput;
};

export type MutationCreateTechTreeArgs = {
  techTree: TechTreeCreateInput;
};

export type MutationCreateUserArgs = {
  user: UserCreateInput;
};

export type MutationCreateUserUrlsArgs = {
  urlData: UserUrlsCreateInput;
};

export type MutationRemovePortfolioArgs = {
  portfolioId: Scalars["String"];
};

export type MutationRemoveSpecProjectArgs = {
  specProjectId: Scalars["String"];
};

export type MutationRemoveStudyStackArgs = {
  studyStackId: Scalars["String"];
};

export type MutationRemoveTodoArgs = {
  todoId?: InputMaybe<Scalars["String"]>;
};

export type MutationRemoveUserUrlsArgs = {
  urlData: UserUrlsRemoveInput;
};

export type MutationUpdatePortfolioArgs = {
  portfolio: PortfolioUpdateInput;
};

export type MutationUpdateSpecProjectArgs = {
  specProject: SpecProjectUpdateInput;
};

export type MutationUpdateSpecSheetArgs = {
  specSheet?: InputMaybe<SpecSheetUpdateInput>;
};

export type MutationUpdateSpecTechInfoArgs = {
  specTechInfo: SpecTechInfoUpdateInput;
};

export type MutationUpdateSpecUserInfoArgs = {
  specUserInfo: SpecUserInfoUpdateInput;
};

export type MutationUpdateStudyStackArgs = {
  stack: StudyStackUpdateInput;
};

export type MutationUpdateTodoArgs = {
  todo?: InputMaybe<TodoUpdateInput>;
};

export type MutationUpdateUserTechLeafsArgs = {
  techLeaf: UserTechLeafUpdateInput;
};

export type MutationUserLoginArgs = {
  user: UserLoginInput;
};

export type Portfolio = {
  __typename?: "Portfolio";
  description: Scalars["String"];
  id?: Maybe<Scalars["ID"]>;
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

export type Query = {
  __typename?: "Query";
  /** スキル取得. */
  getAllSkill?: Maybe<Array<Maybe<Skill>>>;
  /** ユーザーのTodo一覧情報を取得. */
  getAllStudyStack: Array<StudyStack>;
  getAllTechArea: Array<TechArea>;
  getAllTechBranch: Array<TechBranch>;
  /** それぞれのTechを取得. */
  getAllTechLeaf: Array<TechLeaf>;
  getAllTechTree: Array<TechTree>;
  /** ユーザーのTodo一覧情報を取得. */
  getAllTodoByUser: Array<Todo>;
  /** 全てのユーザー情報を取得. */
  getAllUser?: Maybe<Array<User>>;
  getFrameworks: Skill;
  getLanguages: Skill;
  getLibraries: Skill;
  getOperationEnvs: Skill;
  getOtherTools: Skill;
  /** ユーザーIDに紐づくポートフォリオ情報を取得. */
  getPortfolioByUserId: ResponsePortfolio;
  /** ユーザーIDに紐づくスペックシート情報を取得. */
  getSheetByUserId: ResponseSpecSheet;
  /** StudyStackIdに紐づいたStudyStack情報を取得. */
  getStudyStackById: StudyStack;
  /** TodoIdに紐づいたTodo情報を取得. */
  getTodoById: Todo;
  /** ユーザーidに紐づくユーザー情報を取得. */
  getUserById: User;
};

export type QueryGetAllStudyStackArgs = {
  userId?: InputMaybe<Scalars["String"]>;
};

export type QueryGetAllTodoByUserArgs = {
  userId?: InputMaybe<Scalars["String"]>;
};

export type QueryGetFrameworksArgs = {
  _id?: InputMaybe<Scalars["String"]>;
};

export type QueryGetLanguagesArgs = {
  _id?: InputMaybe<Scalars["String"]>;
};

export type QueryGetLibrariesArgs = {
  _id?: InputMaybe<Scalars["String"]>;
};

export type QueryGetOperationEnvsArgs = {
  _id?: InputMaybe<Scalars["String"]>;
};

export type QueryGetOtherToolsArgs = {
  _id?: InputMaybe<Scalars["String"]>;
};

export type QueryGetPortfolioByUserIdArgs = {
  userId?: InputMaybe<Scalars["String"]>;
};

export type QueryGetSheetByUserIdArgs = {
  userId?: InputMaybe<Scalars["String"]>;
};

export type QueryGetStudyStackByIdArgs = {
  studyStackId?: InputMaybe<Scalars["String"]>;
};

export type QueryGetTodoByIdArgs = {
  todoId?: InputMaybe<Scalars["String"]>;
};

export type QueryGetUserByIdArgs = {
  _id: Scalars["String"];
};

export type ResponsePortfolio = {
  __typename?: "ResponsePortfolio";
  message?: Maybe<Scalars["String"]>;
  node?: Maybe<Portfolio>;
  status: Scalars["String"];
};

export type ResponseRemove = {
  __typename?: "ResponseRemove";
  msg?: Maybe<Scalars["String"]>;
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
  node?: Maybe<StudyStack>;
  status: Scalars["String"];
};

export type ResponseTodo = {
  __typename?: "ResponseTodo";
  node?: Maybe<Todo>;
  status: Scalars["String"];
};

export type ResponseUser = {
  __typename?: "ResponseUser";
  message?: Maybe<Scalars["String"]>;
  node?: Maybe<User>;
  status: Scalars["String"];
};

export type ResponseUserTechLeaf = {
  __typename?: "ResponseUserTechLeaf";
  node?: Maybe<UserLeafs>;
  status: Scalars["String"];
};

export type ResponseUserUrls = {
  __typename?: "ResponseUserUrls";
  node?: Maybe<UserUrls>;
  status: Scalars["String"];
};

export type Skill = {
  __typename?: "Skill";
  data?: Maybe<Array<Maybe<Scalars["String"]>>>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
};

export type SpecProjectAddInput = {
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
  specSheetId: Scalars["ID"];
  startedAt: Scalars["String"];
};

export type SpecProjectSheet = {
  __typename?: "SpecProjectSheet";
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
  project?: Maybe<Array<SpecProjectSheet>>;
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
  techTrees?: Maybe<Array<TechTree>>;
};

export type TechAreaCreateInput = {
  name: Scalars["String"];
};

export type TechBranch = {
  __typename?: "TechBranch";
  id: Scalars["ID"];
  name: Scalars["String"];
  techLeafs?: Maybe<Array<TechLeaf>>;
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
  portfolio?: Maybe<Array<Portfolio>>;
  userLeafs: UserLeafs;
  userUrls: UserUrls;
};

export type UserCreateInput = {
  email: Scalars["String"];
  githubURL: Scalars["String"];
  jobType: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
};

export type UserLeafs = {
  __typename?: "UserLeafs";
  id: Scalars["ID"];
  techLeafs: Array<LeafInfo>;
  userId: Scalars["ID"];
};

export type UserLoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type UserTechLeafUpdateInput = {
  achievementRate: Scalars["Int"];
  techLeafIds: Array<InputMaybe<Scalars["String"]>>;
  techTreeId: Scalars["ID"];
  userId: Scalars["ID"];
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
  achievementRate: Scalars["Int"];
  techLeafIds: Array<Scalars["ID"]>;
  techTreeId: Scalars["ID"];
};

export type PrevJobsContent = {
  __typename?: "prevJobsContent";
  content: Scalars["String"];
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetUserByIdQuery = {
  __typename?: "Query";
  user: {
    __typename?: "User";
    id: string;
    name: string;
    jobType: string;
    githubURL: string;
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
    node?: {
      __typename?: "User";
      id: string;
      name: string;
      jobType: string;
      email: string;
      password: string;
      githubURL: string;
    } | null;
  };
};

export type GetAllStudyStackQueryVariables = Exact<{
  userId?: InputMaybe<Scalars["String"]>;
}>;

export type GetAllStudyStackQuery = {
  __typename?: "Query";
  getAllStudyStack: Array<{
    __typename?: "StudyStack";
    id: string;
    timeStack: number;
    content: string;
    createdAt: string;
    skillTagId: string;
    userId: string;
  }>;
};

export type GetStudyStackByIdQueryVariables = Exact<{
  studyStackId?: InputMaybe<Scalars["String"]>;
}>;

export type GetStudyStackByIdQuery = {
  __typename?: "Query";
  getStudyStackById: {
    __typename?: "StudyStack";
    id: string;
    content: string;
    timeStack: number;
    createdAt: string;
    skillTagId: string;
    userId: string;
  };
};

export type GetAllTodoByUserQueryVariables = Exact<{
  userId?: InputMaybe<Scalars["String"]>;
}>;

export type GetAllTodoByUserQuery = {
  __typename?: "Query";
  todos: Array<{
    __typename?: "Todo";
    id: string;
    title: string;
    startedAt: string;
    finishedAt?: string | null;
    isStatus: boolean;
  }>;
};

export const GetUserByIdDocument = gql`
  query GetUserById($id: String!) {
    user: getUserById(_id: $id) {
      id
      name
      jobType
      githubURL
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
export const GetAllStudyStackDocument = gql`
  query GetAllStudyStack($userId: String) {
    getAllStudyStack(userId: $userId) {
      id
      timeStack
      content
      createdAt
      skillTagId
      userId
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
  baseOptions?: Apollo.QueryHookOptions<
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
  query GetStudyStackById($studyStackId: String) {
    getStudyStackById(studyStackId: $studyStackId) {
      id
      content
      timeStack
      createdAt
      skillTagId
      userId
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
  baseOptions?: Apollo.QueryHookOptions<
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
export const GetAllTodoByUserDocument = gql`
  query GetAllTodoByUser($userId: String) {
    todos: getAllTodoByUser(userId: $userId) {
      id
      title
      startedAt
      finishedAt
      isStatus
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
  baseOptions?: Apollo.QueryHookOptions<
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
