import { memo, FC } from "react";
import styled from "styled-components";
import {
  Text,
  Button,
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { Private } from "../../components/organisms/aboutMe/Private";

export const AboutMe: FC = memo(() => {
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
      <Private />
    </>
  );
});

const _Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin: 60px 0px 10px 0px;
`;

const _ItemTitle = styled.div`
  font-size: 20px;
  width: 200px;
`;

const _Item = styled.div`
  font-size: 20px;
  width: 500px;
`;
