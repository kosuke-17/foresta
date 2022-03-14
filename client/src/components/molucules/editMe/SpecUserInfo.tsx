import { memo, FC, Dispatch, SetStateAction } from "react";
import { useCookies } from "react-cookie";
import { Button } from "@chakra-ui/react";

import { SelectInput } from "../../atoms/editMe/SelectInput";
import { TextInput } from "../../atoms/editMe/TextInput";
import { useSpecUserInfo } from "../../../hooks/editMe/useSpecUserInfo";

type Props = {
  setMenuItem: Dispatch<SetStateAction<string>>; //menuItemセット用
  onClose: () => void; //モーダルを閉じるメソッド
};

/**
 * スペックシート部分基本情報編集画面.
 * @remarks スタッフID, 年齢, 性別, 最寄駅, 稼働開始日, エンジニア歴(SE,PG), IT全体歴
 */
export const SpecUserInfo: FC<Props> = memo(({ setMenuItem, onClose }) => {
  //cookieからID取得
  const [cookies] = useCookies();
  return (
    <>
      <Button type="button" onClick={onClose} _focus={{ boxShadow: "none" }}>
        キャンセル
      </Button>
    </>
  );
});
