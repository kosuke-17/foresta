import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { TodoWithCheck } from "../../components/molucules/todos/TodoWithCheck";

export default {
  component: TodoWithCheck,
} as ComponentMeta<typeof TodoWithCheck>;

// 完了済みか未完了か
// 1日のタスクか複数日に渡るタスクか

export const CompletedTodo: ComponentStoryObj<typeof TodoWithCheck> = {
  args: {
    id: "TodoId",
    title: "Todoタイトル",
    startedAt: "2022-03-10",
    finishedAt: null,
    isStatus: true,
    onOpen: action("onOpen"),
    setTodoId: action("setTodoId"),
  },
  storyName: "完了済みタスク",
};

export const NoCompletedTodo: ComponentStoryObj<typeof TodoWithCheck> = {
  args: {
    id: "TodoId",
    title: "Todoタイトル",
    startedAt: "2022-03-10",
    finishedAt: null,
    isStatus: false,
    onOpen: action("onOpen"),
    setTodoId: action("setTodoId"),
  },
  storyName: "未完了タスク",
};

export const MultipleDaysTodo: ComponentStoryObj<typeof TodoWithCheck> = {
  args: {
    id: "TodoId",
    title: "Todoタイトル(複数日)",
    startedAt: "2022-03-10",
    finishedAt: "2022-03-15",
    isStatus: true,
    onOpen: action("onOpen"),
    setTodoId: action("setTodoId"),
  },
  storyName: "複数日のタスク",
};
