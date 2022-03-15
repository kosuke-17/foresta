import { memo, FC, Dispatch, SetStateAction } from "react";
import { Button, Spinner, Flex } from "@chakra-ui/react";
import { useCookies } from "react-cookie";

import { SelectInput } from "../../atoms/editMe/SelectInput";
import { TextInput } from "../../atoms/editMe/TextInput";
import { useUserUrls } from "../../../hooks/editMe/useUserUrls";
import { useGetUrlByIdQuery } from "../../../types/generated/graphql";

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

  const { data, loading, error } = useGetUrlByIdQuery({
    variables: {
      id: cookies.ForestaID,
    },
  });
  console.dir(JSON.stringify(data?.urls.node.userUrls.user_urls));

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
