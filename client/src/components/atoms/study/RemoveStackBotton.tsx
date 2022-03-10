import React, { FC, memo } from "react";
import { Center, SimpleGrid } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

type RemoveStack = {
  removeStack: React.MouseEventHandler<HTMLButtonElement>;
};

export const RemoveStackButton: FC<RemoveStack> = memo(({ removeStack }) => {
  return (
    <Center>
      <SimpleGrid columns={1}>
        <Button
          w={36}
          colorScheme="green"
          variant="solid"
          onClick={removeStack}
        >
          削除する
        </Button>
      </SimpleGrid>
    </Center>
  );
});
