import React, { FC, memo } from "react";
import { Center, SimpleGrid } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

type UpdateStack = {
  updateStack: React.MouseEventHandler<HTMLButtonElement>;
};

export const UpdateStackButton: FC<UpdateStack> = memo(({ updateStack }) => {
  return (
    <Center>
      <SimpleGrid columns={1}>
        <Button
          w={36}
          colorScheme="green"
          variant="solid"
          onClick={updateStack}
        >
          編集する
        </Button>
      </SimpleGrid>
    </Center>
  );
});
