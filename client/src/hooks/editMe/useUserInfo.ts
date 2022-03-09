import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  GetUserByIdDocument,
  useUpdateUserMutation,
} from "../../types/generated/graphql";

/**
 * バリデーションチェック.
 */
const schema = yup.object().shape({
  //氏名のバリデーション
  name: yup
    .string()
    .trim()
    .required("氏名を入力してください")
    .max(15, "氏名は15文字以内で入力してください"),
  //職種のバリデーション
  jobType: yup.string().required("職種を入力して下さい"),
  //Githubアカウントのバリデーション
  githubURL: yup
    .string()
    .trim()
    .required("GitHubアカウント名を入力して下さい")
    .max(39, "39文字以内で入力して下さい"),
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
export const useUserInfo = (
  userData: {
    name: string | undefined;
    jobType: string | undefined;
    github: string | undefined;
  },
  setMenuItem: Dispatch<SetStateAction<string>>,
  onClose: () => void,
) => {
  // バリデーション機能を呼び出し
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    //初期値はログインしている人のデータを入れる
    defaultValues: {
      name: userData.name,
      jobType: userData.jobType,
      githubURL: userData.github,
    },
  });

  /**
   * キャンセルボタンを押した時に呼ばれる
   */
  const cancel = () => {
    onClose();
    setMenuItem("");
  };

  /**
   * ユーザ情報更新.（リフェッチ機能）
   */
  const [updateUserInfo] = useUpdateUserMutation({
    refetchQueries: [GetUserByIdDocument], //データを表示するクエリーのDocument
    awaitRefetchQueries: true,
  });

  /**
   * 更新ボタンを押した時に呼ばれる
   * @param data - 入力したデータ
   */
  const onSubmit = async (data: any) => {
    try {
      await updateUserInfo({
        variables: {
          user: {
            userId: "621b4b55e9204efe7d8f594a",
            name: data.name,
            jobType: data.jobType,
            githubURL: data.githubURL,
          },
        },
      });
      onClose();
      setMenuItem("");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    useUpdateUserMutation,
    handleSubmit,
    cancel,
    register,
    errors,
    onSubmit,
    userData,
    GetUserByIdDocument,
    updateUserInfo,
  };
};
