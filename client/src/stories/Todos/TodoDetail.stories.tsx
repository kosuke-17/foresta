import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { TodoModal } from "../../components/organisms/study/TodoModal";

export default {
  component: TodoModal,
} as ComponentMeta<typeof TodoModal>;

export const Default: ComponentStoryObj<typeof TodoModal> = {
  args: {
    isOpen: true,
    onClose: action("onClose"),
  },
  // parameters: {
  //   apolloClient: {
  //     mocks: [
  //       {
  //         request: {
  //           query: GetTodoByIdDocument,
  //           variables: {
  //             todoId: "dummy",
  //           },
  //         },
  //         result: {
  //           data: {
  //             todo: {
  //               __typename: "Todo",
  //               id: "Todo1Id",
  //               title: "Todo1",
  //               description: "Todo1のメモです",
  //               startedAt: "2022-03-10",
  //               finishedAt: "2022-03-12",
  //               isStatus: false,
  //             },
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // storyName: "デフォルト",
};

// export const LongTitle: ComponentStoryObj<typeof TodoDetail> = {
//   ...Default,
//   parameters: {
//     apolloClient: {
//       mocks: [
//         {
//           request: {
//             query: GetTodoByIdDocument,
//             variables: {
//               todoId: "dummy",
//             },
//           },
//           result: {
//             data: {
//               todo: {
//                 __typename: "Todo",
//                 id: "Todo1Id",
//                 title:
//                   "長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル",
//                 description: "メモです\nメモです",
//                 startedAt: "2022-03-10",
//                 finishedAt: "2022-03-12",
//                 isStatus: false,
//               },
//             },
//           },
//         },
//       ],
//     },
//   },
//   storyName: "長いタイトル",
// };

// export const WithoutMemo: ComponentStoryObj<typeof TodoDetail> = {
//   ...Default,
//   parameters: {
//     apolloClient: {
//       mocks: [
//         {
//           request: {
//             query: GetTodoByIdDocument,
//             variables: {
//               todoId: "dummy",
//             },
//           },
//           result: {
//             data: {
//               todo: {
//                 __typename: "Todo",
//                 id: "Todo1Id",
//                 title:
//                   "Todo2",
//                 description: null,
//                 startedAt: "2022-03-10",
//                 finishedAt: null,
//                 isStatus: false,
//               },
//             },
//           },
//         },
//       ],
//     },
//   },
//   storyName: "メモなし",
// };
