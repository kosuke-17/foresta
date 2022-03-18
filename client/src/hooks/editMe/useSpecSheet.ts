import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  GetPrAndSheetByUserIdDocument,
  useGetPrAndSheetByUserIdQuery,
  useUpdateSpecSheetMutation,
} from "../../types/generated/graphql";
import { useCookies } from "react-cookie";

import {
  GetUserByIdDocument,
  useUpdateUserMutation,
} from "../../types/generated/graphql";

/**
 * バリデーションチェック.
 */
const schema = yup.object().shape({
  //業務外のバリデーション
  studyOnOwnTime: yup
    .string()
    .trim()
    .required("業務外の取り組みを入力してください"),
  //資格アカウントのバリデーション
  certification: yup.string().trim().required("資格を入力してください"),
  // PRのバリデーション
  selfIntro: yup.string().trim().required("PRを入力してください"),
});

/**
 * public部分スペックシートその他情報編集メソッド.
 * @returns
 * - register:入力したデータ
 * - handleSubmit:データを入力した際のリアルタイム更新
 * - errors:エラー
 * - onSubmit:更新ボタンを押した時のメソッド
 */
export const useSpecSheet = (
  // userData: UserType,
  setMenuItem: Dispatch<SetStateAction<string>>,
  onClose: () => void,
) => {
  const [cookies] = useCookies();
  const { data: specSheetData } = useGetPrAndSheetByUserIdQuery({
    variables: {
      userId: cookies.ForestaID,
    },
  });

  // バリデーション機能を呼び出し
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    //デフォルト値をセット
    defaultValues: {
      studyOnOwnTime: specSheetData?.other.node.studyOnOwnTime,
      certification: specSheetData?.other.node.certification,
      selfIntro: specSheetData?.pr.node.selfIntro,
    },
  });

  // 前職のデータの型を指定
  const preData = specSheetData?.other.node.prevJobs as Array<{
    content: string;
  }>;

  // 前職のデフォルト値をセット
  const [prevJobs, setPrevJobs] = useState(preData);

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
  const [updateSpecSheet] = useUpdateSpecSheetMutation({
    refetchQueries: [GetPrAndSheetByUserIdDocument], //データを表示するクエリーのDocument
    awaitRefetchQueries: true,
  });

  /**
   * 更新ボタンを押した時に呼ばれる
   * @param data - 入力したデータ
   */
  const onSubmit = useCallback(
    async (data: any) => {
      // データ送信用にフォーマット
      const jobs = new Array<string>();
      prevJobs?.map((item) => {
        jobs.push(item.content);
      });

      //空白の入力欄は削除
      const formatJobs = jobs.filter((blank) => blank);

      try {
        await updateSpecSheet({
          variables: {
            specSheet: {
              specSheetId: specSheetData?.other.node.id as string,
              certification: data.certification,
              prevJobs: formatJobs,
              selfIntro: data.selfIntro,
              studyOnOwnTime: data.studyOnOwnTime,
            },
          },
        });
        cancel();
      } catch (error) {
        console.log(error);
      }
    },

    [cancel, prevJobs, specSheetData?.other.node.id, updateSpecSheet],
  );

  return {
    useUpdateUserMutation,
    handleSubmit,
    cancel,
    register,
    errors,
    onSubmit,
    specSheetData,
    GetUserByIdDocument,
    updateSpecSheet,
    prevJobs,
    setPrevJobs,
    setValue,
    watch,
  };
};
