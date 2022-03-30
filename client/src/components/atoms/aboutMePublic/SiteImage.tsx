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
          <Image src={imageUrl} alt={siteName} width="auto" maxH={198} />
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
