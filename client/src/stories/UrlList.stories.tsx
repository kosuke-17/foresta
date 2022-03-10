import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { UrlList } from "../components/molucules/aboutMePublic/UrlList";

export default {
  component: UrlList,
} as ComponentMeta<typeof UrlList>;

export const Default: ComponentStoryObj<typeof UrlList> = {
  args: {
    urlData: [
      {
        url: "Default",
        urlName: "Default",
      },
    ],
  },
  storyName: "デフォルト",
};
