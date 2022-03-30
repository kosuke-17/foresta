/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { GetAllStudyStackDocument } from "../src/types/generated/graphql";
import { StackList } from "../src/components/organisms/study/StackList";
import { MockedProvider } from "@apollo/react-testing";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";
import { Cookies } from "react-cookie";
import { InMemoryCache } from "@apollo/client";

const cookies = new Cookies();

const mocks = [
  {
    request: {
      query: GetAllStudyStackDocument,
      variables: {
        userToken: cookies.get("ForestaID"),
      },
      // error: new Error("Error"),
    },
    result: {
      getAllStudyStack: {
        status: "success",
        msg: "",
        node: [
          {
            id: "stacks",
            content: "ああ",
            timeStack: 100,
            createdAt: "2022-02-22",
            skillTagId: "React",
            userId: "1111",
          },
          {
            id: "stacks2",
            content: "ああああいい",
            timeStack: 1000,
            createdAt: "2022-02-22",
            skillTagId: "Vue",
            userId: "1111222",
          },
        ],
      },
    },
  },
];

describe("学習リスト画面表示", () => {
  it("学習リスト画面が表示され、学習記録モーダルが正しく表示されるか", () => {
    render(
      <MockedProvider
        // mocks={mocks}
        addTypename={false}
        defaultOptions={{
          watchQuery: { fetchPolicy: "no-cache" },
          query: { fetchPolicy: "no-cache" },
        }}
        // cache={
        //   new InMemoryCache({
        //     possibleTypes,
        //   })
        // }
      >
        <StackList />
      </MockedProvider>,
    );

    expect(screen.getByText("学習リスト")).toBeInTheDocument(); //学習リスト画面表示
    // expect(screen.getByText("React")); //学習リスト内のクエリーで取得したデータがあるか
    userEvent.click(screen.getByText("更新情報")); //更新情報クリックで表示変更

    userEvent.click(screen.getByTestId("addIcon")); //記録ボタンクリック
    expect(screen.getByText("記録追加")).toBeInTheDocument(); //モーダル表示
    userEvent.click(screen.getByTestId("addIcon")); //記録するボタンクリック
    expect(screen.getByText("学習リスト")).toBeInTheDocument(); //学習リスト画面に戻る
    expect(screen.getByText("記録追加")).toBeInTheDocument(); //モーダル表示
    userEvent.click(screen.getByText("キャンセル")); //キャンセルボタンクリック
    expect(screen.getByText("学習リスト")).toBeInTheDocument(); //学習リスト画面に戻る
  });

  // it("学習リストがないときに正しく表示されるか", () => {
  //   render(
  //     <MockedProvider mocks={mocks} addTypename={false}>
  //       <StackList />
  //     </MockedProvider>,
  //   );

  //   expect(screen.getByText("学習リスト")).toBeInTheDocument();
  //   expect(screen.getByText("React")).toBeInTheDocument();
  // });

  // it("学習リストがないときに正しく表示されるか", () => {
  //   const component = TestRenderer.create(
  //     <MockedProvider mocks={mocks} addTypename={false}>
  //       <StackList />
  //     </MockedProvider>,
  //   );

  //   const stackList = component.toJSON();
  //   expect(stackList.children).toContain("Error");
  //   expect(stackList.children).toContain("Loading...");
  // });
});
