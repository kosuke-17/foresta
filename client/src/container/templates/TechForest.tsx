import { FC, useState } from "react";
import { useGetTechArea } from "../../hooks/techforest/useGetTechArea";
import { AreaSelectButton } from "../../components/atoms/techForest/AreaSelectButton";
import { TechTreeComp } from "../../components/organisms/techForest/TechTreeComp";
import { useGetUserLeafsByIdQuery } from "../../types/generated/graphql";
import { Box, HStack } from "@chakra-ui/react";

export const TechForest: FC = () => {
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
      userId: "6231edea9c926dc262fc12d9", // ポストマンID
    },
  });
  // 技術ツリーデータ(技術エリアデータの状態と一致しているものを絞り込み)
  const treeData = data?.getUserLeafsById.node.myForest.filter(
    (element: any) => element.areaId == areaId,
  );

  return (
    <div>
      <Box bg="white" w="100%" p={5} color="white">
        <HStack spacing="24px">
          {techAreaData &&
            techAreaData.map((techAreaData: any, indexOfTechArea: number) => {
              return (
                <AreaSelectButton
                  key={indexOfTechArea}
                  techAreaData={techAreaData}
                  indexOfTechArea={indexOfTechArea}
                  changeArea={changeArea}
                />
              );
            })}
        </HStack>
      </Box>
      {treeData &&
        treeData.map((techTreeData: any, indexOfTreeData: number) => {
          return (
            <TechTreeComp
              key={indexOfTreeData}
              treeData={treeData}
              techTreeData={techTreeData}
              indexOfTreeData={indexOfTreeData}
            />
          );
        })}
    </div>
  );
};
