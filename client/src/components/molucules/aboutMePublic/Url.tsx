import { memo, FC, useState } from "react";
import styled from "styled-components";
import { Button, Box, Flex } from "@chakra-ui/react";

/**
 * 制作物一覧画面.
 */

type Props = {
  urlData: Array<{ urlName: string; url: string }>;
};

export const Url: FC<Props> = memo(({ urlData }) => {
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

const _UrlTitle = styled.div`
  width: 400px;
`;

const _UrlContent = styled.div`
  width: 1000px;
`;
