import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ButtonItem } from "../components/atoms/ButtonItem";

/**
 * ボタンコンポーネント.
 */
export default {
  component: ButtonItem,
} as ComponentMeta<typeof ButtonItem>;

export const Default: ComponentStoryObj<typeof ButtonItem> = {
  args: {
    onClick: () => {
      console.log("クリック");
    },
    name: "Default",
  },
  storyName: "デフォルト",
};
