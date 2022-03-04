import { memo, FC } from "react";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import HTMLReactParser from "html-react-parser";

/**
 * テキストをHTMLに変換するメソッド.
 *
 * @remarks
 * 改行はbrタグに変換する。
 *
 * @param text - HTMLに変換するテキスト
 * @returns textが空文字列の場合は空文字列。そうでなければHTMLに変換した文字列。
 */
export const returnCodeToBr = (text: string) => {
  if (text === "") {
    return text;
  } else {
    return HTMLReactParser(text.replace(/\r?\n/g, "<br />"));
  }
};

/**
 * 自己PR等長い文章を入れる用Box.
 */
export const TextBox: FC = memo(() => {
  return (
    <>
      <Box ml={10} width={900}>
        <_TextStyle>{returnCodeToBr("")}</_TextStyle>
      </Box>
    </>
  );
});

const _TextStyle = styled.pre`
  /* word-break: break-all; */
`;
