import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { LogListTable } from "../../components/molucules/stackList/LogListTable";

export default {
  component: LogListTable,
} as ComponentMeta<typeof LogListTable>;

export const Template: ComponentStoryObj<typeof LogListTable> = {
  storyName: "更新情報",
};
