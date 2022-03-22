import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { Engineer } from "../../../types/types";
import { FollowButton } from "../../atoms/engineers/FollowButton";
import {
  SimpleGrid,
  Box,
  Center,
  Text,
  Spacer,
  Avatar,
} from "@chakra-ui/react";

export const EngineerComp: FC<Engineer> = memo((props) => {
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
});
