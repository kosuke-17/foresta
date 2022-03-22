import { FC, memo } from "react";
import { Text, HStack, Progress } from "@chakra-ui/react";

type Props = {
  TreeName: string;
  AchievementRate: number;
};

export const ProgressComp: FC<Props> = memo(({ TreeName, AchievementRate }) => {
  return (
    <div>
      <HStack pb={2}>
        <Text color="green.500" fontSize="5xl">
          {TreeName}
        </Text>
        <Text color="gray.600" fontSize="2xl" pt={2} pl={6}>
          進捗率 {AchievementRate}%
        </Text>
      </HStack>
      <Progress
        colorScheme="green"
        height="35px"
        value={AchievementRate}
        isAnimated={true}
      />
    </div>
  );
});
