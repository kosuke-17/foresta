import { memo, FC, Dispatch, SetStateAction, useCallback } from "react";
import { Spinner, Flex, useToast } from "@chakra-ui/react";
import { useCookies } from "react-cookie";

import { useUpdateSpreadTechInfoMutation } from "../../../../types/generated/graphql";
import { ButtonItem } from "../../../atoms/ButtonItem";

type Props = {
  setMenuItem: Dispatch<SetStateAction<string>>; //menuItemセット用
  onClose: () => void; //モーダルを閉じるメソッド
};

/**
 * スプレッドシートにスキル要約を出力.
 */
export const SpreadTech: FC<Props> = memo(({ onClose, setMenuItem }) => {
  //cookieからID取得
  const [cookies] = useCookies();

  //トーストの使用
  const toast = useToast();

  /**
   * リセットボタン.
   */
  const cancel = useCallback(() => {
    setMenuItem("");
    onClose();
  }, [onClose, setMenuItem]);

  /**
   * スプレッドシートにスキル要約を出力.
   */
  const [updateSpreadTechInfoMutation, { loading, error }] =
    useUpdateSpreadTechInfoMutation({
      variables: {
        userId: cookies.ForestaID,
      },
    });

  /**
   * ボタンを押した際に呼ばれる.
   */
  const outputSheet = useCallback(async () => {
    try {
      await updateSpreadTechInfoMutation();
      toast({
        title: "出力しました",
        status: "success",
        isClosable: true,
      });
      cancel();
    } catch (e) {
      console.log(e);
    }
  }, [cancel, toast, updateSpreadTechInfoMutation]);

  //読み込み中時の表示
  if (loading) {
    return (
      <>
        書き出し中…
        <Flex justifyContent="center">
          <Spinner color="green.400" />
        </Flex>
      </>
    );
  }
  //エラー時の表示
  if (error) {
    return <Flex justifyContent="center">Error</Flex>;
  }

  return (
    <>
      <Flex gap={3} justifyContent="center">
        <ButtonItem name="はい" onClick={outputSheet} />
        <ButtonItem name="キャンセル" onClick={cancel} />
      </Flex>
    </>
  );
});
