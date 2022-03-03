import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { UserInfoTable } from "../components/molucules/aboutMePublic/UserInfoTable";

export default {
  component: UserInfoTable,
} as ComponentMeta<typeof UserInfoTable>;

export const Default: ComponentStoryObj<typeof UserInfoTable> = {
  storyName: "デフォルト",
};
