import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { StudyListTable } from "../../components/molucules/stackList/StudyListTable";

export default {
  component: StudyListTable,
} as ComponentMeta<typeof StudyListTable>;

export const Template: ComponentStoryObj<typeof StudyListTable> = {
  storyName: "学習リスト",
};
