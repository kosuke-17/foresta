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

export type Category = {
  __typename?: "Category";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  todoList?: Maybe<Array<Maybe<Todo>>>;
};

export type Mutation = {
  __typename?: "Mutation";
  addCategory?: Maybe<Category>;
  addTodo?: Maybe<Todo>;
  deleteCategory?: Maybe<Category>;
  deleteTodo?: Maybe<Todo>;
  finishTodo?: Maybe<Todo>;
  updateCategory?: Maybe<Category>;
  updateTodo?: Maybe<Todo>;
};

export type MutationAddCategoryArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type MutationAddTodoArgs = {
  categoryId?: InputMaybe<Scalars["ID"]>;
  finish?: InputMaybe<Scalars["Boolean"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type MutationDeleteCategoryArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteTodoArgs = {
  id: Scalars["ID"];
};

export type MutationFinishTodoArgs = {
  finish?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["ID"];
};

export type MutationUpdateCategoryArgs = {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
};

export type MutationUpdateTodoArgs = {
  categoryId?: InputMaybe<Scalars["ID"]>;
  id: Scalars["ID"];
  title?: InputMaybe<Scalars["String"]>;
};

export type RootQueryType = {
  __typename?: "RootQueryType";
  getAllCategory?: Maybe<Array<Maybe<Category>>>;
  getAllTodo?: Maybe<Array<Maybe<Todo>>>;
  getCategory?: Maybe<Category>;
  getTodo?: Maybe<Todo>;
};

export type RootQueryTypeGetCategoryArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type RootQueryTypeGetTodoArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Todo = {
  __typename?: "Todo";
  category?: Maybe<Category>;
  finish?: Maybe<Scalars["Boolean"]>;
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
};

export type TodosQueryVariables = Exact<{ [key: string]: never }>;

export type TodosQuery = {
  __typename?: "RootQueryType";
  getAllTodo?: Array<{
    __typename?: "Todo";
    id?: string | null;
    title?: string | null;
    finish?: boolean | null;
  } | null> | null;
};

export const TodosDocument = gql`
  query todos {
    getAllTodo {
      id
      title
      finish
    }
  }
`;

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQuery(
  baseOptions?: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TodosQuery, TodosQueryVariables>(
    TodosDocument,
    options,
  );
}
export function useTodosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(
    TodosDocument,
    options,
  );
}
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = Apollo.QueryResult<
  TodosQuery,
  TodosQueryVariables
>;
