/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { GetAllStudyStackDocument } from "../src/types/generated/graphql";
import { StackList } from "../src/components/organisms/study/StackList";
import { MockedProvider } from "@apollo/react-testing";
import userEvent from "@testing-library/user-event";

const mocks = [
  {
    request: {
      query: GetAllStudyStackDocument,
    },
    result: {
      data: {
        stacks: [
          {
            id: "1",
            createdAt: "2022-02-02",
            skillTagId: "React",
            timeStack: 180,
            content: "理解した",
            userId: "2",
          },
          {
            id: "2",
            createdAt: "2022-02-04",
            skillTagId: "Vue",
            timeStack: 200,
            content: "わかった",
            userId: "3",
          },
        ],
      },
    },
  },
];

describe("学習リスト画面表示", () => {
  it("学習リスト画面が表示されるか", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <StackList />
      </MockedProvider>,
    );

    expect(screen.getByText("学習リスト")).toBeInTheDocument(); //学習リスト画面表示
    userEvent.click(screen.getByText("更新情報")); //更新情報クリックで表示変更
    userEvent.click(screen.getByText("記録")); //記録ボタンクリック
    expect(screen.getByText("記録追加")).toBeInTheDocument(); //モーダル表示
    userEvent.click(screen.getByText("記録する")); //記録するボタンクリック
    expect(screen.getByText("学習リスト")).toBeInTheDocument(); //学習リスト画面に戻る
    expect(screen.getByText("記録追加")).toBeInTheDocument(); //モーダル表示
    userEvent.click(screen.getByText("キャンセル")); //キャンセルボタンクリック
    expect(screen.getByText("学習リスト")).toBeInTheDocument(); //学習リスト画面に戻る
  });
});
