import { FC, memo } from "react";
import { useGetAllUserQuery } from "../../types/generated/graphql";
import { SimpleGrid, Box, Center, Input } from "@chakra-ui/react";
import { EngineerComp } from "../../components/organisms/engineers/EngineerComp";

export const EngineerList: FC = memo(() => {
  const { data } = useGetAllUserQuery();
  const engineerData = data?.getAllUser;
  return (
    <div>
      <SimpleGrid columns={1} spacing={5}>
        <Box bg="white" height="120px">
          <Center h="100px">
            <Input size="lg" w="1000px" h="50px" placeholder="Search" />
          </Center>
        </Box>
        <Center>
          <Box bg="white" height="auto" w="1400px">
            <SimpleGrid minChildWidth="200px" spacing="10px">
              {engineerData &&
                engineerData.map((engineerData: any, index: number) => {
                  return (
                    <EngineerComp engineerData={engineerData} key={index} />
                  );
                })}
            </SimpleGrid>
          </Box>
        </Center>
      </SimpleGrid>
    </div>
  );
});
