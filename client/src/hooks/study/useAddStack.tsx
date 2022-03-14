import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";
import { useCookies } from "react-cookie";
import { UseFormReset } from "react-hook-form";
import {
  useAddStudyStackMutation,
  GetAllStudyStackDocument,
} from "../../types/generated/graphql";

type AddStack = {
  createdAt: string;
  skillTagId: string;
  timeStack: number;
  content: string;
};

/**
 * 学習記録を追加するフックス.
 * @param onClose
 * @param reset
 * @returns addStack - 記録するメソッド
 */
export const useAddStack = (
  onClose: () => void,
  reset: UseFormReset<AddStack>,
) => {
  //クッキー情報取得
  const [cookies] = useCookies();
  //トーストアラート
  const toast = useToast();
  //記録追加ミューテーション（リフェッチ機能）
  const [addStudyStack] = useAddStudyStackMutation({
    refetchQueries: [GetAllStudyStackDocument], //データを表示するクエリーのDocument
  });

  /**
   * 学習を記録するメソッド
   * @param data - 入力した内容
   */
  const addStack = useCallback(
    async (data: AddStack) => {
      const addStackData = await addStudyStack({
        variables: {
          stack: {
            createdAt: data.createdAt,
            skillTagId: data.skillTagId,
            timeStack: data.timeStack,
            content: data.content,
            userId: cookies.ForestaID,
          },
        },
      });
      if (addStackData.data?.addStudyStack.status === "success") {
        toast({ title: "学習を記録しました", status: "success" });
        onClose();
        reset();
      } else if (addStackData.data?.addStudyStack.status === "error") {
        toast({ title: "記録に失敗しました", status: "error" });
        onClose();
        reset();
      }
    },
    [addStudyStack, cookies.ForestaID, onClose, reset, toast],
  );

  return { addStack };
};
