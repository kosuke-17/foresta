import { FC, memo } from "react";
import { TechLeafComp } from "../../atoms/techForest/TechLeafComp";
import { TechLeafData } from "../../../types/types";
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

type Props = {
  treeData: {
    id: string;
    treeId: string;
    areaId: string;
    treeName: string;
    achievementRate: number;
    color: string;
    branches: {
      id: string;
      name: string;
      leafs: {
        id: string;
        name: string;
        techBranch_id: string;
        techTree_id: string;
        isStatus: boolean;
      }[];
    }[];
  }[];
  indexOfTreeData: number;
  techBranchText: string;
  indexOfBranchData: number;
};

export const TechBranchComp: FC<Props> = memo(
  ({ treeData, indexOfTreeData, techBranchText, indexOfBranchData }) => {
    return (
      <HStack key={indexOfBranchData}>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text color="gray.600" fontSize="2xl">
                  {techBranchText}
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
                  ].leafs.map(
                    (techLeafData: TechLeafData, indexOfLeafData: number) => {
                      return (
                        <TechLeafComp
                          key={indexOfLeafData}
                          treeData={treeData}
                          techLeafTextData={techLeafData.name}
                          techLeafStatus={techLeafData.isStatus}
                          indexOfTreeData={indexOfTreeData}
                          indexOfBranchData={indexOfBranchData}
                          indexOfLeafData={indexOfLeafData}
                        />
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
);
