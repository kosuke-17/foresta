import { memo, FC } from "react";
import { Button, Box, Flex } from "@chakra-ui/react";
import { useGetUserByIdQuery } from "../../../types/generated/graphql";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MarkGithubIcon } from "@primer/octicons-react";
import { AccordionContent } from "../../molucules/AccordionContent";
import { ModalSet } from "../../molucules/ModalSet";
import { useModal } from "../../../hooks/useModal";
import { SiteImageBox } from "../../molucules/aboutMePublic/SiteImageBox";

export const Public: FC = memo(() => {
  const modalStore = useModal();
  const { onOpen, isOpen, onClose } = modalStore;

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

  const siteData: Array<{ siteName: string; imageUrl: string }> = [
    {
      siteName: "ほげほげサイト",
      imageUrl: "http://kansetsu-life.com/common/img/header_image.jpg",
    },
    {
      siteName: "ほげほげサイト",
      imageUrl:
        "https://pbs.twimg.com/media/E0sy6v2VUAEm6Y4?format=jpg&name=4096x4096",
    },
    {
      siteName: "ほげほげサイト",
      imageUrl: "https://bit.ly/dan-abramov",
    },
    {
      siteName: "ほげほげサイト",
      imageUrl: "https://bit.ly/dan-abramov",
    },
    {
      siteName: "ほげほげサイト",
      imageUrl: "https://bit.ly/dan-abramov",
    },
    {
      siteName: "ほげほげサイト",
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
            <ModalSet
              isOpen={isOpen}
              onClose={onClose}
              modalTitle="ほげほげサイト"
              contents={<p>コンテンツ</p>}
            />
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
                <SiteImageBox siteData={siteData} onOpen={onOpen} />
              </>
            )}
            {/* ここまで */}

            <div>ほげほげサイト</div>
            <div>
              <div>■その他URL</div>
              <div>ほげほげ</div>
              <div>hogehoge.com</div>
            </div>
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
