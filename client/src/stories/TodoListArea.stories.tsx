import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { TodoListArea } from "../components/organisms/study/TodoListArea";

export default {
  component: TodoListArea,
} as ComponentMeta<typeof TodoListArea>;

export const Default: ComponentStoryObj<typeof TodoListArea> = {
  storyName: "デフォルト",
};
