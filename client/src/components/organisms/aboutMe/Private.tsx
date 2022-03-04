import { memo, FC, useState } from "react";
import { Box } from "@chakra-ui/react";
import styled from "styled-components";

import { AccordionContent } from "../../molucules/aboutMePrivate/AccordionContent";
import { UserInfoTable } from "../../molucules/aboutMePrivate/UserInfoTable";
import { SkillTable } from "../../molucules/aboutMePrivate/SkillTable";
import { OtherData } from "../../molucules/aboutMePrivate/OtherData";
import { Project } from "../../molucules/aboutMePrivate/Project";
import { TextBox } from "../../molucules/aboutMePrivate/TextBox";

/**
 * AboutMeプライベート(スペックシート)ゾーン.
 */
export const Private: FC = memo(() => {
  //多分本番はタイトルだけじゃなくてプロジェクトデータを回す
  const [projects] = useState<Array<string>>([
    "プロジェクト1",
    "プロジェクト2",
    "プロジェクト3",
  ]);

  //アコーディオンに渡すデータ
  const propsDataArray = [
    { title: "基本情報", content: <UserInfoTable />, size: "lg" },
    { title: "スキル要約", content: <SkillTable />, size: "lg" },
    { title: "自己PR・前職経験", content: <TextBox />, size: "lg" },
    { title: "その他", content: <OtherData />, size: "lg" },
  ];

  return (
    <>
      <Box background={"white.50"} m={10} p={20} rounded={20}>
        {propsDataArray.map((propsData) => (
          <div key={propsData.title}>
            <AccordionContent {...propsData} />
          </div>
        ))}

        <_Title>開発経験</_Title>
        {projects.map((title) => (
          <div key={title}>
            <AccordionContent title={title} content={<Project />} size="sm" />
          </div>
        ))}
      </Box>
    </>
  );
});

//項目名
const _Title = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin: 60px 0px 10px 0px;
`;
