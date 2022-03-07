import { memo, FC } from "react";
import { Image, Box, Flex } from "@chakra-ui/react";

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
        <Box
          backgroundColor="white"
          mt={30}
          width={300}
          height={200}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderStyle="solid"
          borderColor="black"
          borderWidth="1px"
        >
          <Image src={imageUrl} alt={siteName} width="auto" maxH={200} />
        </Box>
        {siteName}
      </Flex>
    </>
  );
});
