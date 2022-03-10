import React, { FC, memo } from "react";
import { Button } from "@chakra-ui/react";

type UpdateStack = {
  updateStack: React.MouseEventHandler<HTMLButtonElement>;
};

export const UpdateStackButton: FC<UpdateStack> = memo(({ updateStack }) => {
  return (
    <Button colorScheme="green" variant="solid" onClick={updateStack}>
      編集する
    </Button>
  );
});
