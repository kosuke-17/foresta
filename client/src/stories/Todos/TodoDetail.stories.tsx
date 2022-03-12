import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { GetTodoByIdDocument } from "../../types/generated/graphql";

import { TodoDetail } from "../../components/organisms/study/TodoDetail";

export default {
  component: TodoDetail,
} as ComponentMeta<typeof TodoDetail>;

export const Default: ComponentStoryObj<typeof TodoDetail> = {
  args: {
    todoId: "dummy",
    isOpen: true,
    onClose: action("onClose"),
  },
  parameters: {
    apolloClient: {
      mocks: [
        {
          request: {
            query: GetTodoByIdDocument,
            variables: {
              todoId: "dummy",
            },
          },
          result: {
            data: {
              todo: {
                __typename: "Todo",
                id: "Todo1Id",
                title: "Todo1",
                description: "Todo1のメモです",
                startedAt: "2022-03-10",
                finishedAt: "2022-03-12",
                isStatus: false,
              },
            },
          },
        },
      ],
    },
  },
  storyName: "デフォルト",
};

export const LongTitle: ComponentStoryObj<typeof TodoDetail> = {
  ...Default,
  parameters: {
    apolloClient: {
      mocks: [
        {
          request: {
            query: GetTodoByIdDocument,
            variables: {
              todoId: "dummy",
            },
          },
          result: {
            data: {
              todo: {
                __typename: "Todo",
                id: "Todo1Id",
                title:
                  "長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル",
                description: "メモです\nメモです",
                startedAt: "2022-03-10",
                finishedAt: "2022-03-12",
                isStatus: false,
              },
            },
          },
        },
      ],
    },
  },
  storyName: "長いタイトル",
};

export const WithoutMemo: ComponentStoryObj<typeof TodoDetail> = {
  ...Default,
  parameters: {
    apolloClient: {
      mocks: [
        {
          request: {
            query: GetTodoByIdDocument,
            variables: {
              todoId: "dummy",
            },
          },
          result: {
            data: {
              todo: {
                __typename: "Todo",
                id: "Todo1Id",
                title:
                  "Todo2",
                description: null,
                startedAt: "2022-03-10",
                finishedAt: null,
                isStatus: false,
              },
            },
          },
        },
      ],
    },
  },
  storyName: "メモなし",
};
