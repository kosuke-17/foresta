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
} from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";
import { useAddStack } from "../../hooks/study/useAddStack";
import { useRemoveStack } from "../../hooks/study/useRemoveStack";
import { useUpdateStack } from "../../hooks/study/useUpdateStack";
import { AddStackButton } from "../atoms/study/AddStackBotton";
import { RemoveStackButton } from "../atoms/study/RemoveStackBotton";
import { UpdateStackButton } from "../atoms/study/updateStackBotton";

type Props = {
  title: string;
  buttonTitle: string;
  stackId: string;
};

export const StudyModal: FC<Props> = memo((props) => {
  //モーダルの開閉
  const { isOpen, onOpen, onClose } = useDisclosure();
  //propsでもらうもの
  const { title, buttonTitle, stackId } = props;

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

  //記録追加メソッド呼び出し
  const { addStack } = useAddStack(
    createdAt,
    skillTagId,
    timeStack,
    content,
    onClose,
  );

  //記録削除メソッド呼び出し
  const { removeStack } = useRemoveStack(stackId, onClose);

  //記録編集メソッド呼び出し
  const { updateStack } = useUpdateStack(
    createdAt,
    skillTagId,
    timeStack,
    content,
    stackId,
    onClose,
  );

  return (
    <>
      <Button onClick={onOpen} _focus={{ boxShadow: "none" }}>
        {buttonTitle}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent backgroundColor="green.100">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          {title === "記録削除" && (
            <ModalBody>この記事を削除しますか</ModalBody>
          )}
          {title === "記録追加" && (
            <ModalBody backgroundColor="white" m={3} borderRadius="base">
              日付:
              <Input
                variant="outline"
                placeholder="日付"
                type="date"
                value={createdAt}
                onChange={(e) => onChangeCreatedAt(e)}
              />
              技術:
              <Input
                variant="outline"
                placeholder="技術"
                type="text"
                value={skillTagId}
                onChange={(e) => onChangeSkillTagId(e)}
              />
              時間:
              <Input
                variant="outline"
                placeholder="時間"
                type="number"
                value={timeStack}
                onChange={(e) => onChangeTimeStack(e)}
              />
              メモ:
              <Textarea
                placeholder="メモ"
                value={content}
                onChange={(e) => onChangeContent(e)}
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
              />
              技術:
              <Input
                variant="outline"
                placeholder="技術"
                type="text"
                value={skillTagId}
                onChange={(e) => onChangeSkillTagId(e)}
              />
              時間:
              <Input
                variant="outline"
                placeholder="時間"
                type="number"
                value={timeStack}
                onChange={(e) => onChangeTimeStack(e)}
              />
              メモ:
              <Textarea
                placeholder="メモ"
                value={content}
                onChange={(e) => onChangeContent(e)}
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

            <Button
              colorScheme="gray"
              mx={3}
              _focus={{ boxShadow: "none" }}
              onClick={onClose}
            >
              キャンセル
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});
