import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { todoMocks } from "../../../__mocks__/Todos";
import { TodosArea } from "../../components/organisms/study/TodosArea";

export default {
  component: TodosArea,
} as ComponentMeta<typeof TodosArea>;

export const Default: ComponentStoryObj<typeof TodosArea> = {
  storyName: "デフォルト",
  parameters: {
    apolloClient: {
      mocks: todoMocks,
      addTypename: false,
    },
  },
};
