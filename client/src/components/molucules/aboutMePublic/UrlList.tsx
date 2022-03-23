import { memo, FC } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import styled from "styled-components";

import { useCookies } from "react-cookie";
import { useGetUrlByIdQuery, Url } from "../../../types/generated/graphql";
import { XCircleFillIcon } from "@primer/octicons-react";

/**
 * URL一覧画面.
 */
export const UrlList: FC = memo(() => {
  //cookieからID取得
  const [cookies] = useCookies();
  /**
   * URLリストの取得.
   */
  const { data, loading, error } = useGetUrlByIdQuery({
    variables: {
      userToken: cookies.ForestaID,
    },
  });
  const urlData = data?.urls.node.userUrls.user_urls as Array<Url>;

  //読み込み中時の表示
  if (loading) {
    return (
      <Flex justifyContent="center">
        <Spinner color="green.400" />
      </Flex>
    );
  }
  // //エラー時の表示
  if (
    error?.graphQLErrors[0].message ===
    "Cannot return null for non-nullable field User.userUrls."
  ) {
    return (
      <Flex justifyContent="center">
        <XCircleFillIcon size={24} />
        URLの登録がありません
      </Flex>
    );
  }
  //エラー時の表示
  if (error) {
    return <Flex justifyContent="center">Error</Flex>;
  }

  return (
    <>
      <_Title>■その他URL</_Title>

      {urlData &&
        urlData.map((urlItem) => (
          <div key={urlItem.urlName}>
            <Flex mt={5}>
              『{urlItem.urlName}』
              <a href={urlItem.url} target="blank">
                {urlItem.url}
              </a>
            </Flex>
          </div>
        ))}
    </>
  );
});

//項目タイトル
const _Title = styled.div`
  font-weight: bold;
  font-size: 30px;
`;
