import { FC } from "react";
import { Private } from "../../components/organisms/aboutMe/Private";
import { Public } from "../../components/organisms/aboutMe/Public";
import { ModalSet } from "../../components/molucules/ModalSet";

export const AboutMe: FC = () => {
  const testAction1 = () => {
    alert("ボタン1が押された");
  };
  const testAction2 = () => {
    alert("ボタン2が押された");
  };
  const testArray = [
    { name: "test1", action: testAction1 },
    { name: "test2", action: testAction2 },
  ];

  return (
    <>
      <ModalSet
        openBtnName="テストボタン"
        contents="あああ"
        actionBtnArray={testArray}
      />
      <Public />
      <Private />
    </>
  );
};
