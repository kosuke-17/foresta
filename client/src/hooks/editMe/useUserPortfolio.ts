import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  GetUserPortfolioByIdDocument,
  Portfolio,
  useRemovePortfolioMutation,
  useUpdatePortfolioMutation,
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
  portfolioData: Portfolio,
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
    defaultValues: {
      title: portfolioData.title,
      description: portfolioData.description,
      img: portfolioData.img,
      portfolioURL: portfolioData.portfolioURL,
    },
  });

  //トーストの使用
  const toast = useToast();

  //使用技術の配列
  const [hookSkillArray, setHookSkillArray] = useState<Array<string>>([
    ...portfolioData.skills,
  ]);

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
   * 制作物情報更新.（リフェッチ機能）
   */
  const [updatePortfolio] = useUpdatePortfolioMutation({
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
              portfolioId: portfolioData.id,
              title: data.title,
              description: data.description,
              img: data.img,
              portfolioURL: data.portfolioURL,
              skills: hookSkillArray,
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
    [cancel, hookSkillArray, portfolioData.id, toast, updatePortfolio],
  );

  /**
   * 制作物情報更新(削除用).（リフェッチ機能）
   */
  const [deletePortfolio] = useRemovePortfolioMutation({
    refetchQueries: [GetUserPortfolioByIdDocument], //データを表示するクエリーのDocument
    awaitRefetchQueries: true,
  });

  /**
   * 削除ボタンを押した際に呼ばれる.
   */
  const onDelete = useCallback(async () => {
    try {
      await deletePortfolio({
        variables: { portfolioId: portfolioData.id },
      });
      toast({
        title: "削除しました",
        position: "bottom-left",
        status: "success",
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
  }, [cancel, deletePortfolio, portfolioData.id, toast]);

  return {
    handleSubmit,
    cancel,
    register,
    errors,
    onSubmit,
    hookSkillArray,
    setHookSkillArray,
    addSkill,
    onDelete,
  };
};
