import { memo, FC } from "react";
import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

import { SiteImage } from "../../atoms/aboutMePublic/SiteImage";
import { TableFlexItem } from "../../atoms/TableFlexItem";
import { PortfolioType } from "../../../types/types";

// 自動生成したPortfolioの型から使用したいプロパティ名だけを指定
type Props = {
  siteItem?: PortfolioType;
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
          <_SiteImage href={siteItem.portfolioURL} target="_brank">
            <SiteImage imageUrl={siteItem.img} />
          </_SiteImage>
          {siteItem.skills.length != 0 && (
            <Flex justifyContent="center" my={2}>
              使用スキル:
              <TableFlexItem itemArray={siteItem.skills} />
            </Flex>
          )}
          URL:
          <a href={siteItem.portfolioURL} target="_brank">
            {siteItem.portfolioURL}
          </a>
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
  outline: none;
`;
