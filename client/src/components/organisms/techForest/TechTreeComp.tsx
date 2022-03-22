import { FC, memo } from "react";
import { TechBranchComp } from "../../molucules/techForest/TechBranchComp";
import { ProgressComp } from "../../molucules/techForest/ProgressComp";
import { Box, Center, SimpleGrid } from "@chakra-ui/react";

type Props = {
  treeData: any;
};

export const TechTreeComp: FC<Props> = memo(({ treeData }) => {
  return (
    <>
      {treeData &&
        treeData.map((techTreeData: any, indexOfTreeData: number) => {
          return (
            <Center key={indexOfTreeData}>
              <Box
                bg="white"
                w="85%"
                p={10}
                m={5}
                color="black"
                borderColor="green.500"
                borderWidth="10px"
                borderRadius="lg"
              >
                <SimpleGrid columns={1} spacing={3}>
                  <ProgressComp
                    TreeName={techTreeData.name}
                    AchievementRate={techTreeData.AchievementRate}
                  />
                  {treeData?.[indexOfTreeData].branches &&
                    treeData?.[indexOfTreeData].branches.map(
                      (techBranchData: any, indexOfBranchData: number) => {
                        return (
                          <TechBranchComp
                            key={indexOfBranchData}
                            treeData={treeData}
                            indexOfTreeData={indexOfTreeData}
                            techBranchText={techBranchData.name}
                            indexOfBranchData={indexOfBranchData}
                          />
                        );
                      },
                    )}
                </SimpleGrid>
              </Box>
            </Center>
          );
        })}
    </>
  );
});
