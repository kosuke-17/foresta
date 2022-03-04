import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { TextBox } from "../components/molucules/aboutMePrivate/TextBox";

export default {
  component: TextBox,
} as ComponentMeta<typeof TextBox>;

export const Default: ComponentStoryObj<typeof TextBox> = {
  storyName: "デフォルト",
};
