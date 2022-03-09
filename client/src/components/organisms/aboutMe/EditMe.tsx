import { memo, FC, SetStateAction, Dispatch } from "react";
import { UserInfo } from "../../molucules/editMe/UserInfo";

type Props = {
  menuItem: string; //メニューで何を選んだか
  setMenuItem: Dispatch<SetStateAction<string>>; //menuItemセット用
  onClose: () => void; //モーダルを閉じるメソッド
};

/**
 * EditMe.
 */
export const EditMe: FC<Props> = memo(({ menuItem, setMenuItem, onClose }) => {
  return (
    <>
      {menuItem === "ユーザ情報" && (
        <UserInfo setMenuItem={setMenuItem} onClose={onClose} />
      )}
    </>
  );
});
