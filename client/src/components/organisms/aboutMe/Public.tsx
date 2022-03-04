import { memo, FC } from "react";
import { Button, Box, Flex } from "@chakra-ui/react";
import { useGetUserByIdQuery } from "../../../types/generated/graphql";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MarkGithubIcon } from "@primer/octicons-react";
import { AccordionContent } from "../../molucules/AccordionContent";
import { ModalSet } from "../../molucules/ModalSet";
import { useModal } from "../../../hooks/useModal";
import { ImageBox } from "../../atoms/AboutMePublic/ImageBox";

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
            <Box backgroundColor="white" pb={10} mb={10}>
              <Box
                width="full"
                textAlign="center"
                textColor="white"
                backgroundColor="gray.400"
                fontWeight="bold"
                p={3}
                mt={5}
                fontSize={20}
              >
                制作物一覧
              </Box>
              <Flex gap={4} justifyContent="center">
                <Flex direction="column">
                  <ImageBox siteName="ほげほげサイト" />
                  <Box
                    cursor="pointer"
                    onClick={onOpen}
                    backgroundColor="gray.400"
                    width={350}
                    height={200}
                    textAlign="center"
                    alignItems="center"
                    mt={30}
                  >
                    仮のBox
                  </Box>
                  ほげほげサイト
                </Flex>
                <Flex direction="column">
                  <Box
                    cursor="pointer"
                    onClick={onOpen}
                    backgroundColor="gray.400"
                    width={350}
                    height={200}
                    textAlign="center"
                    alignItems="center"
                    mt={30}
                  >
                    仮のBox
                  </Box>
                  <div>ほげほげサイト</div>
                </Flex>
                <Flex direction="column">
                  <Box
                    cursor="pointer"
                    onClick={onOpen}
                    backgroundColor="gray.400"
                    width={350}
                    height={200}
                    textAlign="center"
                    alignItems="center"
                    mt={30}
                  >
                    仮のBox
                  </Box>
                  <div>ほげほげサイト</div>
                </Flex>
              </Flex>
            </Box>

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
