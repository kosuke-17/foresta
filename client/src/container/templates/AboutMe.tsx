import { memo, FC } from "react";
import styled from "styled-components";
import { Button, Box } from "@chakra-ui/react";
import { getStoreKeyName } from "@apollo/client/utilities";

export const AboutMe: FC = memo(() => {
  return (
    <>
      <Box background={"white"} m={10} p={20} rounded={20}>
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
      <Box background={"green.50"} m={10} p={20} boxShadow="md" rounded={20}>
        <div>基本情報</div>
        <div>スタッフID</div>
        <div>年齢</div>
        <div>性別</div>
        <div>最寄駅</div>
        <div>稼働開始日</div>
        <div>エンジニア歴</div>
        <div>IT全体経験</div>

        <div>スキル要約</div>
        <div>動作環境(OS)</div>
        <div>言語</div>
        <div>フレームワーク</div>
        <div>ライブラリ</div>
        <div>ツール・その他</div>
        <div>担当開発工程</div>
        <div>自己PR・前職経験</div>
        <div>業務外に取り組んでいること</div>
        <div>資格</div>
        <div>前職</div>
        <div>開発経験</div>
        <div>プロジェクト名</div>
        <div>期間</div>
        <div>担当役割</div>
        <div>チーム人数</div>
        <div>動作環境(OS)</div>
        <div>言語</div>
        <div>フレームワーク</div>
        <div>ライブラリ</div>
        <div>ツール・その他</div>
        <div>プロジェクト詳細</div>
      </Box>
    </>
  );
});
