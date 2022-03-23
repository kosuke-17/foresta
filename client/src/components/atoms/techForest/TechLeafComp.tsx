import { FC, memo, useState } from "react";
import { useChangeLeafStatusMutation } from "../../../types/generated/graphql";
import { GetUserLeafsByIdDocument } from "../../../types/generated/graphql";
import { Box, Text, HStack, Checkbox, useToast } from "@chakra-ui/react";

export type Props = {
  treeData: any;
  techLeafTextData: string;
  techLeafStatus: boolean;
  indexOfTreeData: number;
  indexOfBranchData: number;
  indexOfLeafData: number;
};

export const TechLeafComp: FC<Props> = memo(
  ({
    treeData,
    techLeafTextData,
    techLeafStatus,
    indexOfTreeData,
    indexOfLeafData,
    indexOfBranchData,
  }) => {
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
      <Box key={indexOfLeafData} px={4}>
        <HStack>
          <Text color="gray.600" fontSize="xl">
            {techLeafTextData}
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
            isChecked={techLeafStatus}
          />
        </HStack>
      </Box>
    );
  },
);
