import React, { FC, memo } from "react";
import { Button } from "@chakra-ui/react";

type StackButton = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
};

export const StackButton: FC<StackButton> = memo(({ onClick, title }) => {
  return (
    <Button colorScheme="green" variant="solid" onClick={onClick}>
      {title}
    </Button>
  );
});


