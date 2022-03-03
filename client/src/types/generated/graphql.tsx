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
  userId: Scalars["String"];
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
