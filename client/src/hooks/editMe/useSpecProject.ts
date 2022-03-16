import { Dispatch, SetStateAction, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCookies } from "react-cookie";
import * as yup from "yup";

import {
  GetSheetProjectByUserIdDocument,
  GetUserByIdDocument,
  SpecProjectSheet,
  useGetSpreadSheetIdQuery,
  useUpdateSpecProjectMutation,
} from "../../types/generated/graphql";
import { useToast } from "@chakra-ui/react";

/**
 * バリデーションチェック.
 */
const schema = yup.object().shape({
  //プロジェクト名
  name: yup
    .string()
    .trim()
    .required("プロジェクト名を入力してください")
    .typeError("プロジェクト名を入力してください")
    .max(50, "アカウント名は50文字以内で入力してください"),
  //プロジェクト開始日
  startedAt: yup.date().typeError("プロジェクト開始日を入力してください"),
  //プロジェクト終了日
  finishedAt: yup.date().typeError("プロジェクト終了日を入力してください"),
  //担当役割
  roleSharing: yup
    .string()
    .trim()
    .required("担当役割を入力してください")
    .typeError("担当役割を入力してください")
    .max(50, "担当役割名は50文字以内で入力してください"),
  //メンバー人数
  memberCount: yup
    .number()
    .required("メンバー人数を入力してください")
    .typeError("メンバー人数を入力してください")
    .max(10, "メンバー人数は10文字以内で入力してください"),
  //詳細
  content: yup
    .string()
    .trim()
    .required("詳細を入力してください")
    .typeError("詳細を入力してください")
    .max(150, "詳細は150文字以内で入力してください"),
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
export const useSpecProject = (
  projectData: SpecProjectSheet,
  setMenuItem: Dispatch<SetStateAction<string>>,
  onClose: () => void,
) => {
  //cookieからID取得
  const [cookies] = useCookies();

  /**
   * スプレッドシートIDだけ取得.
   * @remarks 受け取ったスプレッドシートIDがnullの場合があるため
   */
  const { data } = useGetSpreadSheetIdQuery({
    variables: {
      id: cookies.ForestaID,
    },
  });
  //スプレッドシートID
  const spId = data?.getUserById.node.spreadSheetID as string;

  // バリデーション機能を呼び出し
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: projectData.name,
      startedAt: projectData.startedAt,
      finishedAt: projectData.finishedAt,
      roleSharing: projectData.roleSharing,
      memberCount: projectData.memberCount,
      content: projectData.content,
      devRoles: String(projectData.devRoles),
      operationEnvs: String(projectData.operationEnvs),
      languages: String(projectData.languages),
      frameworks: String(projectData.frameworks),
      libraries: String(projectData.libraries),
      otherTools: String(projectData.otherTools),
    },
  });

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
   * スペックシート開発経験更新.（リフェッチ機能）
   */
  const [updateUserInfo] = useUpdateSpecProjectMutation({
    refetchQueries: [GetSheetProjectByUserIdDocument], //データを表示するクエリーのDocument
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
      const dev = data.devRoles != null ? data.devRoles : [];

      //送るデータ
      const specProject = {
        specProjectId: projectData.id, //開発経験ID
        name: data.name, //プロジェクト名
        startedAt: String(data.startedAt), //開始日
        finishedAt: String(data.finishedAt), //終了日
        roleSharing: data.roleSharing, //担当役割(PGとか)
        memberCount: data.memberCount, //メンバー人数
        content: data.content, //詳細
        operationEnvs: os, //OS
        languages: lang, //言語
        frameworks: frame, //フレームワーク
        libraries: lib, //ライブラリ
        otherTools: other, //その他ツール
        devRoles: dev, //担当工程
        specSheetId: spId, //スプレッドシートID
      };
      console.dir(JSON.stringify(specProject));
      // try {
      //   await updateUserInfo({
      //     variables: { specProject },
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
    },
    [projectData.id, spId],
  );

  return {
    useUpdateSpecProjectMutation,
    handleSubmit,
    cancel,
    register,
    errors,
    onSubmit,
    GetUserByIdDocument,
    updateUserInfo,
  };
};
