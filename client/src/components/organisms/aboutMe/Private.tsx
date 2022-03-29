import { memo, FC } from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import styled from "styled-components";

import { AccordionContent } from "../../molucules/AccordionContent";
import { UserInfoTable } from "../../molucules/aboutMePrivate/UserInfoTable";
import { SkillTable } from "../../molucules/aboutMePrivate/SkillTable";
import { OtherData } from "../../molucules/aboutMePrivate/OtherData";
import { Project } from "../../molucules/aboutMePrivate/Project";
import { SpecPr } from "../../molucules/aboutMePrivate/SpecPr";
import { Heading } from "../../atoms/common/Heading";
import { SpreadMenuBar } from "./SpreadMenuBar";
import { ShadowFrame } from "../../atoms/common/ShadowFrame";

/**
 * AboutMeプライベート(スペックシート)ゾーン.
 */
export const Private: FC = memo(() => {
  //アコーディオンに渡すデータ
  const propsDataArray = [
    { title: "基本情報", content: <UserInfoTable />, size: "lg" },
    { title: "スキル要約", content: <SkillTable />, size: "lg" },
    { title: "自己PR・前職経験", content: <SpecPr />, size: "lg" },
    { title: "その他", content: <OtherData />, size: "lg" },
  ];

  return (
    <>
      <Flex m={10}>
        <Heading text={"SpecSheet"} />
        <Spacer />
        <SpreadMenuBar />
      </Flex>
      <ShadowFrame margin={10} padding={10}>
        {propsDataArray.map((propsData) => (
          <div key={propsData.title}>
            <AccordionContent {...propsData} />
          </div>
        ))}

        <_Title>開発経験</_Title>
        <Project />
      </ShadowFrame>
    </>
  );
});

//項目名
const _Title = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin: 60px 0px 10px 0px;
`;
