/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// GraphQLエンドポイントへの呼び出しをモックするパッケージ
import { MockedProvider } from "@apollo/react-testing";

import { TodosArea } from "../../src/components/organisms/study/TodosArea";
import { todoMocks } from "../../__mocks__/Todos";

// MockedProviderで囲んだテスト対象のコンポーネントを定義
const WrapedTodosArea = () => {
  return (
    // mocksに作成したモックを渡して囲む
    <MockedProvider mocks={todoMocks} addTypename={false}>
      <TodosArea />
    </MockedProvider>
  );
};

describe("TodosAreaのテスト", () => {
  it("GraphQLのモックデータがうまく表示されるかどうか", async () => {
    render(<WrapedTodosArea />);
    expect(screen.getByText("Todoリスト")).toBeInTheDocument();
    // setTimeoutしてMockedProviderがモックのレスポンスを取得する処理を走らせる
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(screen.getAllByText("テスト1")[0]).toBeInTheDocument();
    expect(screen.getByText("2022/03/10-03/12")).toBeInTheDocument();
  });

  it("ローディング中の表示がうまくなされるかどうか", async () => {
    render(<WrapedTodosArea />);
    expect(screen.getByText("Todoリスト")).toBeInTheDocument();

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
