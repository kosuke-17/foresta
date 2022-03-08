import React, { FC } from "react";
import { Link } from "react-router-dom";
import { SimpleGrid, Box, Center, Text, Spacer } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { FollowButton } from "../../atoms/engineers/FollowButton";

export type Engineer = {
  engineerData: {
    __typename?: "User" | undefined;
    id: string;
    name: string;
    jobType: string;
    email: string;
    password: string;
    githubURL: string;
  };
  key: number;
};

export const EngineerComp: FC<Engineer> = (props) => {
  const { engineerData } = props;
  return (
    <Box
      w="200px"
      h="280px"
      bg="white"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      key={engineerData.id}
    >
      <Center>
        <SimpleGrid columns={1} spacing={2}>
          <Spacer />
          <Spacer />
          <Spacer />
          <Center>
            <Link to="/aboutme" state={{ userID: engineerData.id }}>
              <Avatar size="2xl" />
            </Link>
          </Center>
          <Center>
            <Text fontSize="md">{engineerData.name}</Text>
          </Center>
          <Center>
            <Text fontSize="sm">{engineerData.jobType}</Text>
          </Center>
          <Center>
            <FollowButton />
          </Center>
        </SimpleGrid>
      </Center>
    </Box>
  );
};
