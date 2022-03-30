import { memo, FC } from "react";
import { Image, Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";

type Props = {
  imageUrl: string; //画像のURL
  siteName?: string; //制作物の名前
};

/**
 * 個々の制作物画面.
 */
export const SiteImage: FC<Props> = memo(({ imageUrl, siteName }) => {
  return (
    <>
      <Flex direction="column">
        <_Name>{siteName}</_Name>
        <Box
          backgroundColor="white"
          mt={1}
          mb={10}
          width={300}
          height={200}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderStyle="solid"
          borderColor="gray.100"
          borderWidth="1px"
        >
          <_Image src={imageUrl} alt={siteName} />
        </Box>
      </Flex>
    </>
  );
});

//制作物タイトル
const _Name = styled.div`
  font-size: 25px;
  color: #a7a7a7;
`;

//画像をホバーで拡大
const _Image = styled.img`
  width: auto;
  max-height: 198px;
  :hover {
    transform: scale(1.2, 1.2);
    transition: 1s all;
  }
`;
