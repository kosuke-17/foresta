import { FC, memo } from "react";
import { SimpleGrid, Box, Center, Input } from "@chakra-ui/react";
import { EngineersComp } from "../../components/organisms/engineers/EngineersComp";

export const EngineerList: FC = memo(() => {
  return (
    <div>
      <SimpleGrid columns={1} spacing={5}>
        <Box bg="white" height="120px">
          <Center h="100px">
            <Input size="lg" w="1000px" h="50px" placeholder="Search" />
          </Center>
        </Box>
        <EngineersComp />
      </SimpleGrid>
    </div>
  );
});
