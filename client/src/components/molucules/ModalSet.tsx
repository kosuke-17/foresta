import { FC, memo } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Flex,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

type Props = {
  openBtnName: string; //モーダルを開けるボタンの名前
  modalTitle?: string; //モーダルのタイトル
  contents: any; //モーダルの中身
  closeBtnName?: string; //モーダルを閉じるボタンの名前(デフォルトあり)
  //メソッドを含めたボタンを作成したい場合:[{name:hoge,action:method},{…}]の形で渡してください
  actionBtnArray?: Array<{ name: string; action: () => void }>;
};

/**
 * モーダルコンポーネント.
 */
export const ModalSet: FC<Props> = memo((props) => {
  const {
    openBtnName,
    modalTitle,
    contents,
    closeBtnName = "キャンセル",
    actionBtnArray,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>{openBtnName}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {modalTitle && (
            <ModalHeader textAlign="center">{modalTitle}</ModalHeader>
          )}
          <ModalBody textAlign="center">{contents}</ModalBody>

          <ModalFooter justifyContent="center">
            <Flex>
              {actionBtnArray &&
                actionBtnArray.map((btn) => (
                  <Button
                    colorScheme="blue"
                    key={btn.name}
                    mr={3}
                    onClick={btn.action}
                  >
                    {btn.name}
                  </Button>
                ))}
              <Button colorScheme="blue" onClick={onClose}>
                {closeBtnName}
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});
