import { FC, memo } from "react";
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

type Prpps = {
  treeData: any;
  indexOfTreeData: number;
  techBranchText: string;
  indexOfBranchData: number;
};

export const TechBranchComp: FC<Prpps> = memo(
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
                  ].leafs.map((techLeafData: any, indexOfLeafData: number) => {
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
                  })}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </HStack>
    );
  },
);
