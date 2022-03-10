import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";
import {
  GetAllStudyStackDocument,
  useUpdateStudyStackMutation,
} from "../../types/generated/graphql";

/**
 * 学習記録を編集するフックス
 * @param createdAt - 記録日
 * @param skillTagId - 学習技術
 * @param timeStack - 学習時間
 * @param content - メモ
 * @param stackId - 学習記録ID
 * @param onClose - モーダルを閉じるメソッド
 * @returns
 * updateStack : 学習を編集する
 */
export const useUpdateStack = (
  createdAt: string,
  skillTagId: string,
  timeStack: number,
  content: string,
  stackId: string,
  onClose: () => void,
) => {
  //トーストアラート
  const toast = useToast();

  //記録編集メソッド
  const [updateMutation] = useUpdateStudyStackMutation({
    variables: {
      stack: {
        createdAt,
        skillTagId,
        timeStack,
        content,
        //一旦指定の記録ID
        studyStackId: stackId,
      },
    },
    refetchQueries: [GetAllStudyStackDocument],
  });

  //記録編集
  const updateStack = useCallback(async () => {
    const updateStackData = await updateMutation();
    if (updateStackData.data?.updateStudyStack.status === "success") {
      toast({ title: "学習記録を編集しました", status: "success" });
      onClose();
    } else if (updateStackData.data?.updateStudyStack.status === "error") {
      toast({ title: "編集に失敗しました", status: "error" });
      onClose();
    }
  }, [onClose, toast, updateMutation]);
  return { updateStack };
};
