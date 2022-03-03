import { memo, FC } from "react";
import { Button, Box, Flex } from "@chakra-ui/react";
import { useGetUserByIdQuery } from "../../../types/generated/graphql";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MarkGithubIcon } from "@primer/octicons-react";

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
  const user = data?.getUserById;

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
      <Box
        background={"green.100"}
        m={10}
        p={20}
        rounded={20}
        boxShadow="md"
        textAlign="center"
      >
        {user && (
          <>
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
            <div>{user.jobType}</div>
            <div>
              <Button backgroundColor="green.400" size="md" textColor="white">
                {/* 仮のリンク */}
                <Link to={"/study"}>このユーザの学習記録</Link>
              </Button>
            </div>
            <div>
              {/* <Button backgroundColor="green.400" size="md" textColor="white"> */}

              {/* </Button> */}
            </div>
            <div>技術進捗ツリーチェック項目</div>
            <div>制作物一覧</div>
            <div>ほげほげサイト</div>
            <div>ほげほげサイト</div>
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
