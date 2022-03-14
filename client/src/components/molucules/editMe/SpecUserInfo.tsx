import { memo, FC, Dispatch, SetStateAction } from "react";
import { useCookies } from "react-cookie";
import { Button, Spinner, Flex } from "@chakra-ui/react";

import { SelectInput } from "../../atoms/editMe/SelectInput";
import { TextInput } from "../../atoms/editMe/TextInput";
import { useSpecUserInfo } from "../../../hooks/editMe/useSpecUserInfo";
import { useGetSheetByUserIdQuery } from "../../../types/generated/graphql";

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

  const { data, loading, error } = useGetSheetByUserIdQuery({
    variables: {
      userId: cookies.ForestaID,
    },
  });
  console.dir(JSON.stringify(data?.user.node));

  //読み込み中時の表示
  if (loading) {
    return (
      <Flex justifyContent="center">
        <Spinner color="green.400" />
      </Flex>
    );
  }
  //エラー時の表示
  if (error) {
    return <Flex justifyContent="center">Error</Flex>;
  }
  return (
    <>
      <Button type="button" onClick={onClose} _focus={{ boxShadow: "none" }}>
        キャンセル
      </Button>
    </>
  );
});
