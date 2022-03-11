import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { SiteImageBox } from "../../components/molucules/aboutMePublic/SiteImageBox";

export default {
  component: SiteImageBox,
} as ComponentMeta<typeof SiteImageBox>;

export const Default: ComponentStoryObj<typeof SiteImageBox> = {
  args: {
    siteData: [
      {
        title: "Default",
        description: "Default",
        img: "Default.jpg",
        portfolioURL: "Default",
      },
    ],
  },
  storyName: "デフォルト",
};
