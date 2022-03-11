import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";
import { useCookies } from "react-cookie";
import {
  useAddStudyStackMutation,
  GetAllStudyStackDocument,
} from "../../types/generated/graphql";

/**
 * 学習記録を記録するフックス
 * @param createdAt - 記録日
 * @param skillTagId - 学習技術
 * @param timeStack - 学習時間
 * @param content - メモ
 * @param onClose - モーダルを閉じるメソッド
 * @returns
 * addStack : 学習を記録する
 */
export const useAddStack = (
  createdAt: string,
  skillTagId: string,
  timeStack: number,
  content: string,
  onClose: () => void,
) => {
  //クッキー情報取得
  const [cookies] = useCookies();
  //トーストアラート
  const toast = useToast();
  //記録追加メソッド（リフェッチ機能）
  const [addStudyStack] = useAddStudyStackMutation({
    variables: {
      stack: {
        createdAt,
        skillTagId,
        timeStack,
        content,
        //一旦指定のユーザー
        userId: cookies.ForestaID,
      },
    },
    refetchQueries: [GetAllStudyStackDocument], //データを表示するクエリーのDocument
  });

  //記録追加
  const addStack = useCallback(async () => {
    const addStackData = await addStudyStack();
    if (addStackData.data?.addStudyStack.status === "success") {
      toast({ title: "学習を記録しました", status: "success" });
      onClose();
    } else if (addStackData.data?.addStudyStack.status === "error") {
      toast({ title: "記録に失敗しました", status: "error" });
      onClose();
    }
  }, [addStudyStack, onClose, toast]);
  return { addStack };
};
