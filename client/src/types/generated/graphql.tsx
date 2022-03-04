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
  /** TechLeafをユーザー情報に追加する：引数(ユーザーID, TechLeafID) */
  addUserTechLeafs: ResponseUser;
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
  /** ユーザーの持つTechLeaf削除する：引数(ユーザーID, TechLeafID) */
  removeUserTechLeafs: ResponseUser;
  removeUserUrls: ResponseUserUrls;
  /** Todo状態をfalseにする：引数(todoId) */
  unChekedTodoStatus: ResponseTodo;
  /** ユーザーの学習記録を更新する */
  updateStudyStack: ResponseStudyStack;
  /** Todoを更新する：引数(タイトル,説明,開始日,終了日,todo状態,ユーザーID) */
  updateTodo: ResponseTodo;
  /** ユーザーがログインする：引数(ユーザーID, email, password) */
  userLogin: ResponseUser;
};

export type MutationAddStudyStackArgs = {
  stack: StudyStackAddInput;
};

export type MutationAddTodoArgs = {
  todo?: InputMaybe<TodoInput>;
};

export type MutationAddUserTechLeafsArgs = {
  user: UserTechLeafAddInput;
};

export type MutationAddUserUrlsArgs = {
  user: UserUrlsAddInput;
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
  user: UserUrlsCreateInput;
};

export type MutationRemoveStudyStackArgs = {
  studyStackId: Scalars["String"];
};

export type MutationRemoveTodoArgs = {
  todoId?: InputMaybe<Scalars["String"]>;
};

export type MutationRemoveUserTechLeafsArgs = {
  user: UserTechLeafRemoveInput;
};

export type MutationRemoveUserUrlsArgs = {
  user: UserUrlsRemoveInput;
};

export type MutationUnChekedTodoStatusArgs = {
  todoId?: InputMaybe<Scalars["String"]>;
};

export type MutationUpdateStudyStackArgs = {
  stack: StudyStackUpdateInput;
};

export type MutationUpdateTodoArgs = {
  todo?: InputMaybe<TodoInput>;
};

export type MutationUserLoginArgs = {
  user: UserLoginInput;
};

export type Query = {
  __typename?: "Query";
  /** ユーザーのTodo一覧情報を取得する. */
  getAllStudyStackByUserId: Array<StudyStack>;
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
  getStudyStackByStudyStackId: StudyStack;
  /** TodoIdに紐づいたTodo情報を取得する. */
  getTodoByTodoId: Todo;
  /** ユーザーidに紐づくユーザー情報を取得する. */
  user: User;
};

export type QueryGetAllStudyStackByUserIdArgs = {
  userId?: InputMaybe<Scalars["String"]>;
};

export type QueryGetAllTodoByUserArgs = {
  userId?: InputMaybe<Scalars["String"]>;
};

export type QueryGetStudyStackByStudyStackIdArgs = {
  studyStackId?: InputMaybe<Scalars["String"]>;
};

export type QueryGetTodoByTodoIdArgs = {
  todoId?: InputMaybe<Scalars["String"]>;
};

export type QueryUserArgs = {
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
  status?: Maybe<Scalars["String"]>;
};

export type ResponseUser = {
  __typename?: "ResponseUser";
  message?: Maybe<Scalars["String"]>;
  node?: Maybe<User>;
  status: Scalars["String"];
};

export type ResponseUserUrls = {
  __typename?: "ResponseUserUrls";
  node?: Maybe<UserUrls>;
  status?: Maybe<Scalars["String"]>;
};

export type StudyStack = {
  __typename?: "StudyStack";
  content: Scalars["String"];
  createdAt: Scalars["String"];
  id?: Maybe<Scalars["String"]>;
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
  content?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["String"]>;
  skillTagId?: InputMaybe<Scalars["String"]>;
  studyStackId?: InputMaybe<Scalars["String"]>;
  timeStack?: InputMaybe<Scalars["Int"]>;
  userId: Scalars["String"];
};

export type TechArea = {
  __typename?: "TechArea";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  techTrees?: Maybe<Array<TechTree>>;
};

export type TechAreaCreateInput = {
  name?: InputMaybe<Scalars["String"]>;
};

export type TechBranch = {
  __typename?: "TechBranch";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  techLeafs?: Maybe<Array<TechLeaf>>;
  techTree_id?: Maybe<Scalars["String"]>;
};

export type TechBranchCreateInput = {
  name?: InputMaybe<Scalars["String"]>;
  techTree_id?: InputMaybe<Scalars["String"]>;
};

export type TechLeaf = {
  __typename?: "TechLeaf";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  techBranch_id?: Maybe<Scalars["String"]>;
};

export type TechLeafCreateInput = {
  name?: InputMaybe<Scalars["String"]>;
  techBranch_id?: InputMaybe<Scalars["String"]>;
};

export type TechLeafInfo = {
  __typename?: "TechLeafInfo";
  achievementRate?: Maybe<Scalars["Int"]>;
  techLeafIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
  techTreeId?: Maybe<Scalars["String"]>;
};

export type TechTree = {
  __typename?: "TechTree";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  techArea_id?: Maybe<Scalars["String"]>;
  techBranches?: Maybe<Array<TechBranch>>;
};

export type TechTreeCreateInput = {
  name?: InputMaybe<Scalars["String"]>;
  techArea_id?: InputMaybe<Scalars["String"]>;
};

export type Todo = {
  __typename?: "Todo";
  description?: Maybe<Scalars["String"]>;
  finishedAt?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  isStatus?: Maybe<Scalars["Boolean"]>;
  startedAt?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
};

export type TodoInput = {
  description?: InputMaybe<Scalars["String"]>;
  finishedAt?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  isStatus?: InputMaybe<Scalars["Boolean"]>;
  startedAt?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

export type Url = {
  __typename?: "URL";
  url?: Maybe<Scalars["String"]>;
  urlName?: Maybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  email?: Maybe<Scalars["String"]>;
  githubURL?: Maybe<Scalars["String"]>;
  have_techLeafs?: Maybe<Array<Maybe<TechLeafInfo>>>;
  id?: Maybe<Scalars["String"]>;
  jobType?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type UserCreateInput = {
  email: Scalars["String"];
  githubURL: Scalars["String"];
  jobType: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
};

export type UserLoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type UserTechLeafAddInput = {
  _id: Scalars["String"];
  achievementRate: Scalars["Int"];
  haveTechLeafId: Scalars["String"];
  techLeafIds: Array<InputMaybe<Scalars["String"]>>;
};

export type UserTechLeafRemoveInput = {
  _id: Scalars["String"];
  techLeafId: Scalars["String"];
};

export type UserUrls = {
  __typename?: "UserUrls";
  userId?: Maybe<Scalars["String"]>;
  user_urls?: Maybe<Array<Maybe<Url>>>;
};

export type UserUrlsAddInput = {
  url?: InputMaybe<Scalars["String"]>;
  urlId?: InputMaybe<Scalars["String"]>;
  urlName?: InputMaybe<Scalars["String"]>;
};

export type UserUrlsCreateInput = {
  url?: InputMaybe<Scalars["String"]>;
  urlName?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

export type UserUrlsRemoveInput = {
  urlId?: InputMaybe<Scalars["String"]>;
  userUrlsId?: InputMaybe<Scalars["String"]>;
};

export type GetAllTodoByUserQueryVariables = Exact<{
  userId?: InputMaybe<Scalars["String"]>;
}>;

export type GetAllTodoByUserQuery = {
  __typename?: "Query";
  todos: Array<{
    __typename?: "Todo";
    id?: string | null;
    title?: string | null;
    startedAt?: string | null;
    finishedAt?: string | null;
    isStatus?: boolean | null;
  }>;
};

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
