import { memo, FC, useState } from "react";
import { Button, Box } from "@chakra-ui/react";
import { useGetUserByIdQuery } from "../../../types/generated/graphql";

export const Public: FC = memo(() => {
  /**
   * ユーザ情報の取得.
   * @remarks 取得情報:名前、職種、GitHub
   */
  const { loading, error, data } = useGetUserByIdQuery({
    variables: { id: "621b15dd3200d51bb64b2d42" },
  });

  //useState付けるとデータ入る前にレンダリングされて終わる
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
      <Box background={"green.100"} m={10} p={20} rounded={20} boxShadow="md">
        {user && (
          <>
            <div>氏名:{user.name}</div>
            <div>{user.jobType}</div>
            <div>
              <Button colorScheme="teal" size="sm">
                このユーザの学習記録
              </Button>
            </div>
            <div>
              <Button colorScheme="teal" size="sm">
                GitHubアカウント
              </Button>
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
