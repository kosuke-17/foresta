import { memo, FC, Dispatch, SetStateAction } from "react";
import { Button } from "@chakra-ui/react";
import { useCookies } from "react-cookie";

import { SelectInput } from "../../atoms/editMe/SelectInput";
import { TextInput } from "../../atoms/editMe/TextInput";
import { useUserUrls } from "../../../hooks/editMe/useUserUrls";

type Props = {
  setMenuItem: Dispatch<SetStateAction<string>>; //menuItemセット用
  onClose: () => void; //モーダルを閉じるメソッド
};

/**
 * public部分URL編集画面.
 * @remarks title, url
 */
export const UserUrls: FC<Props> = memo(({ setMenuItem, onClose }) => {
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
