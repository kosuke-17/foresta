import { memo, FC } from "react";
import { SiteType } from "../../../types/UserType";
import { SiteImage } from "../../atoms/AboutMePublic/SiteImage";
import styled from "styled-components";
import { TableFlexItem } from "../../atoms/TableFlexItem";
import { Flex } from "@chakra-ui/react";

type Props = {
  siteItem?: SiteType; //制作物のデータ
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
          <_SiteImage>
            <a href={siteItem.portfolioURL}>
              <SiteImage imageUrl={siteItem.img} />
            </a>
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
const _SiteImage = styled.div`
  display: flex;
  justify-content: center;
`;
