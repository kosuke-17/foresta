import { memo, FC } from "react";
import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

import { Url } from "../../../types/generated/graphql";
import { XCircleFillIcon } from "@primer/octicons-react";
import { Heading } from "../../atoms/common/Heading";

type Props = {
  data: Array<Url>; //URLのデータ
};

/**
 * URL一覧画面.
 */
export const UrlList: FC<Props> = memo(({ data }) => {
  //URLの登録がない場合の表示
  if (data?.length === 0) {
    return (
      <Flex justifyContent="center">
        <XCircleFillIcon size={24} />
        URLの登録がありません
      </Flex>
    );
  }

  console.dir(JSON.stringify(data[0].urlName));

  return (
    <>
      <Heading text="Other URL" />
      {data.map((item) => (
        <div key={item.urlName}>
          <Flex mt={5}>
            『{item.urlName}』
            <a href={item.url} target="blank">
              {item.url}
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
