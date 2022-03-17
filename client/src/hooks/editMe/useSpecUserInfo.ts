import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCookies } from "react-cookie";
import * as yup from "yup";

import {
  GetSheetByUserIdDocument,
  GetUserByIdDocument,
  useGetSheetByUserIdQuery,
  useUpdateSpecProjectMutation,
  useUpdateSpecTechInfoMutation,
  useUpdateSpecUserInfoMutation,
} from "../../types/generated/graphql";
import { useToast } from "@chakra-ui/react";

/**
 * バリデーションチェック.
 */
const schema = yup.object().shape({
  //
  stuffID: yup
    .string()
    .trim()
    .required("スタッフIDを入力してください")
    .typeError("スタッフIDを入力してください")
    .max(5, "スタッフIDは5文字以内で入力してください"),
  age: yup
    .number()
    .required("年齢を入力して下さい")
    .typeError("年齢を入力して下さい"),
  gender: yup.string(),
  nearestStation: yup
    .string()
    .trim()
    .required("最寄駅を入力して下さい")
    .typeError("最寄駅を入力して下さい")
    .max(50, "最寄駅は50文字以内で入力して下さい"),
  nearestLine: yup
    .string()
    .trim()
    .required("最寄路線を入力して下さい")
    .typeError("最寄路線を入力して下さい")
    .max(50, "最寄路線は50文字以内で入力して下さい"),
  startWorkDate: yup
    .string()
    .trim()
    .required("稼働開始日を入力して下さい")
    .typeError("稼働開始日を入力して下さい")
    .max(50, "稼働開始日は50文字以内で入力して下さい"),
  seExpAmountYear: yup.number(),
  seExpAmountMonth: yup.number(),
  pgExpAmountYear: yup.number(),
  pgExpAmountMonth: yup.number(),
  itExpAmountYear: yup.number(),
  itExpAmountMonth: yup.number(),
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
export const useSpecUserInfo = (
  setMenuItem: Dispatch<SetStateAction<string>>,
  onClose: () => void,
) => {
  //cookieからID取得
  const [cookies] = useCookies();

  /**
   * スペックシート基本情報取得.
   */
  const { data } = useGetSheetByUserIdQuery({
    variables: {
      userId: cookies.ForestaID,
    },
  });

  const [stationData, setStdata] = useState(["", ""]);
  if (data?.user.node.userInfo.nearestStation) {
    const array = data?.user.node.userInfo.nearestStation.split("(");
    setStdata([...array]);
  }

  const station = stationData?.[0];
  const line = String(stationData?.[1]).replace(")", "");

  const [seHis, setSeHis] = useState(0);
  const [pgHis, setPgHis] = useState(0);
  const [itHis, setItHis] = useState(0);

  if (data?.user.node.userInfo.seExpAmount) {
    setSeHis(Number(data?.user.node.userInfo.seExpAmount));
  }

  if (data?.user.node.userInfo.seExpAmount) {
    setPgHis(Number(data?.user.node.userInfo.pgExpAmount));
  }

  if (data?.user.node.userInfo.seExpAmount) {
    setItHis(Number(data?.user.node.userInfo.itExpAmount));
  }

  const seYear = Math.floor(Number(seHis) / 12);
  const seMonth = Number(seHis) % 12;

  const pgYear = Math.floor(Number(pgHis) / 12);
  const pgMonth = Number(pgHis) % 12;

  const itYear = Math.floor(Number(itHis) / 12);
  const itMonth = Number(itHis) % 12;

  // バリデーション機能を呼び出し
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      stuffID: data?.user.node.userInfo.stuffID,
      age: data?.user.node.userInfo.age,
      gender: String(data?.user.node.userInfo.gender),
      nearestStation: station,
      nearestLine: line,
      startWorkDate: data?.user.node.userInfo.startWorkDate,
      seExpAmountYear: seYear,
      seExpAmountMonth: seMonth,
      pgExpAmountYear: pgYear,
      pgExpAmountMonth: pgMonth,
      itExpAmountYear: itYear,
      itExpAmountMonth: itMonth,
    },
  });

  // setValue("stuffID", data?.user.node.userInfo.stuffID);
  // setValue("age", data?.user.node.userInfo.age);
  // setValue("gender", data?.user.node.userInfo.gender);
  // setValue("nearestStation", station);
  // setValue("nearestLine", line);
  // setValue("startWorkDate", data?.user.node.userInfo.startWorkDate);
  // setValue("seExpAmountYear", seYear);
  // setValue("seExpAmountMonth", seMonth);
  // setValue("pgExpAmountYear", pgYear);
  // setValue("pgExpAmountMonth", pgMonth);
  // setValue("itExpAmountYear", itYear);
  // setValue("itExpAmountMonth", itMonth);

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
   * スペックシート基本情報更新.（リフェッチ機能）
   */
  const [updateSpecInfo] = useUpdateSpecUserInfoMutation({
    refetchQueries: [GetSheetByUserIdDocument], //データを表示するクエリーのDocument
    awaitRefetchQueries: true,
  });

  /**
   * 更新ボタンを押した時に呼ばれる
   * @param data - 入力したデータ
   */
  const onSubmit = useCallback(
    async (data: any) => {
      const neareData = `${data.nearestStation}(${data.nearestLine})`;
      const se = data.seExpAmountYear * 12 + data.seExpAmountMonth;
      const pg = data.pgExpAmountYear * 12 + data.pgExpAmountMonth;
      const it = data.itExpAmountYear * 12 + data.itExpAmountMonth;

      try {
        await updateSpecInfo({
          variables: {
            specUserInfo: {
              specUserInfoId: "",
              stuffID: data.stuffID,
              age: data.age,
              gender: data.geder,
              nearestStation: String(neareData),
              startWorkDate: data.startWorkDate,
              seExpAmount: Number(se),
              pgExpAmount: Number(pg),
              itExpAmount: Number(it),
            },
          },
        });
        cancel();
        toast({
          title: "更新しました",
          status: "success",
          isClosable: true,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [cancel, toast, updateSpecInfo],
  );

  return {
    useUpdateSpecProjectMutation,
    handleSubmit,
    cancel,
    register,
    errors,
    onSubmit,
    GetUserByIdDocument,
    updateSpecInfo,
  };
};
