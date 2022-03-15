import { useState } from "react";
import { useGetTechArea } from "../../hooks/techforest/useGetTechArea";
import { useChangeLeafStatusMutation } from "../../types/generated/graphql";
import { useGetUserLeafsByIdQuery } from "../../types/generated/graphql";
import { GetUserLeafsByIdDocument } from "../../types/generated/graphql";
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
  useToast,
  Progress,
} from "@chakra-ui/react";

export const TechForest = () => {
  // エラー通知用のトースト
  const toast = useToast();
  // カスタムフックから技術エリアデータ取得
  const { dataOfTechArea } = useGetTechArea();
  // 技術エリアデータ(フロントエンド、バックエンド、etc...)
  const techAreaData = dataOfTechArea?.getAllTechArea;
  // 技術エリアデータの状態管理、(初期値はフロントエンド)
  const [areaId, setAreaId] = useState<string | undefined>(
    "6219afb4d55e2e236b9062b8",
  );
  // 技術エリアを変更するメソッド
  const changeArea = (indexOfTechArea: number) => {
    setAreaId(dataOfTechArea?.getAllTechArea[indexOfTechArea].id);
  };
  // 特定のユーザーが保有している技術データ
  const { data } = useGetUserLeafsByIdQuery({
    variables: {
      userId: "622db6cb03794ad6e8ea6950", // 狗巻棘のID
    },
  });
  // 技術ツリーデータ(技術エリアデータの状態と一致しているものを絞り込み)
  const treeData = data?.getUserLeafsById.node.myForest.filter(
    (element: any) => element.areaId == areaId,
  );
  // 技術ツリーIdの状態管理
  const [treeId, setTreeId] = useState("");
  // 技術ブランチIdの状態管理
  const [branchId, setBranchId] = useState("");
  // 技術リーフIdの状態管理
  const [leafId, setLeafId] = useState("");
  // 習得状況の状態管理
  const [isStatus, setIsStatus] = useState(false);
  // 技術リーフの取得状態を変更するMutation
  const [changeLeafStatusMutation] = useChangeLeafStatusMutation({
    variables: {
      techLeafInfo: {
        userLeafsId: "622db6cb03794ad6e8ea695b", // 狗巻棘のuserLeafsId
        treeId: treeId,
        branchId: branchId,
        leafId: leafId,
        currentStatus: isStatus,
      },
    },
    //refetchでチェック後の技術データを再取得
    refetchQueries: [GetUserLeafsByIdDocument],
  });
  // 技術リーフの習得状態を切り替えるメソッド
  const cheakedLeaf = async (
    treeId: string,
    branchId: string,
    leafId: string,
    isStatus: boolean,
  ) => {
    // サーバーで技術の習得状態を切り替えるのに必要な情報をuseStateにset
    setTreeId(treeId);
    setBranchId(branchId);
    setLeafId(leafId);
    setIsStatus(isStatus);
    // サーバーに技術リーフの習得状態を送信するMutationを実行
    await changeLeafStatusMutation();
    // なぜかMutationを2回実行しないと送信できない(原因不明)
    const response = await changeLeafStatusMutation();
    // Mutation送信後、エラーが返ってきた場合はユーザーに通知
    if (response.data?.changeLeafStatus.status == "error") {
      toast({
        title: "エラーが発生しました",
        position: "bottom-left",
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Box bg="white" w="100%" p={5} color="white">
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
      </Box>
      {treeData &&
        treeData.map((techTreeData: any, indexOfTreeData: number) => {
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
                  {treeData?.[indexOfTreeData].branches &&
                    treeData?.[indexOfTreeData].branches.map(
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
                                    {treeData?.[indexOfTreeData].branches[
                                      indexOfBranchData
                                    ].leafs &&
                                      treeData?.[indexOfTreeData].branches[
                                        indexOfBranchData
                                      ].leafs.map(
                                        (
                                          techLeafData: any,
                                          indexOfLeafData: number,
                                        ) => {
                                          return (
                                            <Box key={indexOfLeafData} px={4}>
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
                                                      techTreeData.id,
                                                      treeData?.[
                                                        indexOfTreeData
                                                      ].branches[
                                                        indexOfBranchData
                                                      ].id,
                                                      treeData?.[
                                                        indexOfTreeData
                                                      ].branches[
                                                        indexOfBranchData
                                                      ].leafs[indexOfLeafData]
                                                        .id,
                                                      treeData?.[
                                                        indexOfTreeData
                                                      ].branches[
                                                        indexOfBranchData
                                                      ].leafs[indexOfLeafData]
                                                        .isStatus,
                                                    )
                                                  }
                                                  isChecked={
                                                    techLeafData.isStatus
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
