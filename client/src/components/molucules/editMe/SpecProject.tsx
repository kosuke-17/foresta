import { memo, FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Button, Spinner, Flex } from "@chakra-ui/react";

import { SelectInput } from "../../atoms/editMe/SelectInput";
import { TextInput } from "../../atoms/editMe/TextInput";
import { useSpecProject } from "../../../hooks/editMe/useSpecProject";
import {
  SpecProjectSheet,
  useGetSheetProjectByUserIdQuery,
} from "../../../types/generated/graphql";

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

  const { data, loading, error } = useGetSheetProjectByUserIdQuery({
    variables: {
      userId: cookies.ForestaID,
    },
  });
  const projects = data?.projects.node.project as Array<SpecProjectSheet>;
  //テキストボックスに入れるデフォルト値
  const [projectData, setProjectData] = useState<Array<SpecProjectSheet>>([
    {
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
      specSheetId: "",
      startedAt: "",
    },
  ]);

  /**
   * デフォルト値を渡す際undefinedになってしまうので防止.
   */
  useEffect(() => {
    const array = [];
    for (const project of projects) {
      array.push({
        content: project.content,
        devRoles: project.devRoles,
        finishedAt: project.finishedAt,
        frameworks: project.frameworks,
        id: project.id,
        languages: project.languages,
        libraries: project.libraries,
        memberCount: project.memberCount,
        name: project.name,
        operationEnvs: project.operationEnvs,
        otherTools: project.otherTools,
        roleSharing: project.roleSharing,
        specSheetId: project.specSheetId,
        startedAt: project.startedAt,
      });
    }
    setProjectData(array);
  }, [projects]);

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
      <Button type="button" onClick={onClose} _focus={{ boxShadow: "none" }}>
        キャンセル
      </Button>
    </>
  );
});
