import { GraphQLScalarType } from "graphql";
// レスポンスの時にDateの形で返す
export const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  parseValue: (value: any) => {
    return new Date(value);
  }, // レスポンスに含める際に定義した関数に沿って処理
  // きちんとvalueが渡ってきていないので修正必要
  serialize: (value: any) => {
    return new Date(value);
  }, //クライアント側から送信される値をパースする際の関数
  parseLiteral: (ast: any) => ast.value, //クエリドキュメントに直接追加された場合の関数。最低限その値を返すだけで良い。
});
