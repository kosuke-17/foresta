import { memo, FC, Dispatch, SetStateAction, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Button, Spinner, Flex, Box, Input } from "@chakra-ui/react";

import { SelectInput } from "../../../atoms/editMe/SelectInput";
import { TextInput } from "../../../atoms/editMe/TextInput";
import { useSpecProject } from "../../../../hooks/editMe/useSpecProject";
import {
  SpecProjectSheet,
  useGetSheetProjectByUserIdQuery,
} from "../../../../types/generated/graphql";
import { SpecPjItem } from "./SpecPjItem";
import styled from "styled-components";

type Props = {
  setMenuItem: Dispatch<SetStateAction<string>>; //menuItemセット用
  onClose: () => void; //モーダルを閉じるメソッド
};

/**
 * スペックシート開発経験編集画面.
 * @remarks プロジェクト名, 期間(始め&終わり), 役割, 人数, 内容, OS, 言語, フレームワーク, ライブラリ, ツール, 役割
 */
export const SpecProject: FC<Props> = memo(({ setMenuItem, onClose }) => {
  //cookieからID取得
  const [cookies] = useCookies();

  /**
   * 開発経験情報の取得.
   */
  const { data, loading, error } = useGetSheetProjectByUserIdQuery({
    variables: {
      // userId: "6226b03e85d7777719aa5a98", //いのすけ
      userId: cookies.ForestaID,
    },
  });
  const projectData = data?.projects.node.project as Array<SpecProjectSheet>;

  const [nullProjectData] = useState({
    content: "",
    devRoles: [],
    finishedAt: "",
    frameworks: [],
    id: "",
    languages: [],
    libraries: [],
    memberCount: 0,
    name: "",
    operationEnvs: [],
    otherTools: [],
    roleSharing: "",
    specSheetId: "", //別で取得
    startedAt: "",
  });

  const [indexNum, setIndexNum] = useState(-1);
  const [newItem, setNewItem] = useState(false);

  //読み込み中時の表示
  if (loading) {
    return (
      <Flex justifyContent="center">
        <Spinner color="green.400" />
      </Flex>
    );
  }

  return (
    <>
      {error && !newItem && (
        <Box>
          登録がありません
          <_BtnItem>
            <Button onClick={() => setNewItem(true)}>登録</Button>
          </_BtnItem>
        </Box>
      )}
      {projectData && (
        <>
          {indexNum === -1 && !newItem && (
            <>
              {projectData[0] ? (
                <Box>
                  <Flex>
                    <_TextItem>{projectData[0].name}</_TextItem>
                    <Flex gap={3}>
                      <Button onClick={() => setIndexNum(0)}>編集</Button>
                      <Button>削除</Button>
                    </Flex>
                  </Flex>
                </Box>
              ) : (
                <Box>
                  <Flex>
                    <_TextItem>登録がありません</_TextItem>
                    <_BtnItem>
                      <Button onClick={() => setNewItem(true)}>登録</Button>
                    </_BtnItem>
                  </Flex>
                </Box>
              )}
              {projectData[1] ? (
                <Box>
                  <Flex>
                    <_TextItem>{projectData[1].name}</_TextItem>
                    <Flex gap={3}>
                      <Button onClick={() => setIndexNum(1)}>編集</Button>
                      <Button>削除</Button>
                    </Flex>
                  </Flex>
                </Box>
              ) : (
                <Box>
                  <Flex>
                    <_TextItem>登録がありません</_TextItem>
                    <_BtnItem>
                      <Button onClick={() => setNewItem(true)}>登録</Button>
                    </_BtnItem>
                  </Flex>
                </Box>
              )}
              {projectData[2] ? (
                <Box>
                  <Flex>
                    <_TextItem>{projectData[2].name}</_TextItem>
                    <Flex gap={3}>
                      <Button onClick={() => setIndexNum(2)}>編集</Button>
                      <Button>削除</Button>
                    </Flex>
                  </Flex>
                </Box>
              ) : (
                <Box>
                  <Flex>
                    <_TextItem>登録がありません</_TextItem>
                    <_BtnItem>
                      <Button onClick={() => setNewItem(true)}>登録</Button>
                    </_BtnItem>
                  </Flex>
                </Box>
              )}
              <Button
                type="button"
                onClick={onClose}
                _focus={{ boxShadow: "none" }}
                mt={5}
              >
                キャンセル
              </Button>
            </>
          )}
        </>
      )}

      {indexNum != -1 && (
        <>
          <SpecPjItem
            setMenuItem={setMenuItem}
            onClose={onClose}
            projectData={projectData[indexNum]}
            setIndexNum={setIndexNum}
            setNewItem={setNewItem}
          />
        </>
      )}

      {newItem && (
        <>
          <SpecPjItem
            setMenuItem={setMenuItem}
            onClose={onClose}
            projectData={nullProjectData}
            setIndexNum={setIndexNum}
            setNewItem={setNewItem}
          />
        </>
      )}
    </>
  );
});

const _BtnItem = styled.div`
  margin-top: 10px;
`;

const _TextItem = styled.div`
  width: 300px;
`;
