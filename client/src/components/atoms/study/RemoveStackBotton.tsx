import React, { FC, memo } from "react";

import { Button } from "@chakra-ui/react";

type RemoveStack = {
  removeStack: React.MouseEventHandler<HTMLButtonElement>;
};

export const RemoveStackButton: FC<RemoveStack> = memo(({ removeStack }) => {
  return (
    <Button colorScheme="green" variant="solid" onClick={removeStack}>
      削除する
    </Button>
  );
});
