/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { composeStories } from "@storybook/testing-react";
// import userEvent from "@testing-library/user-event";

import * as stories from "../../src/stories/todos/TodoWithCheck.stories";

// composeStories関数は、セットアップされた Story をそのまま jest で再利用（render）可能にする合成関数
const { CompletedTodo, NoCompletedTodo, MultipleDaysTodo } =
  composeStories(stories);

// 完了済みか未完了か
// 1日のタスクか複数日に渡るタスクか

describe("チェックボックス付きTodoのテスト", () => {
  it("Todoのタイトルと日付が表示されるかどうか", () => {
    render(<CompletedTodo />);
    expect(screen.getByText("Todoタイトル")).toBeInTheDocument();
    expect(screen.getByText("2022/03/10")).toBeInTheDocument();
  });

  it("完了済みの場合にきちんとチェックがついているかどうか", () => {
    render(<CompletedTodo />);
    expect(screen.getByText("Todoタイトル")).toBeInTheDocument();
    expect(screen.getByText("2022/03/10")).toBeInTheDocument();

    // チェックボックスを取得
    const checkbox = screen.getByRole("checkbox");
    // チェックボックスがチェックされているかチェック
    expect(checkbox).toBeChecked();
  });

  it("未完了のTodoが適切に表示されるかどうか(1日のタスク)", () => {
    render(<NoCompletedTodo />);

    // チェックボックスを取得
    const checkbox = screen.getByRole("checkbox");
    // チェックボックスがチェックされてないことをチェック
    expect(checkbox).not.toBeChecked();
  });

  it("複数日に渡るTodoの日付が適切に表示されるかどうか", () => {
    render(<MultipleDaysTodo />);
    expect(screen.getByText("2022/03/10-03/15")).toBeInTheDocument();
  });

  // ↓完了/未完了の更新処理を実装したらテスト

  // it("チェックボックスを押すと完了/未完了が適切に切り替わるかどうか", () => {
  //   render(<CompletedTodo />);
  //   // チェックボックスを取得
  //   const checkbox = screen.getByRole("checkbox");
  //   // チェックボックスがチェックされてることをチェック
  //   expect(checkbox).toBeChecked();
  //   // チェックボックスをクリック
  //   userEvent.click(checkbox);
  //   // チェックボックスがチェックされていないことをチェック
  //   expect(checkbox).not.toBeChecked();
  // });
});
