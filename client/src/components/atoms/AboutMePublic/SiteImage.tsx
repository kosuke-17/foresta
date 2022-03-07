import { memo, FC } from "react";
import { Image, Box, Flex } from "@chakra-ui/react";

type Props = {
  //後で?外す
  imageUrl?: string;
  siteName: string;
  onOpen?: (e: any) => void; //モーダルを開く際に必要
};

/**
 * サイト画面表示用.
 */
export const SiteImage: FC<Props> = memo(({ imageUrl, siteName, onOpen }) => {
  return (
    <>
      <Flex direction="column">
        <Box
          cursor="pointer"
          onClick={onOpen}
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
