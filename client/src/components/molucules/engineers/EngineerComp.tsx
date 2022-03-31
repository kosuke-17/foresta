import { FC, memo } from "react";
import { FollowButton } from "../../atoms/engineers/FollowButton";
import { ProfileAvatar } from "../../atoms/engineers/ProfileAvatar";
import { SimpleGrid, Box, Center, Text, Heading } from "@chakra-ui/react";

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
        borderRadius="2xl"
        overflow="hidden"
        boxShadow={"md"}
      >
        <Center>
          <SimpleGrid columns={1} spacing={2}>
            <Center pt={5} pb={2}>
              <ProfileAvatar engineerId={engineerId} />
            </Center>
            <Center>
              <Heading fontSize="md">{engineerName}</Heading>
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
