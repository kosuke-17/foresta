import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCookies } from "react-cookie";

import {
  GetUserPortfolioByIdDocument,
  useCreatePortfolioMutation,
  useGetSpreadSheetIdQuery,
} from "../../types/generated/graphql";
import { useToast } from "@chakra-ui/react";

/**
 * バリデーションチェック.
 */
const schema = yup.object().shape({
  //プロジェクト名
  title: yup.string(),
  //詳細
  description: yup.string(),
  //画像URL
  img: yup.string(),
  //URL
  portfolioURL: yup.string(),
  //specSheetId
  specSheetId: yup.string(),
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
export const useNewPortfolio = (
  setMenuItem: Dispatch<SetStateAction<string>>,
  onClose: () => void,
) => {
  //cookieからID取得
  const [cookies] = useCookies();

  const { data } = useGetSpreadSheetIdQuery({
    variables: {
      userToken: cookies.ForestaID,
    },
  });

  const specSheetId = data?.getUserById.node.spreadSheetID;

  // バリデーション機能を呼び出し
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  setValue("specSheetId", specSheetId);

  //トーストの使用
  const toast = useToast();

  //使用技術の配列
  const [hookSkillArray, setHookSkillArray] = useState<Array<string>>([]);

  /**
   * 技術の追加.
   */
  const addSkill = useCallback(
    (skill: string) => {
      if (skill === "") {
        return;
      }
      const array = hookSkillArray;
      array.push(skill);
      setHookSkillArray([...array]);
    },
    [hookSkillArray, setHookSkillArray],
  );

  /**
   * キャンセルボタンを押した時に呼ばれる.
   */
  const cancel = useCallback(() => {
    onClose();
    setMenuItem("");
  }, [onClose, setMenuItem]);

  /**
   * 制作物情報新規追加.（リフェッチ機能）
   */
  const [updatePortfolio] = useCreatePortfolioMutation({
    refetchQueries: [GetUserPortfolioByIdDocument], //データを表示するクエリーのDocument
    awaitRefetchQueries: true,
  });

  /**
   * 更新ボタンを押した時に呼ばれる
   * @param data - 入力したデータ
   */
  const onSubmit = useCallback(
    async (data: any) => {
      try {
        await updatePortfolio({
          variables: {
            portfolio: {
              title: data.title,
              description: data.description,
              img: data.img,
              portfolioURL: data.portfolioURL,
              skills: hookSkillArray,
              userId: cookies.ForestaID,
              specSheetId: data.specSheetId,
            },
          },
        });
        cancel();
        toast({
          title: "追加しました",
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
    [cancel, cookies.ForestaID, hookSkillArray, toast, updatePortfolio],
  );

  return {
    handleSubmit,
    cancel,
    register,
    errors,
    onSubmit,
    hookSkillArray,
    setHookSkillArray,
    addSkill,
  };
};
