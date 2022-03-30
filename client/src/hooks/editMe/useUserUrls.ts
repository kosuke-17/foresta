import { Dispatch, SetStateAction, useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  GetUserByIdDocument,
  useAddUserUrlsMutation,
  useRemoveUserUrlsMutation,
  useUpdateUserMutation,
} from "../../types/generated/graphql";
import { useToast } from "@chakra-ui/react";
import { UrlType } from "../../types/types";

/**
 * バリデーションチェック.
 */
const schema = yup.object().shape({
  urlName: yup
    .string()
    .trim()
    .required("タイトルを入力して下さい")
    .max(50, "稼働開始日は50文字以内で入力して下さい"),
  url: yup.string().trim().required("URLを入力して下さい"),
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
export const useUserUrls = (
  urlTableId: string,
  setMenuItem: Dispatch<SetStateAction<string>>,
  onClose: () => void,
) => {
  // バリデーション機能を呼び出し
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UrlType>({
    resolver: yupResolver(schema),
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
   * URL追加.（リフェッチ機能）
   */
  const [updatePortfolio] = useAddUserUrlsMutation({
    refetchQueries: [GetUserByIdDocument], //データを表示するクエリーのDocument
    awaitRefetchQueries: true,
  });

  /**
   * 更新ボタンを押した時に呼ばれる
   * @param data - 入力したデータ
   */
  const onSubmit: SubmitHandler<UrlType> = useCallback(
    async (data: UrlType) => {
      try {
        await updatePortfolio({
          variables: {
            urlData: {
              urlName: data.urlName,
              url: data.url,
              urlId: urlTableId,
            },
          },
        });

        toast({
          title: "追加しました",
          status: "success",
          position: "bottom-left",
          isClosable: true,
        });
        cancel();
      } catch (error) {
        toast({
          title: "失敗しました",
          position: "bottom-left",
          status: "error",
          isClosable: true,
        });
      }
    },
    [cancel, toast, updatePortfolio, urlTableId],
  );

  /**
   * URL削除用.（リフェッチ機能）
   */
  const [deleteUrl] = useRemoveUserUrlsMutation({
    refetchQueries: [GetUserByIdDocument], //データを表示するクエリーのDocument
    awaitRefetchQueries: true,
  });

  /**
   * 削除ボタンを押した際に呼ばれる.
   */
  const onDelete = useCallback(
    async (urlId: string) => {
      try {
        await deleteUrl({
          variables: {
            urlData: {
              urlId: urlId,
              userUrlsId: urlTableId,
            },
          },
        });
        toast({
          title: "削除しました",
          status: "success",
          position: "bottom-left",
          isClosable: true,
        });
        cancel();
      } catch (error) {
        toast({
          title: "失敗しました",
          position: "bottom-left",
          status: "error",
          isClosable: true,
        });
      }
    },
    [cancel, deleteUrl, toast, urlTableId],
  );

  return {
    useUpdateUserMutation,
    handleSubmit,
    cancel,
    register,
    errors,
    deleteUrl,
    onDelete,
    onSubmit,
  };
};
