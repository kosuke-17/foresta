import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";
import {
  GetAllStudyStackDocument,
  useRemoveStudyStackMutation,
} from "../../types/generated/graphql";

/**
 * 学習記録を削除するフックス
 * @param stackId - 学習記録ID
 * @param onClose - モーダルを閉じる
 * @returns 
 * removeStack : 学習を削除する
 */
export const useRemoveStack = (stackId: string, onClose: () => void) => {
  //トーストアラート
  const toast = useToast();

  //記録削除メソッド
  const [removeStudyStack] = useRemoveStudyStackMutation({
    variables: {
      //一旦指定の記録ID
      studyStackId: stackId,
    },
    refetchQueries: [GetAllStudyStackDocument],
  });

  //記録削除
  const removeStack = useCallback(async () => {
    const removeStackData = await removeStudyStack();
    if (removeStackData.data?.removeStudyStack.status === "success") {
      toast({ title: "学習を削除しました", status: "success" });
      onClose();
    } else if (removeStackData.data?.removeStudyStack.status === "error") {
      toast({ title: "削除に失敗しました", status: "error" });
      onClose();
    }
  }, [onClose, removeStudyStack, toast]);
  return { removeStack };
};
