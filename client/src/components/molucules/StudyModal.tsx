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
} from "../../types/generated/graphql";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { AddStackButton } from "../atoms/study/AddStackBotton";

type Props = {
  title: string;
  buttonTitle: string;
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
  //ユーザーID

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
    refetchQueries: [GetAllStudyStackDocument],
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


  

  return (
    <>
      <Button onClick={onOpen} _focus={{ boxShadow: "none" }}>
        {buttonTitle}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        {/* <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered> */}
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
            {/* {title === "記録編集" && <AddStackButton addStack={editStack} />}
            {title === "記録削除" && <AddStackButton addStack={deleteStack} />} */}

            <Button colorScheme="blue" mr={3} onClick={onClose}>
              キャンセル
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});
