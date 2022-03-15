import { memo, FC, Dispatch, SetStateAction } from "react";
import { useCookies } from "react-cookie";
import { Button, Spinner, Flex } from "@chakra-ui/react";

import { SelectInput } from "../../atoms/editMe/SelectInput";
import { TextInput } from "../../atoms/editMe/TextInput";
import { useSpecSheet } from "../../../hooks/editMe/useSpecSheet";
import { useGetPrAndSheetByUserIdQuery } from "../../../types/generated/graphql";

type Props = {
  setMenuItem: Dispatch<SetStateAction<string>>; //menuItemセット用
  onClose: () => void; //モーダルを閉じるメソッド
};

/**
 * スペックシート基本情報以外編集画面.
 * @remarks 自己PR、業務外、資格、前職
 */
export const SpecSheet: FC<Props> = memo(({ setMenuItem, onClose }) => {
  //cookieからID取得
  const [cookies] = useCookies();

  const { data, loading, error } = useGetPrAndSheetByUserIdQuery({
    variables: {
      userId: cookies.ForestaID,
    },
  });
  console.dir("業務外:" + JSON.stringify(data?.other.node.studyOnOwnTime));
  console.dir("前職:" + JSON.stringify(data?.other.node.prevJobs));
  console.dir("資格:" + JSON.stringify(data?.other.node.certification));
  console.dir("PR:" + JSON.stringify(data?.pr.node.selfIntro));

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
