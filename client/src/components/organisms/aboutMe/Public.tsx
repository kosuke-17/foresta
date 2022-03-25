import { memo, FC } from "react";
import { Link } from "react-router-dom";
import { Button, Box, Flex, Spinner } from "@chakra-ui/react";
import { MarkGithubIcon } from "@primer/octicons-react";
import styled from "styled-components";
import { useCookies } from "react-cookie";

import { AccordionContent } from "../../molucules/AccordionContent";
import { SiteImageBox } from "../../molucules/aboutMePublic/SiteImageBox";
import { useGetUserByIdQuery } from "../../../types/generated/graphql";
import { UrlList } from "../../molucules/aboutMePublic/UrlList";
import { MenuBar } from "./MenuBar";
import { SpreadMenuBar } from "./SpreadMenuBar";
import { useLocation } from "react-router-dom";

interface State {
  engineerId: string;
}

/**
 * AboutMeパブリックゾーン.
 */
export const Public: FC = memo(() => {
  // エンジニアリストからtokenを受け取るためのlocation
  const location = useLocation();
  const { engineerId } = location.state as State;
  console.log(engineerId);

  //cookieからID取得
  const [cookies] = useCookies();
  /**
   * ユーザ情報の取得.
   * @remarks 取得情報:名前、職種、GitHub
   */
  const { loading, error, data } = useGetUserByIdQuery({
    variables: { userToken: cookies.ForestaID },
  });
  const user = data?.user.node;

  //読み込み中時の表示
  if (loading) {
    return (
      <Flex justifyContent="center">
        <Spinner color="green.400" />
      </Flex>
    );
  }
  //エラー時の表示
  if (error) {
    return <Flex justifyContent="center">Error</Flex>;
  }

  return (
    <>
      <Box background={"green.100"} m={10} p={20} rounded={20} boxShadow="md">
        {user && (
          <>
            <Flex justifyContent="right" gap={3}>
              <MenuBar />
              <SpreadMenuBar />
            </Flex>
            <_User>
              <Flex justifyContent="center">
                <_Name>氏名:{user.name}</_Name>
                {user.githubURL && (
                  <_Icon>
                    <a
                      href={`https://github.com/${user.githubURL}`}
                      target="blank"
                    >
                      <MarkGithubIcon size={16} />
                    </a>
                  </_Icon>
                )}
              </Flex>
              <_Content>{user.jobType}</_Content>
              <_Content>
                <Button
                  backgroundColor="green.400"
                  size="md"
                  textColor="white"
                  _hover={{ backgroundColor: "green.300" }}
                >
                  {/* 仮のリンク */}
                  <Link to={"/study"}>このユーザの学習記録</Link>
                </Button>
              </_Content>
            </_User>
            <_Content>
              <AccordionContent
                title="技術進捗ツリーチェック項目"
                content={<p>技術ツリー</p>}
                size="sm"
              />
            </_Content>
            <SiteImageBox />
            <UrlList />
          </>
        )}
      </Box>
    </>
  );
});

//氏名
const _Name = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

//githubアイコン
const _Icon = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  :hover {
    color: gray;
  }
`;

//パブリックゾーン上半分
const _User = styled.div`
  text-align: center;
`;

//技術進捗ツリー
const _Content = styled.div`
  margin-top: 10px;
`;
