import React, { FC, memo } from "react";
import { Text, HStack, Progress } from "@chakra-ui/react";

type TechTreeData = {
  techTreeData: any;
};

export const ProgressComp: FC<TechTreeData> = memo(({ techTreeData }) => {
  return (
    <div>
      <HStack pb={2}>
        <Text color="green.500" fontSize="5xl">
          {techTreeData.treeName}
        </Text>
        <Text color="gray.600" fontSize="2xl" pt={2} pl={6}>
          進捗率 {techTreeData.achievementRate}%
        </Text>
      </HStack>
      <Progress
        colorScheme="green"
        height="35px"
        value={techTreeData.achievementRate}
        isAnimated={true}
      />
    </div>
  );
});
