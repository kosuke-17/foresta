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
  flexbox,
} from "@chakra-ui/react";

type Props = {
  openBtnName: string; //モーダルを開けるボタンの名前
  modalTitle?: string; //モーダルのタイトル
  contents: any; //モーダルの中身
  closeBtnName?: string; //モーダルを閉じるボタンの名前(デフォルトあり)
  actionBtnName1?: string; //ボタン作成したかったら渡す1
  onClickMethod1?: () => void; //ボタン1を押した際に発動させるメソッド
  actionBtnName2?: string; //ボタン作成したかったら渡す2
  onClickMethod2?: () => void; //ボタン2を押した際に発動させるメソッド
};

/**
 * モーダルコンポーネント.
 */
export const ModalSet: FC<Props> = memo((props) => {
  const {
    openBtnName,
    modalTitle,
    contents,
    closeBtnName = "とじる",
    actionBtnName1,
    onClickMethod1,
    actionBtnName2,
    onClickMethod2,
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

          <ModalFooter>
            <Flex justifyContent="center">
              {actionBtnName1 && (
                <Button variant="ghost" onClick={onClickMethod1}>
                  {actionBtnName1}
                </Button>
              )}
              {actionBtnName2 && (
                <Button variant="ghost" onClick={onClickMethod2}>
                  {actionBtnName2}
                </Button>
              )}
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                {closeBtnName}
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});
