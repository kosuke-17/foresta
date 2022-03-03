import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ModalSet } from "../components/molucules/ModalSet";

export default {
  component: ModalSet,
} as ComponentMeta<typeof ModalSet>;

export const Default: ComponentStoryObj<typeof ModalSet> = {
  args: {
    openBtnName: "Default",
    modalTitle: "Default",
    contents: "Default",
    actionBtnArray: [
      { name: "DefaultAction", action: () => alert("DefaultAction") },
    ],
  },
  storyName: "デフォルト",
};

export const noneTitle: ComponentStoryObj<typeof ModalSet> = {
  args: {
    openBtnName: "noneTitle",
    contents: "noneTitle",
    actionBtnArray: [
      { name: "noneTitle", action: () => alert("noneTitleAction") },
    ],
  },
  storyName: "モーダルタイトルなしの場合",
};

export const manyAction: ComponentStoryObj<typeof ModalSet> = {
  args: {
    openBtnName: "manyAction",
    modalTitle: "manyAction",
    contents: "manyAction",
    actionBtnArray: [
      { name: "Action1", action: () => alert("Action1") },
      { name: "Action2", action: () => alert("Action2") },
      { name: "Action3", action: () => alert("Action3") },
      { name: "Action4", action: () => alert("Action4") },
    ],
  },
  storyName: "メソッドボタンが複数ある場合",
};

export const noneAction: ComponentStoryObj<typeof ModalSet> = {
  args: {
    openBtnName: "noneAction",
    modalTitle: "noneAction",
    contents: "noneAction",
  },
  storyName: "メソッドボタンがない場合",
};

export const changeBtnName: ComponentStoryObj<typeof ModalSet> = {
  args: {
    openBtnName: "changeBtnName",
    openBtnColor: "red.500",
    openBtnTextColor: "white",
    modalTitle: "changeBtnName",
    contents: "changeBtnName",
    actionBtnArray: [{ name: "はい", action: () => alert("Action1") }],
    closeBtnName: "いいえ",
  },
  storyName: "ボタンの名前、色を変更",
};
