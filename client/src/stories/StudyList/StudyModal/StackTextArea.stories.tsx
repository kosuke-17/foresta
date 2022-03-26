import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { StackTextarea } from "../../../components/atoms/study/StackTextarea";

export default {
  component: StackTextarea,
} as ComponentMeta<typeof StackTextarea>;

export const TextAreaContent: ComponentStoryObj<typeof StackTextarea> = {
  args: {
    label: "メモ",
    placeholder: "メモ",
    type: "text",
    errorMessage: "エラーメッセージ",
  },
  storyName: "メモ",
};
