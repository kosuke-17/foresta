import { FC, memo } from "react";
import { EngineerComp } from "../../molucules/engineers/EngineerComp";
import { useGetAllUserQuery } from "../../../types/generated/graphql";
import { SimpleGrid, Box, Center } from "@chakra-ui/react";
import { EngineerData } from "../../../types/types";

export const EngineersComp: FC = memo(() => {
  // エンジニア一覧を取得するQuery
  const { data } = useGetAllUserQuery();
  const engineerData = data?.getAllUser;
  return (
    <Center>
      <Box bg="white" height="auto" w="1400px">
        <SimpleGrid minChildWidth="200px" spacing="10px">
          {engineerData &&
            engineerData.map((engineerData: EngineerData, index: number) => {
              return (
                <EngineerComp
                  key={index}
                  engineerId={engineerData.token}
                  engineerName={engineerData.name}
                  engineerJobType={engineerData.jobType}
                />
              );
            })}
        </SimpleGrid>
      </Box>
    </Center>
  );
});
