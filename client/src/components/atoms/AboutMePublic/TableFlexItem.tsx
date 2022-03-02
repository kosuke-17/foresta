import { memo, FC, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

type Props = {
  itemArray: Array<any>;
};

/**
 * テーブルにてFlexBoxで項目回しているところ.
 */
export const TableFlexItem: FC<Props> = memo(({ itemArray }) => {
  return (
    <>
      <Flex>
        {itemArray.map((item) => (
          <div key={item}>
            <Box
              backgroundColor="gray.400"
              borderRadius={5}
              ml={2}
              px={2}
              py={1}
              textColor="white"
            >
              {item}
            </Box>
          </div>
        ))}
      </Flex>
    </>
  );
});
