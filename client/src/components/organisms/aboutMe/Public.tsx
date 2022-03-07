import { memo, FC } from "react";
import { Button, Box, Flex } from "@chakra-ui/react";
import { useGetUserByIdQuery } from "../../../types/generated/graphql";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MarkGithubIcon } from "@primer/octicons-react";
import { AccordionContent } from "../../molucules/AccordionContent";
import { SiteImageBox } from "../../molucules/aboutMePublic/SiteImageBox";

export const Public: FC = memo(() => {
  /**
   * ユーザ情報の取得.
   * @remarks 取得情報:名前、職種、GitHub
   */
  const { loading, error, data } = useGetUserByIdQuery({
    //idは実際cookieから取得
    variables: { id: "621b15dd3200d51bb64b2d42" },
  });

  //useState付けるとデータ入る前にレンダリングされて終わるみたい
  const user = data?.user;

  //urlName
  //url
  //data?.user.userUrls.user_urls

  const siteData: Array<{ siteName: string; imageUrl: string }> = [
    {
      siteName: "ほげほげサイト1",
      imageUrl: "http://kansetsu-life.com/common/img/header_image.jpg",
    },
    {
      siteName: "ほげほげサイト2",
      imageUrl:
        "https://pbs.twimg.com/media/E0sy6v2VUAEm6Y4?format=jpg&name=4096x4096",
    },
    {
      siteName: "ほげほげサイト3",
      imageUrl: "https://bit.ly/dan-abramov",
    },
    {
      siteName: "ほげほげサイト4",
      imageUrl: "https://bit.ly/dan-abramov",
    },
    {
      siteName: "ほげほげサイト5",
      imageUrl: "https://bit.ly/dan-abramov",
    },
    {
      siteName: "ほげほげサイト6",
      imageUrl: "https://bit.ly/dan-abramov",
    },
    {
      siteName: "ほげほげサイト7",
      imageUrl: "https://bit.ly/dan-abramov",
    },
  ];

  // const siteData: Array<{ siteName: string; imageUrl: string }> = [];

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
            {siteData.length != 0 && (
              <>
                <SiteImageBox siteData={siteData} />
              </>
            )}
            {/* ここまで */}
            <div>■その他URL</div>
            {user.userUrls.user_urls.map((urlItem, i) => (
              <div key={i}>
                <div>{urlItem.urlName}</div>
                <div>{urlItem.url}</div>
              </div>
            ))}
          </>
        )}
      </Box>
    </>
  );
});

const _Name = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

const _Icon = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  :hover {
    color: gray;
  }
`;

const _User = styled.div`
  text-align: center;
`;

const _Content = styled.div`
  margin-top: 10px;
`;
