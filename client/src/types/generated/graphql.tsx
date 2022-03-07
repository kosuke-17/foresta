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
  /** ユーザーの学習記録を追加する */
  addStudyStack: ResponseStudyStack;
  /** Todoを追加する：引数(タイトル,説明,開始日,終了日,todo状態,ユーザーID) */
  addTodo: ResponseTodo;
  addUserUrls: ResponseUserUrls;
  /** Todo状態をtrueにする：引数(todoId) */
  chekedTodoStatus: ResponseTodo;
  createTechArea: CreatedTechArea;
  createTechBranch: CreatedTechBranch;
  /** Techを追加する：引数(Leaf名 or Branch名 or Tree名) */
  createTechLeaf: CreatedTechLeaf;
  createTechTree: CreatedTechTree;
  /** ユーザーを追加する：引数(ユーザー名、エンジニアタイプ、GithubURL?) */
  createUser: ResponseUser;
  /** ユーザーの持つUrlを作成する：引数(ユーザーID, TechLeafID) */
  createUserUrls: ResponseUserUrls;
  /** ユーザーの学習記録を削除する */
  removeStudyStack: ResponseStudyStack;
  /** Todoを削除する：引数(todoId) */
  removeTodo: ResponseTodo;
  removeUserUrls: ResponseUserUrls;
  /** Todo状態をfalseにする：引数(todoId) */
  unChekedTodoStatus: ResponseTodo;
  /** スキル要約情報を更新する */
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

export type MutationAddStudyStackArgs = {
  stack: StudyStackAddInput;
};

export type MutationAddTodoArgs = {
  todo?: InputMaybe<TodoAddInput>;
};

export type MutationAddUserUrlsArgs = {
  urlData: UserUrlsAddInput;
};

export type MutationChekedTodoStatusArgs = {
  todoId?: InputMaybe<Scalars["String"]>;
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

export type MutationRemoveStudyStackArgs = {
  studyStackId: Scalars["String"];
};

export type MutationRemoveTodoArgs = {
  todoId?: InputMaybe<Scalars["String"]>;
};

export type MutationRemoveUserUrlsArgs = {
  urlData: UserUrlsRemoveInput;
};

export type MutationUnChekedTodoStatusArgs = {
  todoId?: InputMaybe<Scalars["String"]>;
};

export type MutationUpdateSpecProjectArgs = {
  specProject?: InputMaybe<SpecProjectUpdateInput>;
};

export type MutationUpdateSpecSheetArgs = {
  specSheet?: InputMaybe<SpecSheetUpdateInput>;
};

export type MutationUpdateSpecTechInfoArgs = {
  specTechInfo?: InputMaybe<SpecTechInfoUpdateInput>;
};

export type MutationUpdateSpecUserInfoArgs = {
  specUserInfo?: InputMaybe<SpecUserInfoUpdateInput>;
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

export type Query = {
  __typename?: "Query";
  /** ユーザーのTodo一覧情報を取得する. */
  getAllStudyStack: Array<StudyStack>;
  getAllTechArea: Array<TechArea>;
  getAllTechBranch: Array<TechBranch>;
  /** それぞれのTechを取得する */
  getAllTechLeaf: Array<TechLeaf>;
  getAllTechTree: Array<TechTree>;
  /** ユーザーのTodo一覧情報を取得する. */
  getAllTodoByUser: Array<Todo>;
  /** 全てのユーザー情報を取得する. */
  getAllUser?: Maybe<Array<User>>;
  /** StudyStackIdに紐づいたStudyStack情報を取得する. */
  getStudyStackById: StudyStack;
  /** TodoIdに紐づいたTodo情報を取得する. */
  getTodoById: Todo;
  /** ユーザーidに紐づくユーザー情報を取得する. */
  getUserById: User;
};

export type QueryGetAllStudyStackArgs = {
  userId?: InputMaybe<Scalars["String"]>;
};

export type QueryGetAllTodoByUserArgs = {
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

export type ResponseSpecProject = {
  __typename?: "ResponseSpecProject";
  node?: Maybe<SpecProjectSheet>;
  status: Scalars["String"];
};

export type ResponseSpecSheet = {
  __typename?: "ResponseSpecSheet";
  node?: Maybe<SpecSheet>;
  status: Scalars["String"];
};

export type ResponseSpecTechInfo = {
  __typename?: "ResponseSpecTechInfo";
  node?: Maybe<SpecTechInfoSheet>;
  status: Scalars["String"];
};

export type ResponseSpecUserInfo = {
  __typename?: "ResponseSpecUserInfo";
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

export type SpecProjectSheet = {
  __typename?: "SpecProjectSheet";
  OtherTools: Array<Scalars["String"]>;
  content: Scalars["String"];
  devRoles: Array<Scalars["String"]>;
  finishedAt: Scalars["String"];
  frameworks: Array<Scalars["String"]>;
  languages: Array<Scalars["String"]>;
  libraries: Array<Scalars["String"]>;
  memberCount: Scalars["Int"];
  name: Scalars["String"];
  operationEnvs: Array<Scalars["String"]>;
  roleSharing: Scalars["String"];
  specSheetId: Scalars["String"];
  startedAt: Scalars["String"];
};

export type SpecProjectUpdateInput = {
  OtherTools: Array<Scalars["String"]>;
  content: Scalars["String"];
  devRoles: Array<Scalars["String"]>;
  finishedAt: Scalars["String"];
  frameworks: Array<Scalars["String"]>;
  languages: Array<Scalars["String"]>;
  libraries: Array<Scalars["String"]>;
  name: Scalars["String"];
  operationEnvs: Array<Scalars["String"]>;
  roleSharing: Scalars["String"];
  specProjectId: Scalars["String"];
  specSheetId: Scalars["String"];
  startedAt: Scalars["String"];
};

export type SpecSheet = {
  __typename?: "SpecSheet";
  certification: Scalars["String"];
  id: Scalars["String"];
  prevJobs: Array<PrevJobsContent>;
  selfIntro: Scalars["String"];
  studyOnOwnTime: Scalars["String"];
  userId: Scalars["String"];
};

export type SpecSheetUpdateInput = {
  certification: Scalars["String"];
  prevJobs: Array<Scalars["String"]>;
  selfIntro: Scalars["String"];
  specSheetId: Scalars["String"];
  studyOnOwnTime: Scalars["String"];
  userId: Scalars["String"];
};

export type SpecTechInfoSheet = {
  __typename?: "SpecTechInfoSheet";
  OtherTools: Array<Scalars["String"]>;
  devRoles: Array<Scalars["String"]>;
  frameworks: Array<Scalars["String"]>;
  languages: Array<Scalars["String"]>;
  libraries: Array<Scalars["String"]>;
  operationEnvs: Array<Scalars["String"]>;
  specSheetId: Scalars["String"];
};

export type SpecTechInfoUpdateInput = {
  OtherTools: Array<Scalars["String"]>;
  devRoles: Array<Scalars["String"]>;
  frameworks: Array<Scalars["String"]>;
  languages: Array<Scalars["String"]>;
  libraries: Array<Scalars["String"]>;
  operationEnvs: Array<Scalars["String"]>;
  specSheetId: Scalars["String"];
  specTechInfoId: Scalars["String"];
};

export type SpecUserInfoSheet = {
  __typename?: "SpecUserInfoSheet";
  age: Scalars["Int"];
  gender: Scalars["String"];
  itExpAmount: Scalars["Int"];
  nearestStation: Scalars["String"];
  pgExpAmount: Scalars["Int"];
  seExpAmount: Scalars["Int"];
  specSheetId: Scalars["String"];
  startWorkDate: Scalars["String"];
  stuffID: Scalars["String"];
};

export type SpecUserInfoUpdateInput = {
  age: Scalars["Int"];
  gender: Scalars["String"];
  itExpAmount: Scalars["Int"];
  nearestStation: Scalars["String"];
  pgExpAmount: Scalars["Int"];
  seExpAmount: Scalars["Int"];
  specSheetId: Scalars["String"];
  specUserInfoId: Scalars["String"];
  startWorkDate: Scalars["String"];
  stuffID: Scalars["String"];
};

export type StudyStack = {
  __typename?: "StudyStack";
  content: Scalars["String"];
  createdAt: Scalars["String"];
  id: Scalars["String"];
  skillTagId: Scalars["String"];
  timeStack: Scalars["Int"];
  userId: Scalars["String"];
};

export type StudyStackAddInput = {
  content: Scalars["String"];
  createdAt: Scalars["String"];
  skillTagId: Scalars["String"];
  timeStack: Scalars["Int"];
  userId: Scalars["String"];
};

export type StudyStackUpdateInput = {
  content: Scalars["String"];
  createdAt: Scalars["String"];
  skillTagId: Scalars["String"];
  studyStackId: Scalars["String"];
  timeStack: Scalars["Int"];
};

export type TechArea = {
  __typename?: "TechArea";
  id: Scalars["String"];
  name: Scalars["String"];
  techTrees?: Maybe<Array<TechTree>>;
};

export type TechAreaCreateInput = {
  name: Scalars["String"];
};

export type TechBranch = {
  __typename?: "TechBranch";
  id: Scalars["String"];
  name: Scalars["String"];
  techLeafs?: Maybe<Array<TechLeaf>>;
  techTree_id: Scalars["String"];
};

export type TechBranchCreateInput = {
  name: Scalars["String"];
  techTree_id: Scalars["String"];
};

export type TechLeaf = {
  __typename?: "TechLeaf";
  id: Scalars["String"];
  name: Scalars["String"];
  techBranch_id: Scalars["String"];
};

export type TechLeafCreateInput = {
  name: Scalars["String"];
  techBranch_id: Scalars["String"];
};

export type TechTree = {
  __typename?: "TechTree";
  id: Scalars["String"];
  name: Scalars["String"];
  techArea_id: Scalars["String"];
  techBranches: Array<TechBranch>;
};

export type TechTreeCreateInput = {
  name: Scalars["String"];
  techArea_id: Scalars["String"];
};

export type Todo = {
  __typename?: "Todo";
  description: Scalars["String"];
  finishedAt: Scalars["String"];
  id: Scalars["String"];
  isStatus: Scalars["Boolean"];
  startedAt: Scalars["String"];
  title: Scalars["String"];
  userId: Scalars["String"];
};

export type TodoAddInput = {
  description: Scalars["String"];
  finishedAt: Scalars["String"];
  isStatus: Scalars["Boolean"];
  startedAt: Scalars["String"];
  title: Scalars["String"];
  userId: Scalars["String"];
};

export type TodoUpdateInput = {
  description: Scalars["String"];
  finishedAt: Scalars["String"];
  isStatus: Scalars["Boolean"];
  startedAt: Scalars["String"];
  title: Scalars["String"];
  todoId: Scalars["String"];
  userId: Scalars["String"];
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
  id: Scalars["String"];
  jobType: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
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
  id: Scalars["String"];
  techLeafs: Array<LeafInfo>;
  userId: Scalars["String"];
};

export type UserLoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type UserTechLeafUpdateInput = {
  achievementRate: Scalars["Int"];
  techLeafIds: Array<InputMaybe<Scalars["String"]>>;
  techTreeId: Scalars["String"];
  userId: Scalars["String"];
};

export type UserUrls = {
  __typename?: "UserUrls";
  userId: Scalars["String"];
  user_urls: Array<Url>;
};

export type UserUrlsAddInput = {
  url: Scalars["String"];
  urlId: Scalars["String"];
  urlName: Scalars["String"];
};

export type UserUrlsCreateInput = {
  url: Scalars["String"];
  urlName: Scalars["String"];
  userId: Scalars["String"];
};

export type UserUrlsRemoveInput = {
  urlId: Scalars["String"];
  userUrlsId: Scalars["String"];
};

export type LeafInfo = {
  __typename?: "leafInfo";
  achievementRate: Scalars["Int"];
  techLeafIds: Array<Scalars["String"]>;
  techTreeId: Scalars["String"];
};

export type PrevJobsContent = {
  __typename?: "prevJobsContent";
  content: Scalars["String"];
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
    finishedAt: string;
    isStatus: boolean;
  }>;
};

export type GetTodoByIdQueryVariables = Exact<{
  todoId?: InputMaybe<Scalars["String"]>;
}>;

export type GetTodoByIdQuery = {
  __typename?: "Query";
  todo: {
    __typename?: "Todo";
    id: string;
    title: string;
    description: string;
    startedAt: string;
    finishedAt: string;
    isStatus: boolean;
  };
};

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
export const GetTodoByIdDocument = gql`
  query GetTodoById($todoId: String) {
    todo: getTodoById(todoId: $todoId) {
      id
      title
      description
      startedAt
      finishedAt
      isStatus
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
  baseOptions?: Apollo.QueryHookOptions<
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
