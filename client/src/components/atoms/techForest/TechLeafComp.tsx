import { FC, memo } from "react";
import { TechLeaf } from "../../../types/types";
import { Box, Text, HStack, Checkbox } from "@chakra-ui/react";

export const TechLeafComp: FC<TechLeaf> = memo(
  ({
    treeData,
    techLeafData,
    indexOfTreeData,
    indexOfLeafData,
    indexOfBranchData,
    cheakedLeaf,
  }) => {
    return (
      <Box key={indexOfLeafData} px={4}>
        <HStack>
          <Text color="gray.600" fontSize="xl">
            {techLeafData.name}
          </Text>
          <Checkbox
            size="lg"
            colorScheme="green"
            onChange={() =>
              cheakedLeaf(
                treeData?.[indexOfTreeData].id,
                treeData?.[indexOfTreeData].branches[indexOfBranchData].id,
                treeData?.[indexOfTreeData].branches[indexOfBranchData].leafs[
                  indexOfLeafData
                ].id,
                treeData?.[indexOfTreeData].branches[indexOfBranchData].leafs[
                  indexOfLeafData
                ].isStatus,
              )
            }
            isChecked={techLeafData.isStatus}
          />
        </HStack>
      </Box>
    );
  },
);
