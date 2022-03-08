/**
 * @jest-environment jsdom
 */
 import { render, screen } from "@testing-library/react";
 import "@testing-library/jest-dom/extend-expect";
 // GraphQLエンドポイントへの呼び出しをモックするパッケージ
 import { MockedProvider } from "@apollo/react-testing";
 import { TodosArea } from "../src/components/organisms/study/TodosArea";
 import { GetAllTodoByUserDocument } from "../src/types/generated/graphql";
 
 // GraphQLエンドポイントへの呼び出しをモック
 const mocks = [
   {
     request: {
       query: GetAllTodoByUserDocument, // Codegenで生成されたクエリ Documentで終わるもの。
       //       export const GetAllTodoByUserDocument = gql`   // types/generated/graphql.tsで定義されたDocument
       //         query GetAllTodoByUser($userId: String) {
       //           todos: getAllTodoByUser(userId: $userId) {
       //             id
       //             title
       //             startedAt
       //             finishedAt
       //             isStatus
       //             }
       //         }
       //       `;
     },
     result: {
       // データをモック
       data: {
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
 ];
 
 describe("Rendering", () => {
   it("TodosAreaのテスト", () => {
     render(
       // mocksに作成したモックを渡して囲む
       <MockedProvider mocks={mocks} addTypename={false}>
         <TodosArea />
       </MockedProvider>,
     );
     expect(screen.getByText("Todoリスト")).toBeInTheDocument();
   });
 });
 