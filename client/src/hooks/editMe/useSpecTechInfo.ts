import { Dispatch, SetStateAction, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCookies } from "react-cookie";
import * as yup from "yup";

import {
  GetSheetSkillByUserIdDocument,
  GetUserByIdDocument,
  useGetSheetSkillByUserIdQuery,
  useUpdateSpecProjectMutation,
  useUpdateSpecTechInfoMutation,
} from "../../types/generated/graphql";
import { useToast } from "@chakra-ui/react";

/**
 * バリデーションチェック.
 */
const schema = yup.object().shape({
  //ID
  id: yup.string(),
  //担当工程
  devRoles: yup.array().nullable(),
  //OS
  operationEnvs: yup.array().nullable(),
  //言語
  languages: yup.array().nullable(),
  //フレームワーク
  frameworks: yup.array().nullable(),
  //ライブラリ
  libraries: yup.array().nullable(),
  //その他ツール
  otherTools: yup.array().nullable(),
});

/**
 * public部分基本情報編集メソッド.
 * @returns
 * - register:入力したデータ
 * - handleSubmit:データを入力した際のリアルタイム更新
 * - errors:エラー
 * - onSubmit:更新ボタンを押した時のメソッド
 * @params userData - 初期表示用データ
 */
export const useSpecTechInfo = (
  setMenuItem: Dispatch<SetStateAction<string>>,
  onClose: () => void,
) => {
  //cookieからID取得
  const [cookies] = useCookies();

  /**
   * スキル要約取得.
   */

  const { data: skillData } = useGetSheetSkillByUserIdQuery({
    variables: {
      userId: cookies.ForestaID,
    },
  });
  // バリデーション機能を呼び出し
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    // defaultValues: {
    //   id: skillData?.skills.node.techInfo.id,
    //   devRoles: String(skillData?.skills.node.techInfo.devRoles),
    //   operationEnvs: skillData?.skills.node.techInfo.operationEnvs,
    //   languages: skillData?.skills.node.techInfo.languages,
    //   frameworks: skillData?.skills.node.techInfo.frameworks,
    //   libraries: skillData?.skills.node.techInfo.libraries,
    //   otherTools: skillData?.skills.node.techInfo.otherTools,
    //   specSheetId: skillData?.skills.node.techInfo.specSheetId,
    // },
  });

  setValue("id", skillData?.skills.node.techInfo.id);
  setValue("devRoles", skillData?.skills.node.techInfo.devRoles);
  setValue("operationEnvs", skillData?.skills.node.techInfo.operationEnvs);
  setValue("languages", skillData?.skills.node.techInfo.languages);
  setValue("frameworks", skillData?.skills.node.techInfo.frameworks);
  setValue("libraries", skillData?.skills.node.techInfo.libraries);
  setValue("otherTools", skillData?.skills.node.techInfo.otherTools);
  setValue("specSheetId", skillData?.skills.node.techInfo.specSheetId);

  //トーストの使用
  const toast = useToast();

  /**
   * キャンセルボタンを押した時に呼ばれる.
   */
  const cancel = useCallback(() => {
    onClose();
    setMenuItem("");
  }, [onClose, setMenuItem]);

  /**
   * スペックシートスキル要約更新.（リフェッチ機能）
   */
  const [updateSpecSkill] = useUpdateSpecTechInfoMutation({
    refetchQueries: [GetSheetSkillByUserIdDocument], //データを表示するクエリーのDocument
    awaitRefetchQueries: true,
  });

  /**
   * 更新ボタンを押した時に呼ばれる
   * @param data - 入力したデータ
   */
  const onSubmit = useCallback(
    async (data: any) => {
      //nullだった場合、[]に置き換える
      const os = data.operationEnvs != null ? data.operationEnvs : [];
      const lang = data.languages != null ? data.languages : [];
      const frame = data.frameworks != null ? data.frameworks : [];
      const lib = data.libraries != null ? data.libraries : [];
      const other = data.otherTools != null ? data.otherTools : [];
      const rol = data.devRoles != null ? data.devRoles : [];

      //送るデータ
      const specTechInfo = {
        specTechInfoId: data.id,
        operationEnvs: os,
        languages: lang,
        frameworks: frame,
        libraries: lib,
        otherTools: other,
        devRoles: rol,
      };

      try {
        await updateSpecSkill({
          variables: { specTechInfo },
        });
        cancel();
        toast({
          title: "更新しました",
          position: "bottom-left",
          status: "success",
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: "失敗しました",
          position: "bottom-left",
          status: "error",
          isClosable: true,
        });
      }
    },
    [cancel, toast, updateSpecSkill],
  );

  return {
    useUpdateSpecProjectMutation,
    handleSubmit,
    cancel,
    register,
    errors,
    onSubmit,
    GetUserByIdDocument,
    updateSpecSkill,
  };
};
