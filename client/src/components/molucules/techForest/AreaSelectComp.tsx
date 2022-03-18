import { FC } from "react";
import { useGetAllTechAreaQuery } from "../../../types/generated/graphql";
import { AreaSelectButton } from "../../atoms/techForest/AreaSelectButton";
import { Box, HStack } from "@chakra-ui/react";

type Props = {
  setAreaId: (AreaId: string | undefined) => void;
};

export const AreaSelectComp: FC<Props> = ({ setAreaId }) => {
  const { data } = useGetAllTechAreaQuery();
  // 技術エリアデータ(フロントエンド、バックエンド、etc...)
  const techAreaData = data?.getAllTechArea;
  // 技術エリアを変更するメソッド
  const changeArea = (indexOfTechArea: number) => {
    setAreaId(data?.getAllTechArea[indexOfTechArea].id);
  };
  return (
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
  );
};
