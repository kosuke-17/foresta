import { memo, FC } from "react";
import { useCookies } from "react-cookie";
import { Flex, Spinner } from "@chakra-ui/react";
import styled from "styled-components";

import { ProgressComp } from "../techForest/ProgressComp";
import { useGetUserOnlyTreeByIdQuery } from "../../../types/generated/graphql";
import { TreeOnlyType } from "../../../types/types";

/**
 * 技術ツリー表示コーナー.
 */
export const MyTechStack: FC = memo(() => {
  //cookieを使用
  const [cookies] = useCookies();

  /**
   * 技術ツリーデータ取得.
   */
  const { data, loading, error } = useGetUserOnlyTreeByIdQuery({
    variables: {
      userToken: cookies.ForestaID,
    },
  });

  //技術ツリーのデータ
  const treeData = data?.tree.node.myForest as Array<TreeOnlyType>;

  //読み込み中時の表示
  if (loading) {
    return (
      <Flex justifyContent="center">
        <Spinner color="green.400" />
      </Flex>
    );
  }
  //エラー時の表示
  if (error) {
    return <Flex justifyContent="center">Error</Flex>;
  }

  return (
    <>
      <_HiddenScrollBar className="overflow-auto h-screen">
        {treeData &&
          treeData.map((item) => (
            <_Progress key={item.id}>
              <ProgressComp
                TreeName={item.treeName}
                AchievementRate={item.achievementRate}
              />
            </_Progress>
          ))}
      </_HiddenScrollBar>
    </>
  );
});

//小窓
const _HiddenScrollBar = styled.div`
  overflow: auto;
  height: 350px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

//技術ツリー
const _Progress = styled.div`
  margin-top: 20px;
`;
