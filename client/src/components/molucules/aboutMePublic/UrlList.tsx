import { memo, FC } from "react";
import { Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { Url } from "../../../types/generated/graphql";

type Props = {
  urlData: Array<Url>; //URL情報
};

/**
 * URL一覧画面.
 */
export const UrlList: FC<Props> = memo(({ urlData }) => {
  return (
    <>
      <_Title>■その他URL</_Title>
      {urlData.map((urlItem, i) => (
        <div key={i}>
          <Flex>
            <_UrlTitle>『{urlItem.urlName}』</_UrlTitle>
            <_UrlContent>
              <a href={urlItem.url} target="blank">
                {urlItem.url}
              </a>
            </_UrlContent>
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
  margin: 40px 0px 10px 0px;
`;

//URLタイトル
const _UrlTitle = styled.div`
  width: 400px;
`;

//URL本体
const _UrlContent = styled.div`
  width: 1000px;
`;
