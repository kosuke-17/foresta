import React, { FC, memo } from "react";
import { TechArea } from "../../../types/generated/graphql";
import { Button, Text } from "@chakra-ui/react";

type AreaSelect = {
  techAreaData: TechArea;
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
