import { memo, FC } from "react";
import { Link } from "react-router-dom";
import { Button, Box, Flex } from "@chakra-ui/react";
import { MarkGithubIcon } from "@primer/octicons-react";
import styled from "styled-components";

import { AccordionContent } from "../../molucules/AccordionContent";
import { SiteImageBox } from "../../molucules/aboutMePublic/SiteImageBox";
import { useGetUserByIdQuery } from "../../../types/generated/graphql";
import { UrlList } from "../../molucules/aboutMePublic/UrlList";
import { Portfolio } from "../../../types/generated/graphql";
import { MenuBar } from "../../organisms/aboutMe/MenuBar";

export const Public: FC = memo(() => {
  /**
   * ユーザ情報の取得.
   * @remarks 取得情報:名前、職種、GitHub
   */
  const { loading, error, data } = useGetUserByIdQuery({
    //idは実際cookieから取得
    variables: { id: "621b4b55e9204efe7d8f594a" }, //花子
    // variables: { id: "621b15dd3200d51bb64b2d42" }, //田中
  });

  //useState付けるとデータ入る前にレンダリングされて終わるみたい
  const user = data?.user;
  //制作物部分
  const portfolio = user?.portfolio as Array<
    Pick<Portfolio, "img" | "title" | "description" | "portfolioURL">
  >;

  //読み込み中時の表示
  if (loading) {
    return <p>loding…</p>;
  }
  //エラー時の表示
  if (error) {
    return <p>Error</p>;
  }
  /**
   * AboutMeパブリックゾーン.
   */
  return (
    <>
      <Box background={"green.100"} m={10} p={20} rounded={20} boxShadow="md">
        {user && (
          <>
            <Flex justifyContent="right">
              <MenuBar />
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
            {/* 制作物 */}
            {portfolio && <SiteImageBox siteData={portfolio} />}
            {/* URL */}
            {user.userUrls && <UrlList urlData={user.userUrls.user_urls} />}
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
