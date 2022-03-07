import { memo, FC } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { MarkGithubIcon } from "@primer/octicons-react";
import styled from "styled-components";

import { AccordionContent } from "../../molucules/AccordionContent";
import { SiteImageBox } from "../../molucules/aboutMePublic/SiteImageBox";
import { useGetUserByIdQuery } from "../../../types/generated/graphql";
import { UrlList } from "../../molucules/aboutMePublic/UrlList";

export const Public: FC = memo(() => {
  /**
   * ユーザ情報の取得.
   * @remarks 取得情報:名前、職種、GitHub
   */
  const { loading, error, data } = useGetUserByIdQuery({
    //idは実際cookieから取得
    // variables: { id: "621c786c7ca77263e67c88d0" }, //川島
    variables: { id: "621b15dd3200d51bb64b2d42" }, //田中
    // variables: { id: "62214f1765bb91cc3f60e92f" }, //aaa
  });

  //useState付けるとデータ入る前にレンダリングされて終わるみたい
  const user = data?.user;

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
              <Menu>
                <MenuButton
                  as={Button}
                  backgroundColor="green.400"
                  textColor="white"
                  _hover={{ backgroundColor: "green.300" }}
                  width="auto"
                  height={10}
                  justifyContent="center"
                  textAlign="center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    width="30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </MenuButton>
                <MenuList>
                  <MenuItem>ユーザ情報</MenuItem>
                  <MenuItem>制作物</MenuItem>
                  <MenuItem>URL</MenuItem>
                  <MenuItem>基本情報</MenuItem>
                  <MenuItem>スキル要約</MenuItem>
                  <MenuItem>自己PR・前職経験</MenuItem>
                  <MenuItem>その他情報</MenuItem>
                  <MenuItem>開発経験</MenuItem>
                </MenuList>
              </Menu>
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
                <Button backgroundColor="green.400" size="md" textColor="white">
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
            {user.portfolio && user.portfolio?.length != 0 && (
              <SiteImageBox siteData={user.portfolio} />
            )}
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
