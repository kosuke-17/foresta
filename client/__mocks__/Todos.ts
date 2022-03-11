import { GetAllTodoByUserDocument, GetTodoByIdDocument } from "../src/types/generated/graphql";

// GraphQLエンドポイントへの呼び出しをモック
export const todoMocks = [
  {
    request: {
      query: GetAllTodoByUserDocument, // Codegenで生成されたクエリ Documentで終わるもの。
      variables: {
        userId: "test"
      }
    },

    result: {
      // データをモック
      data: {
        __typename: "Query",
        todos: [
          {
            __typename: "Todo",
            id: "aaa",
            title: "テスト1",
            startedAt: "2022-03-10",
            finishedAt: "2022-03-12",
            isStatus: false,
          },
          {
            __typename: "Todo",
            id: "bbb",
            title: "テスト",
            startedAt: "2022-03-15",
            finishedAt: "2022-03-16",
            isStatus: true,
          },
        ],
      },
    },
  },
  {
    request: {
      query: GetTodoByIdDocument, // Codegenで生成されたクエリ Documentで終わるもの。
      variables: {
        todoId: ""
      }
    },
    result: {
      // データをモック
      data: {
        __typename: "Query",
        todo: [
          {
            __typename: "Todo",
            id: "test",
            title: "テスト1",
            description: "メモ",
            startedAt: "2022-03-10",
            finishedAt: "2022-03-12",
            isStatus: false,
          },
        ],
      },
    },
  },
];