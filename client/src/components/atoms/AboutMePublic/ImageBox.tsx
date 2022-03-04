import { memo, FC } from "react";
import { Image, Box } from "@chakra-ui/react";

type Props = {
  //後で?外す
  imageUrl?: string;
  siteName: string;
};

/**
 * サイト画面表示用.
 */
export const ImageBox: FC<Props> = memo(({ imageUrl, siteName }) => {
  return (
    <>
      <Box>
        <Image src="https://bit.ly/dan-abramov" alt={siteName} />
        {/* <Image src={imageUrl} alt={siteName} /> */}
      </Box>
    </>
  );
});
