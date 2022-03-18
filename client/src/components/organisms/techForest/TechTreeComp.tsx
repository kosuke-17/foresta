import { FC, memo, useState } from "react";
import { TechBranchComp } from "../../molucules/techForest/TechBranchComp";
import { ProgressComp } from "../../molucules/techForest/ProgressComp";
import { useChangeLeafStatusMutation } from "../../../types/generated/graphql";
import { GetUserLeafsByIdDocument } from "../../../types/generated/graphql";
import { Box, Center, SimpleGrid, useToast } from "@chakra-ui/react";

type Props = {
  treeData: any;
};

export const TechTreeComp: FC<Props> = memo(({ treeData }) => {
  // エラー通知用のトースト
  const toast = useToast();
  // 技術ツリーIdの状態管理
  const [treeId, setTreeId] = useState<string>("");
  // 技術ブランチIdの状態管理
  const [branchId, setBranchId] = useState<string>("");
  // 技術リーフIdの状態管理
  const [leafId, setLeafId] = useState<string>("");
  // 習得状況の状態管理
  const [isStatus, setIsStatus] = useState<boolean>(false);
  // 技術リーフの取得状態を変更するMutation
  const [changeLeafStatusMutation] = useChangeLeafStatusMutation({
    variables: {
      techLeafInfo: {
        userLeafsId: "6231edea9c926dc262fc12e5", // ポストマンのuserLeafsId
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
    await setTreeId(treeId);
    setBranchId(branchId);
    setLeafId(leafId);
    setIsStatus(isStatus);
    // サーバーに技術リーフの習得状態を送信するMutationを実行
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
                  <ProgressComp techTreeData={techTreeData} />
                  {treeData?.[indexOfTreeData].branches &&
                    treeData?.[indexOfTreeData].branches.map(
                      (techBranchData: any, indexOfBranchData: number) => {
                        return (
                          <TechBranchComp
                            key={indexOfBranchData}
                            treeData={treeData}
                            techTreeData={techTreeData}
                            indexOfTreeData={indexOfTreeData}
                            techBranchData={techBranchData}
                            indexOfBranchData={indexOfBranchData}
                            cheakedLeaf={cheakedLeaf}
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
