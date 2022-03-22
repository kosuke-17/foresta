import { Dispatch, SetStateAction, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGetUserByIdQuery } from "../../types/generated/graphql";
import { useCookies } from "react-cookie";

import {
  GetUserByIdDocument,
  useUpdateUserMutation,
} from "../../types/generated/graphql";
import { useToast } from "@chakra-ui/react";

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
  //スプレッドシートID
  spreadSheetID: yup
    .string()
    .trim()
    .required("スプレッドシートIDを入力して下さい"),
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
  // userData: UserType,
  setMenuItem: Dispatch<SetStateAction<string>>,
  onClose: () => void,
) => {
  //トーストの使用
  const toast = useToast();

  //cookieからID取得
  const [cookies] = useCookies();
  const { data: userData } = useGetUserByIdQuery({
    variables: {
      id: cookies.ForestaID,
    },
  });
  const user = userData?.user.node;

  // バリデーション機能を呼び出し
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  //初期値はログインしている人のデータを入れる
  setValue("name", user?.name);
  setValue("jobType", user?.jobType);
  setValue("githubURL", user?.githubURL);
  setValue("spreadSheetID", user?.spreadSheetID);

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
    async (data: any) => {
      try {
        await updateUserInfo({
          variables: {
            user: {
              userId: cookies.ForestaID, //受け取ったデータそのまま
              name: data.name,
              jobType: data.jobType,
              githubURL: data.githubURL,
              spreadSheetID: data.spreadSheetID,
            },
          },
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
    [cancel, cookies.ForestaID, toast, updateUserInfo],
  );

  return {
    useUpdateUserMutation,
    handleSubmit,
    cancel,
    register,
    errors,
    onSubmit,
    GetUserByIdDocument,
    updateUserInfo,
  };
};
