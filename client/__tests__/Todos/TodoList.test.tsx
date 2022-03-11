/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { composeStories } from "@storybook/testing-react";
// import userEvent from "@testing-library/user-event";

import * as stories from "../../src/stories/todos/TodoList.stories";

// composeStories関数は、セットアップされた Story をそのまま jest で再利用（render）可能にする合成関数
const { Default, NoTodo, Loading, Error } = composeStories(stories);

describe("Todoリストのテスト", () => {
  it("見出しやタブがきちんと表示されるか", () => {
    render(<Default />);
    expect(screen.getByText("Todoリスト")).toBeInTheDocument();
    expect(screen.getByText("全て")).toBeInTheDocument();
    expect(screen.getByText("今日")).toBeInTheDocument();
    expect(screen.getByText("期限切れ")).toBeInTheDocument();
  });

  it("Todoがない時の表示が適切に表示されるか", () => {
    render(<NoTodo />);
    expect(screen.getByText("Todoリスト")).toBeInTheDocument();
    expect(screen.getByText("該当のTodoが存在しません")).toBeInTheDocument();
  });

  it("ローディング中の表示が適切になされるか", () => {
    render(<Loading />);
    expect(screen.getByText("Todoリスト")).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("エラー発生時の表示が適切になされるか", () => {
    render(<Error />);
    expect(screen.getByText("Todoリスト")).toBeInTheDocument();
    expect(screen.getByText("エラーが発生しました")).toBeInTheDocument();
  });
});
