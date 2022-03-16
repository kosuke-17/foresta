import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { TodoList } from "../../components/organisms/study/TodoList";
import { ApolloError } from "@apollo/client";

export default {
  component: TodoList,
} as ComponentMeta<typeof TodoList>;

export const Default: ComponentStoryObj<typeof TodoList> = {
  args: {
    todos: [
      {
        id: "Todo1Id",
        title: "Todo1",
        startedAt: "2022-03-10",
        finishedAt: "2022-03-12",
        isStatus: false,
      },
      {
        id: "Todo2Id",
        title: "Todo2",
        startedAt: "2022-03-15",
        finishedAt: "2022-03-16",
        isStatus: true,
      },
      {
        id: "Todo3Id",
        title: "Todo3",
        startedAt: "2021-03-15",
        finishedAt: null,
        isStatus: false,
      },
      {
        id: "Todo4Id",
        title:
          "長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル",
        startedAt: "2022-03-15",
        finishedAt: null,
        isStatus: true,
      },
      {
        id: "Todo5Id",
        title:
          "長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル",
        startedAt: "2022-03-15",
        finishedAt: "2022-03-17",
        isStatus: true,
      },
    ],
    loading: false,
    error: undefined,
    openReadModal: action("openReadModal"),
  },
  storyName: "デフォルト",
};

export const NoTodo: ComponentStoryObj<typeof TodoList> = {
  args: {
    ...Default.args,
    todos: [],
  },
  storyName: "Todoがない時",
};

export const Loading: ComponentStoryObj<typeof TodoList> = {
  args: {
    ...Default.args,
    todos: [],
    loading: true,
  },
  storyName: "ローディング中",
};

export const Error: ComponentStoryObj<typeof TodoList> = {
  args: {
    ...Default.args,
    todos: [],
    error: new ApolloError({}),
  },
  storyName: "エラー発生時",
};
