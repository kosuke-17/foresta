import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { TechLeafComp } from "../../components/atoms/techForest/TechLeafComp";

export default {
  component: TechLeafComp,
} as ComponentMeta<typeof TechLeafComp>;

export const CheakedLeaf: ComponentStoryObj<typeof TechLeafComp> = {
  storyName: "未習得の技術",
  args: {
    treeData: "",
    techLeafTextData: "useState",
    techLeafStatus: false,
    indexOfTreeData: 0,
    indexOfBranchData: 0,
    indexOfLeafData: 0,
  },
};

export const UnCheakedLeaf: ComponentStoryObj<typeof TechLeafComp> = {
  storyName: "習得済みの技術",
  args: {
    treeData: "",
    techLeafTextData: "useState",
    techLeafStatus: true,
    indexOfTreeData: 0,
    indexOfBranchData: 0,
    indexOfLeafData: 0,
  },
};
