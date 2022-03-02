import { FC } from "react";
import { ModalSet } from "../../components/molucules/ModalSet";
export const Test: FC = () => {
  return (
    <>
      <ModalSet
        openBtnName="モーダルを開ける"
        modalTitle="タイトル"
        contents="モーダルの中身"
        actionBtnName1="アクション"
      />
    </>
  );
};
