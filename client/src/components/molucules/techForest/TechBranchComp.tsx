import { FC, memo } from "react";
import { TechBranch } from "../../../types/types";
import { TechLeafComp } from "../../atoms/techForest/TechLeafComp";
import {
  Box,
  Text,
  Flex,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export const TechBranchComp: FC<TechBranch> = memo(
  ({
    treeData,
    indexOfTreeData,
    techBranchData,
    indexOfBranchData,
    cheakedLeaf,
  }) => {
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
                {treeData?.[indexOfTreeData].branches[indexOfBranchData]
                  .leafs &&
                  treeData?.[indexOfTreeData].branches[
                    indexOfBranchData
                  ].leafs.map((techLeafData: any, indexOfLeafData: number) => {
                    return (
                      <TechLeafComp
                        key={indexOfLeafData}
                        treeData={treeData}
                        techLeafData={techLeafData}
                        techBranchData={techBranchData}
                        indexOfTreeData={indexOfTreeData}
                        indexOfBranchData={indexOfBranchData}
                        indexOfLeafData={indexOfLeafData}
                        cheakedLeaf={cheakedLeaf}
                      />
                    );
                  })}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </HStack>
    );
  },
);
