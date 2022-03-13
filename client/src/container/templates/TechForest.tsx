import React, { useState } from "react";
import { useGetAllTechAreaQuery } from "../../types/generated/graphql";
import { useGetUserLeafsByIdQuery } from "../../types/generated/graphql";
import {
  Box,
  Button,
  Text,
  Flex,
  HStack,
  Center,
  SimpleGrid,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";

export const TechForest = () => {
  // const { data, loading, error } = useGetAllTechAreaQuery();
  const { data, loading, error } = useGetUserLeafsByIdQuery({
    variables: {
      userId: "622db6cb03794ad6e8ea6950",
      areaId: "6219afb4d55e2e236b9062b8",
    },
  });

  console.log(data?.getUserLeafsById.node.myForest);

  const [numberOfArea, setNumberOfData] = useState(0);
  // 習得した技術を入れる配列
  const [leafData, setLeafData] = useState([""]);
  // 進捗率
  const [achievementRate, setAchivementRate] = useState(0);
  //
  const cheakedLeaf = (techLeaf: string) => {
    leafData?.push(techLeaf);
    console.log(leafData);
  };
  // エリアの切り替え
  const changeArea = (index: number) => {
    setNumberOfData(index);
    console.log(index);
  };
  // const techAreaData = data?.getAllTechArea;
  const techTreeData = data?.getUserLeafsById.node.myForest;
  console.log(techTreeData);

  return (
    <div>
      {/* <Box bg="white" w="100%" p={5} color="white">
        <HStack spacing="24px">
          {techAreaData &&
            techAreaData.map((techAreaData: any, indexOfTechArea: number) => {
              return (
                <Button
                  bg="gray.100"
                  variant="solid"
                  key={indexOfTechArea}
                  onClick={() => changeArea(indexOfTechArea)}
                >
                  <Text color="gray.600" fontSize="sm">
                    {techAreaData.name}
                  </Text>
                </Button>
              );
            })}
        </HStack>
      </Box> */}
      {techTreeData &&
        techTreeData.map((techTreeData: any, indexOfTreeData: number) => {
          return (
            <Center key={indexOfTreeData}>
              <Box
                bg="white"
                w="85%"
                p={8}
                m={5}
                color="black"
                borderColor="blue.300"
                borderWidth="3px"
                borderRadius="lg"
              >
                <SimpleGrid columns={1} spacing={3}>
                  <HStack>
                    <Text color="blue.400" fontSize="4xl">
                      {techTreeData.treeName}
                    </Text>
                    <Text color="gray.600" fontSize="xl" pt={2}>
                      進捗率 {techTreeData.achievementRate}%
                    </Text>
                  </HStack>
                  <Progress
                    colorScheme="blue"
                    height="35px"
                    value={techTreeData.achievementRate}
                  />
                  {data?.getUserLeafsById.node.myForest[indexOfTreeData]
                    .branches &&
                    data?.getUserLeafsById.node.myForest[
                      indexOfTreeData
                    ].branches.map(
                      (techBranchData: any, indexOfBranchData: number) => {
                        return (
                          <HStack key={indexOfBranchData}>
                            <Accordion defaultIndex={[0]} allowMultiple>
                              <AccordionItem>
                                <AccordionButton>
                                  <Box flex="1" textAlign="left">
                                    <Text color="gray.600" fontSize="2xl">
                                      {techBranchData.name}
                                    </Text>
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                  <Flex>
                                    {data?.getUserLeafsById.node.myForest[
                                      indexOfTreeData
                                    ].branches[indexOfBranchData].leafs &&
                                      data?.getUserLeafsById.node.myForest[
                                        indexOfTreeData
                                      ].branches[indexOfBranchData].leafs.map(
                                        (techLeafData: any, index: number) => {
                                          return (
                                            <Box key={index} px={4}>
                                              <HStack>
                                                <Text
                                                  color="gray.600"
                                                  fontSize="xl"
                                                >
                                                  {techLeafData.name}
                                                </Text>
                                                <Checkbox
                                                  size="lg"
                                                  colorScheme="blue"
                                                  onChange={() =>
                                                    cheakedLeaf(
                                                      techLeafData.name,
                                                    )
                                                  }
                                                />
                                              </HStack>
                                            </Box>
                                          );
                                        },
                                      )}
                                  </Flex>
                                </AccordionPanel>
                              </AccordionItem>
                            </Accordion>
                          </HStack>
                        );
                      },
                    )}
                </SimpleGrid>
              </Box>
            </Center>
          );
        })}
    </div>
  );
};
