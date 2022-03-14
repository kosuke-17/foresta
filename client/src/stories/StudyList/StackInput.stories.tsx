import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { StackInput } from "../../components/atoms/study/StackInput";

export default {
  component: StackInput,
} as ComponentMeta<typeof StackInput>;

export const InputCreatedAt: ComponentStoryObj<typeof StackInput> = {
  args: {
    label: "日付",
    placeholder: "日付",
    type: "date",
    errorMessage: "エラーメッセージ",
  },
  storyName: "学習日",
};
export const InputSkillTagId: ComponentStoryObj<typeof StackInput> = {
  args: {
    label: "技術",
    placeholder: "技術",
    type: "text",
    errorMessage: "エラーメッセージ",
  },
  storyName: "学習技術",
};
export const InputTimeStackt: ComponentStoryObj<typeof StackInput> = {
  args: {
    label: "学習時間",
    placeholder: "学習時間",
    type: "number",
    errorMessage: "エラーメッセージ",
  },
  storyName: "学習時間",
};
