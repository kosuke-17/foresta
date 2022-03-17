import React, { FC, memo } from "react";
import { Button, Text } from "@chakra-ui/react";

type AreaSelect = {
  techAreaData: any;
  indexOfTechArea: number;
  changeArea: (indexOfTechArea: number) => void;
};

export const AreaSelectButton: FC<AreaSelect> = memo(
  ({ techAreaData, indexOfTechArea, changeArea }) => {
    return (
      <Button
        bg="gray.100"
        variant="solid"
        onClick={() => changeArea(indexOfTechArea)}
      >
        <Text color="gray.600" fontSize="sm">
          {techAreaData.name}
        </Text>
      </Button>
    );
  },
);
