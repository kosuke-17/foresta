import { FC, useState } from "react";
import { AreaSelectComp } from "../../components/molucules/techForest/AreaSelectComp";
import { TechTreeComp } from "../../components/organisms/techForest/TechTreeComp";
import { useGetUserLeafsByIdQuery } from "../../types/generated/graphql";
import { Box, Center, SimpleGrid, useToast } from "@chakra-ui/react";

export const TechForest: FC = () => {
  // 技術エリアデータの状態管理、(初期値はフロントエンド)
  const [areaId, setAreaId] = useState<string | undefined>(
    "6219afb4d55e2e236b9062b8",
  );

  // 特定のユーザーが保有している技術データ
  const { data } = useGetUserLeafsByIdQuery({
    variables: {
      userId: "6231edea9c926dc262fc12d9", // ポストマンID
    },
  });
  // 技術ツリーデータ(技術エリアデータの状態と一致しているものを絞り込み)
  const treeData = data?.getUserLeafsById.node.myForest.filter(
    (element: any) => element.areaId == areaId,
  );

  return (
    <>
      <AreaSelectComp setAreaId={setAreaId} />
      <TechTreeComp treeData={treeData} />
    </>
  );
};
