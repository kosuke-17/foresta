import { memo, FC } from "react";
import styled from "styled-components";
import { UnorderedList, ListItem } from "@chakra-ui/react";

import { TitleAndContent } from "../../atoms/AboutMePublic/TitleAndContent";

/**
 * その他のデータ.
 * @remarks - 業務外、資格、前職について
 */
export const OtherData: FC = memo(() => {
  //業務外テストデータ
  const outsideOfWorkData = [
    {
      name: "本を読んでいる",
      content: "ほげほげほげほげほげほげほげほげほげほげほげほげほげほげ",
    },
    {
      name: "毎日10分の学習",
      content: "ほげほげほげほげほげほげほげほげほげほげほげほげほげほげ",
    },
  ];

  //前職テストデータ
  const formerJob = {
    name: "業務名",
    content: "ほげほげほげほげほげほげほげほげほげほげほげほげほげほげ",
  };

  return (
    <>
      <_Title>業務外に取り組んでいること</_Title>
      {outsideOfWorkData.map((item) => (
        <div key={item.name}>
          <TitleAndContent title={item.name} content={item.content} />
        </div>
      ))}

      <_Title>資格</_Title>
      <UnorderedList listStyleType="none" ml={5}>
        <ListItem>ITパスポート(00年0月)</ListItem>
        <ListItem>基本情報技術者試験(00年0月)</ListItem>
        <ListItem>色彩検定1級(00年0月)</ListItem>
      </UnorderedList>
      <div>
        <_Title>前職</_Title>
        <TitleAndContent title={formerJob.name} content={formerJob.content} />
      </div>
    </>
  );
});

//項目タイトル
const _Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin: 40px 0px 10px 0px;
`;
