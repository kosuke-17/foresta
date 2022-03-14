import { memo, FC, Dispatch, SetStateAction } from "react";
import { useCookies } from "react-cookie";
import { Button, Spinner, Flex } from "@chakra-ui/react";

import { SelectInput } from "../../atoms/editMe/SelectInput";
import { TextInput } from "../../atoms/editMe/TextInput";
import { useSpecTechInfo } from "../../../hooks/editMe/useSpecTechInfo";
import { useGetSheetSkillByUserIdQuery } from "../../../types/generated/graphql";

type Props = {
  setMenuItem: Dispatch<SetStateAction<string>>; //menuItemセット用
  onClose: () => void; //モーダルを閉じるメソッド
};

/**
 * スペックシートスキル要約編集画面.
 * @remarks OS、言語、フレームワーク、ライブラリ、ツール、役割
 */
export const SpecTechInfo: FC<Props> = memo(({ setMenuItem, onClose }) => {
  //cookieからID取得
  const [cookies] = useCookies();
  const { data, loading, error } = useGetSheetSkillByUserIdQuery({
    variables: {
      userId: cookies.ForestaID,
    },
  });

  console.dir("OS:" + JSON.stringify(data?.skills.node.techInfo.operationEnvs));
  console.dir("言語:" + JSON.stringify(data?.skills.node.techInfo.languages));
  console.dir(
    "フレームワーク:" + JSON.stringify(data?.skills.node.techInfo.frameworks),
  );
  console.dir(
    "ライブラリ:" + JSON.stringify(data?.skills.node.techInfo.libraries),
  );
  console.dir(
    "その他ツール:" + JSON.stringify(data?.skills.node.techInfo.otherTools),
  );
  console.dir("役割:" + JSON.stringify(data?.skills.node.techInfo.devRoles));
  console.dir(
    "スペックシートID:" +
      JSON.stringify(data?.skills.node.techInfo.specSheetId),
  );

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
