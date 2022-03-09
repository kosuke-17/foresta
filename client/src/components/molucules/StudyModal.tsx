import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";
import {
  GetAllStudyStackDocument,
  useAddStudyStackMutation,
  useUpdateStudyStackMutation,
  useRemoveStudyStackMutation,
} from "../../types/generated/graphql";
import { AddStackButton } from "../atoms/study/AddStackBotton";
import { RemoveStackButton } from "../atoms/study/RemoveStackBotton";
import { UpdateStackButton } from "../atoms/study/updateStackBotton";

type Props = {
  title: string;
  buttonTitle: string;
  // onClick?: (id: string) => void;
};

export const StudyModal: FC<Props> = memo((props) => {
  //モーダルの開閉
  const { isOpen, onOpen, onClose } = useDisclosure();
  //propsでもらうもの
  const { title, buttonTitle } = props;
  //トーストアラート
  const toast = useToast();

  //記録日
  const [createdAt, setCreatedAt] = useState<string>("");
  const onChangeCreatedAt = (e: ChangeEvent<HTMLInputElement>) =>
    setCreatedAt(e.target.value);
  //学習技術
  const [skillTagId, setSkillTagId] = useState<string>("");
  const onChangeSkillTagId = (e: ChangeEvent<HTMLInputElement>) =>
    setSkillTagId(e.target.value);
  //学習時間
  const [timeStack, setTimeStack] = useState<number>(0);
  const onChangeTimeStack = (e: ChangeEvent<HTMLInputElement>) =>
    setTimeStack(Number(e.target.value));
  //メモ
  const [content, setContent] = useState<string>("");
  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  //記録追加メソッド（リフェッチ機能）
  const [addStudyStack] = useAddStudyStackMutation({
    variables: {
      stack: {
        createdAt,
        skillTagId,
        timeStack,
        content,
        //一旦指定のユーザー
        userId: "621c795fea18ffdb80e66462",
      },
    },
    refetchQueries: [GetAllStudyStackDocument], //データを表示するクエリーのDocument
  });

  //記録追加
  const addStack = async () => {
    const addStackData = await addStudyStack();
    if (addStackData.data?.addStudyStack.status === "success") {
      toast({ title: "学習を記録しました", status: "success" });
      onClose();
    } else if (addStackData.data?.addStudyStack.status === "error") {
      toast({ title: "記録に失敗しました", status: "error" });
      onClose();
    }
  };

  //記録削除メソッド
  const [removeStudyStack] = useRemoveStudyStackMutation({
    variables: {
      //一旦指定の記録ID
      studyStackId: "621d887069e1c1468c1eda99",
    },
    refetchQueries: [GetAllStudyStackDocument],
  });

  //記録削除
  const removeStack = async () => {
    const removeStackData = await removeStudyStack();
    if (removeStackData.data?.removeStudyStack.status === "success") {
      toast({ title: "学習を削除しました", status: "success" });
      onClose();
    } else if (removeStackData.data?.removeStudyStack.status === "error") {
      toast({ title: "削除に失敗しました", status: "error" });
      onClose();
    }
  };

  //記録編集メソッド
  const [updateMutation] = useUpdateStudyStackMutation({
    variables: {
      stack: {
        createdAt,
        skillTagId,
        timeStack,
        content,
        //一旦指定の記録ID
        studyStackId: "621d896369e1c1468c1eda9d",
      },
    },
    refetchQueries: [GetAllStudyStackDocument],
  });

  //記録編集
  const updateStack = async () => {
    const updateStackData = await updateMutation();
    if (updateStackData.data?.updateStudyStack.status === "success") {
      toast({ title: "学習記録を編集しました", status: "success" });
      onClose();
    } else if (updateStackData.data?.updateStudyStack.status === "error") {
      toast({ title: "編集に失敗しました", status: "error" });
      onClose();
    }
  };

  return (
    <>
      <Button onClick={onOpen} _focus={{ boxShadow: "none" }}>
        {buttonTitle}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          {title === "記録削除" && (
            <ModalBody>この記事を削除しますか</ModalBody>
          )}
          {title === "記録追加" && (
            <ModalBody>
              日付:
              <Input
                variant="outline"
                placeholder="日付"
                type="date"
                value={createdAt}
                onChange={(e) => onChangeCreatedAt(e)}
                // {...register("createdAtStart")}
              />
              技術:
              <Input
                variant="outline"
                placeholder="技術"
                type="text"
                value={skillTagId}
                onChange={(e) => onChangeSkillTagId(e)}
                // {...register("skillTagId")}
              />
              時間:
              <Input
                variant="outline"
                placeholder="時間"
                type="number"
                value={timeStack}
                onChange={(e) => onChangeTimeStack(e)}
                // {...register("timeStack")}
              />
              メモ:
              <Textarea
                placeholder="メモ"
                value={content}
                onChange={(e) => onChangeContent(e)}
                // {...register("content")}
              />
            </ModalBody>
          )}
          {title === "記録編集" && (
            <ModalBody>
              日付:
              <Input
                variant="outline"
                placeholder="日付"
                type="date"
                value={createdAt}
                onChange={(e) => onChangeCreatedAt(e)}
                // {...register("createdAtStart")}
              />
              技術:
              <Input
                variant="outline"
                placeholder="技術"
                type="text"
                value={skillTagId}
                onChange={(e) => onChangeSkillTagId(e)}
                // {...register("skillTagId")}
              />
              時間:
              <Input
                variant="outline"
                placeholder="時間"
                type="number"
                value={timeStack}
                onChange={(e) => onChangeTimeStack(e)}
                // {...register("timeStack")}
              />
              メモ:
              <Textarea
                placeholder="メモ"
                value={content}
                onChange={(e) => onChangeContent(e)}
                // {...register("content")}
              />
            </ModalBody>
          )}

          <ModalFooter>
            {title === "記録追加" && <AddStackButton addStack={addStack} />}
            {title === "記録編集" && (
              <UpdateStackButton updateStack={updateStack} />
            )}
            {title === "記録削除" && (
              <RemoveStackButton removeStack={removeStack} />
            )}

            <Button colorScheme="blue" mr={3} onClick={onClose}>
              キャンセル
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});
