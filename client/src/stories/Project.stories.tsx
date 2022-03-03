import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Project } from "../components/molucules/aboutMePublic/Project";

export default {
  component: Project,
} as ComponentMeta<typeof Project>;

export const Default: ComponentStoryObj<typeof Project> = {
  storyName: "デフォルト",
};
