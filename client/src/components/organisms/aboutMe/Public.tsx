import { memo, FC } from "react";

import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { Heading } from "../../atoms/common/Heading";

import { SiteImageBox } from "../../molucules/aboutMePublic/SiteImageBox";
import { MenuBar } from "./MenuBar";
import { SpreadMenuBar } from "./SpreadMenuBar";
import { useAboutMePrivate } from "../../../hooks/useAboutMePrivate";
import { PortfolioType } from "../../../types/types";
import { Url } from "../../../types/generated/graphql";
import { Profile } from "../../molucules/aboutMePublic/Profile";
import { MyTechStack } from "../../molucules/aboutMePublic/MyTechStack";
import { ButtonItem } from "../../atoms/common/ButtonItem";
import { UrlList } from "../../molucules/aboutMePublic/UrlList";
import styled from "styled-components";

type Props = { engineerId?: string };

/**
 * AboutMeパブリックゾーン.
 */
export const Public: FC<Props> = memo(({ engineerId }) => {
  //cookieからID取得
  const [cookies] = useCookies();

  //引数で渡す値は他人のページが自身のページで分岐
  const postData = engineerId ? engineerId : cookies.ForestaID;

  //hooksの利用
  const { myLoading, myError, otherLoading, otherError, myData, otherData } =
    useAboutMePrivate(postData);

  //データをセット(他人のページなら他人のデータ、自身のページなら自身のデータ)
  const user = engineerId ? otherData : myData;

  //基本情報データ
  const userData = {
    name: String(user?.name),
    githubId: String(user?.githubURL),
    jobType: String(user?.jobType),
  };

  //制作物データ
  const portfolioData = user?.portfolio as Array<PortfolioType>;

  //URLデータ
  const urlData = user?.userUrls.user_urls as Array<Url>;

  //読み込み中時の表示
  if (myLoading || otherLoading) {
    return (
      <Flex justifyContent="center">
        <Spinner color="green.400" />
      </Flex>
    );
  }
  //エラー時の表示
  if (myError && otherError) {
    return <Flex justifyContent="center">Error</Flex>;
  }

  return (
    <>
      {user && (
        <>
          {/* 編集ボタン */}
          {!engineerId && (
            <Flex justifyContent="right" gap={3}>
              <MenuBar />
              <ButtonItem
                name="PDFを発行"
                onClick={() =>
                  window.open(
                    `https://docs.google.com/spreadsheets/d/${user?.spreadSheetID}/export?format=pdf`,
                    "_blank",
                  )
                }
              />
            </Flex>
          )}

          <Flex gap={50} justifyContent="center" mb={20}>
            <_Profile>
              <Heading text="Profile" />
              <Profile userData={userData} />
            </_Profile>

            <_MyTechStack>
              <Heading text="My Tech Stack" />
              <MyTechStack />
            </_MyTechStack>
          </Flex>

          <Box padding={10} mx={20}>
            {portfolioData && <SiteImageBox data={portfolioData} />}
          </Box>
          <Box padding={10} mx={20}>
            {urlData && <UrlList data={urlData} />}
          </Box>
        </>
      )}
    </>
  );
});

const _Profile = styled.div`
  width: 20%;
`;

const _MyTechStack = styled.div`
  width: 60%;
`;
