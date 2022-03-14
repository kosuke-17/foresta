/**
 * 一旦コピペしただけ(未完成)
 */
import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  GetUserByIdDocument,
  useUpdateUserMutation,
} from "../../types/generated/graphql";
import { userInfoEditType, UserType } from "../../types/types";

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
export const useUserPortfolio = (
  userData: UserType,
  setMenuItem: Dispatch<SetStateAction<string>>,
  onClose: () => void,
) => {
  // バリデーション機能を呼び出し
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    //初期値はログインしている人のデータを入れる
    defaultValues: {
      name: userData?.name,
      jobType: userData?.jobType,
      githubURL: userData?.githubURL,
    },
  });

  /**
   * デフォルト値読み込み直し用.
   */
  useEffect(() => {
    reset({
      name: userData?.name,
      jobType: userData?.jobType,
      githubURL: userData?.githubURL,
    });
  }, [reset, userData?.githubURL, userData?.jobType, userData?.name]);

  /**
   * キャンセルボタンを押した時に呼ばれる.
   */
  const cancel = useCallback(() => {
    onClose();
    setMenuItem("");
  }, [onClose, setMenuItem]);

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
  const onSubmit = useCallback(
    async (data: userInfoEditType) => {
      try {
        await updateUserInfo({
          variables: {
            user: {
              userId: userData.id, //受け取ったデータそのまま
              name: data.name,
              jobType: data.jobType,
              githubURL: data.githubURL,
              spreadSheetID: userData.spreadSheetID, //受け取ったデータそのまま
            },
          },
        });
        cancel();
      } catch (error) {
        console.log(error);
      }
    },
    [cancel, updateUserInfo, userData],
  );

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
