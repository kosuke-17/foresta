import React, { FC, memo } from "react";
import { Center, SimpleGrid } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

type AddStack = {
  addStack: React.MouseEventHandler<HTMLButtonElement>;
};

export const AddStackButton: FC<AddStack> = memo(({ addStack }) => {
  return (
    <Center>
      <SimpleGrid columns={1}>
        <Button w={36} colorScheme="green" variant="solid" onClick={addStack}>
          記録する
        </Button>
      </SimpleGrid>
    </Center>
  );
});
