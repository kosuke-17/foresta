import { memo, FC, useState } from "react";
import { Box } from "@chakra-ui/react";

/**
 * 自己PR等長い文章を入れる用Box.
 */
export const TextBox: FC = memo(() => {
  //テストデータ
  const testData = useState("後で改行調整しなきゃ");

  return (
    <>
      <Box ml={10} width={900}>
        {testData}
      </Box>
    </>
  );
});
