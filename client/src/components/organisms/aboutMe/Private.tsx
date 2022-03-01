import { memo, FC, useState } from "react";
import styled from "styled-components";
import { AccordionContent } from "../../molucules/aboutMePublic/AccordionContent";
import { UserInfoTable } from "../../molucules/aboutMePublic/UserInfoTable";
import { SkillTable } from "../../molucules/aboutMePublic/SkillTable";
import { Box } from "@chakra-ui/react";
import { OtherData } from "../../molucules/aboutMePublic/OtherData";
import { Project } from "../../molucules/aboutMePublic/Project";

export const Private: FC = memo(() => {
  //テストデータ
  const testData = useState("後で改行調整しなきゃ");

  //多分本番はタイトルだけじゃなくてプロジェクトデータを回す
  const [projects] = useState<Array<string>>([
    "プロジェクト1",
    "プロジェクト2",
    "プロジェクト3",
  ]);

  return (
    <>
      <Box background={"white.50"} m={10} p={20} rounded={20}>
        <AccordionContent title="基本情報" content={<UserInfoTable />} />
        <AccordionContent title="スキル要約" content={<SkillTable />} />
        <AccordionContent
          title="自己PR・前職経験"
          content={
            <Box ml={10} width={900}>
              {testData}
            </Box>
          }
        />
        <AccordionContent title="その他" content={<OtherData />} />

        <_Title>開発経験</_Title>
        {projects.map((title) => (
          <div key={title}>
            <AccordionContent title={title} content={<Project />} />
          </div>
        ))}
      </Box>
    </>
  );
});

const _Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin: 60px 0px 10px 0px;
`;
