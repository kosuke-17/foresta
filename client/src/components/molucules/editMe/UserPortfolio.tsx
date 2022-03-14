import { memo, FC, Dispatch, SetStateAction } from "react";
import { Button } from "@chakra-ui/react";
import { useCookies } from "react-cookie";

import { SelectInput } from "../../atoms/editMe/SelectInput";
import { TextInput } from "../../atoms/editMe/TextInput";
import { useUserPortfolio } from "../../../hooks/editMe/useUserPortfolio";

type Props = {
  setMenuItem: Dispatch<SetStateAction<string>>; //menuItemセット用
  onClose: () => void; //モーダルを閉じるメソッド
};

/**
 * 制作物編集画面.
 * @remarks タイトル、詳細、画像、URL
 */
export const UserPortfolio: FC<Props> = memo(({ setMenuItem, onClose }) => {
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
