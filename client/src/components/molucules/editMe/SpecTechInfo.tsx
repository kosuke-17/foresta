import { memo, FC, Dispatch, SetStateAction } from "react";
import { useCookies } from "react-cookie";
import { Button, Spinner, Flex } from "@chakra-ui/react";

import { SelectInput } from "../../atoms/editMe/SelectInput";
import { TextInput } from "../../atoms/editMe/TextInput";
import { useSpecTechInfo } from "../../../hooks/editMe/useSpecTechInfo";
import {
  useGetAllSkillQuery,
  useGetSheetSkillByUserIdQuery,
} from "../../../types/generated/graphql";
import styled from "styled-components";
import { CheckInput } from "../../atoms/editMe/CheckInput";

type Props = {
  setMenuItem: Dispatch<SetStateAction<string>>; //menuItemセット用
  onClose: () => void; //モーダルを閉じるメソッド
};

/**
 * スペックシートスキル要約編集画面.
 * @remarks OS、言語、フレームワーク、ライブラリ、ツール、役割
 */
export const SpecTechInfo: FC<Props> = memo(({ setMenuItem, onClose }) => {
  const { data, loading, error } = useGetAllSkillQuery();

  //セレクトボックス選択肢用
  //担当工程
  const rol = ["詳細設計", "実装", "デバッグ", "テスト"];
  //OS
  const os = data?.skills[0].data as Array<string>;
  //言語
  const lang = data?.skills[1].data as Array<string>;
  //フレームワーク
  const frame = data?.skills[2].data as Array<string>;
  //ライブラリ
  const lib = data?.skills[3].data as Array<string>;
  //その他技術
  const other = data?.skills[4].data as Array<string>;

  //hooksを使用
  const { handleSubmit, register, onSubmit } = useSpecTechInfo(
    setMenuItem, //メニューアイテムを空にする
    onClose, //モーダルを閉じるメソッド
  );

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
      {/* 担当工程 */}
      <_TextItem>
        <CheckInput
          label="担当工程"
          registers={register("devRoles")}
          array={rol}
        />
      </_TextItem>

      {/* OS */}
      <_TextItem>
        <CheckInput
          label="動作環境（OS）"
          registers={register("operationEnvs")}
          array={os}
        />
      </_TextItem>

      {/* 言語 */}
      <_TextItem>
        <CheckInput
          label="言語"
          registers={register("languages")}
          array={lang}
        />
      </_TextItem>

      {/* フレームワーク */}
      <_TextItem>
        <CheckInput
          label="フレームワーク"
          registers={register("frameworks")}
          array={frame}
        />
      </_TextItem>

      {/* ライブラリ */}
      <_TextItem>
        <CheckInput
          label="ライブラリ"
          registers={register("libraries")}
          array={lib}
        />
      </_TextItem>

      {/* ツール */}
      <_TextItem>
        <CheckInput
          label="ツール,その他"
          registers={register("otherTools")}
          array={other}
        />
      </_TextItem>
      <Flex gap={3} justifyContent="center">
        <Button onClick={handleSubmit(onSubmit)}>登録</Button>
        <Button type="button" onClick={onClose} _focus={{ boxShadow: "none" }}>
          キャンセル
        </Button>
      </Flex>
    </>
  );
});

const _TextItem = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
`;
