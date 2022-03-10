import React, { FC, memo } from "react";
import { Button } from "@chakra-ui/react";

type AddStack = {
  addStack: React.MouseEventHandler<HTMLButtonElement>;
};

export const AddStackButton: FC<AddStack> = memo(({ addStack }) => {
  return (
    <Button colorScheme="green" variant="solid" onClick={addStack}>
      記録する
    </Button>
  );
});
