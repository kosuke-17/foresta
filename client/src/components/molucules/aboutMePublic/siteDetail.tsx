import { memo, FC } from "react";
import { SiteImage } from "../../atoms/AboutMePublic/SiteImage";
import styled from "styled-components";
import { TableFlexItem } from "../../atoms/TableFlexItem";
import { Flex } from "@chakra-ui/react";
import { Portfolio } from "../../../types/generated/graphql";

// 自動生成したPortfolioの型から使用したいプロパティ名だけを指定
type Props = {
  siteItem?: Pick<Portfolio, "title" | "description" | "img" | "portfolioURL">;
};

/**
 * 制作物詳細画面.
 */
export const SiteDetail: FC<Props> = memo(({ siteItem }) => {
  return (
    <>
      {siteItem && (
        <>
          <div>{siteItem.description}</div>
          <_SiteImage href={siteItem.portfolioURL}>
            <SiteImage imageUrl={siteItem.img} />
          </_SiteImage>
          <Flex justifyContent="center" my={2}>
            使用スキル:
            <TableFlexItem itemArray={["ほげほげ", "ほげほげ", "ほげほげ"]} />
          </Flex>
          URL:<a href={siteItem.portfolioURL}>{siteItem.portfolioURL}</a>
        </>
      )}
    </>
  );
});

//サイト画像を中央に持ってくるCSS
const _SiteImage = styled.a`
  display: flex;
  justify-content: center;
  :focus {
    box-shadow: "none";
  }
`;
