import { GraphQLScalarType } from "graphql";
// レスポンスの時にDateの形で返す
export const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  parseValue: (value: any) => new Date(value), // レスポンスに含める際に定義した関数に沿って処理
  serialize: (value: any) => new Date(value).toISOString(), //クライアント側から送信される値をパースする際の関数
  parseLiteral: (ast: any) => ast.value, //クエリドキュメントに直接追加された場合の関数。最低限その値を返すだけで良い。
});
