import { memo, FC } from "react";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import { returnCodeToBr } from "../../../utils/methods";

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
