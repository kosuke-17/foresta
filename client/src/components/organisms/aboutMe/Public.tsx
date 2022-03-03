import { memo, FC } from "react";
import { Button, Box } from "@chakra-ui/react";

export const Public: FC = memo(() => {
  /**
   * AboutMeパブリックゾーン.
   */
  return (
    <>
      <Box background={"green.100"} m={10} p={20} rounded={20} boxShadow="md">
        <div>氏名:山田太郎</div>
        <div>フロントエンドエンジニア</div>
        <div>
          <Button colorScheme="teal" size="sm">
            このユーザの学習記録
          </Button>
        </div>
        <div>
          <Button colorScheme="teal" size="sm">
            GitHubアカウント
          </Button>
        </div>
        <div>技術進捗ツリーチェック項目</div>
        <div>制作物一覧</div>
        <div>ほげほげサイト</div>
        <div>ほげほげサイト</div>
        <div>ほげほげサイト</div>
        <div>
          <div>■その他URL</div>
          <div>ほげほげ</div>
          <div>hogehoge.com</div>
        </div>
      </Box>
    </>
  );
});
