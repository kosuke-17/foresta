import { FC, memo } from "react";
import { FollowButton } from "../../atoms/engineers/FollowButton";
import { ProfileAvatar } from "../../atoms/engineers/ProfileAvatar";

import { SimpleGrid, Box, Center, Text, Spacer } from "@chakra-ui/react";

type Props = {
  engineerId: string;
  engineerName: string;
  engineerJobType: string;
};

export const EngineerComp: FC<Props> = memo(
  ({ engineerId, engineerName, engineerJobType }) => {
    return (
      <Box
        w="200px"
        h="280px"
        bg="white"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Center>
          <SimpleGrid columns={1} spacing={2}>
            <Spacer />
            <Spacer />
            <Spacer />
            <Center>
              <ProfileAvatar engineerId={engineerId} />
            </Center>
            <Center>
              <Text fontSize="md">{engineerName}</Text>
            </Center>
            <Center>
              <Text fontSize="sm">{engineerJobType}</Text>
            </Center>
            <Center>
              <FollowButton />
            </Center>
          </SimpleGrid>
        </Center>
      </Box>
    );
  },
);
