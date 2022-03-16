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
   * スプレッドシートIDだけ取得.
   * @remarks 受け取ったスプレッドシートIDがnullの場合があるため
   */

  const { data } = useGetSheetSkillByUserIdQuery({
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
  });

  setValue("devRoles", data?.skills.node.techInfo.devRoles);
  setValue("operationEnvs", data?.skills.node.techInfo.operationEnvs);
  setValue("languages", data?.skills.node.techInfo.languages);
  setValue("frameworks", data?.skills.node.techInfo.frameworks);
  setValue("libraries", data?.skills.node.techInfo.libraries);
  setValue("otherTools", data?.skills.node.techInfo.otherTools);
  setValue("specSheetId", data?.skills.node.techInfo.specSheetId);

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
  const onSubmit = useCallback(async (data: any) => {
    //nullだった場合、[]に置き換える
    const os = data.operationEnvs != null ? data.operationEnvs : [];
    const lang = data.languages != null ? data.languages : [];
    const frame = data.frameworks != null ? data.frameworks : [];
    const lib = data.libraries != null ? data.libraries : [];
    const other = data.otherTools != null ? data.otherTools : [];
    const rol = data.devRoles != null ? data.devRoles : [];

    //送るデータ
    const specTechInfo = {
      specTechInfoId: "",
      operationEnvs: os,
      languages: lang,
      frameworks: frame,
      libraries: lib,
      otherTools: other,
      devRoles: rol,
    };

    console.dir(JSON.stringify(specTechInfo));
    // try {
    //   await updateSpecSkill({
    //     variables: { specTechInfo },
    //   });
    //   cancel();
    //   toast({
    //     title: "更新しました",
    //     status: "success",
    //     isClosable: true,
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  }, []);

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
