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
  Box,
} from "@chakra-ui/react";

type Props = {
  onClose: () => void; //閉じるメソッド
  isOpen: boolean; //モーダルの開閉状態
  modalTitle?: string; //モーダルのタイトル
  contents: any; //モーダルの中身
  closeBtnName?: string; //モーダルを閉じるボタンの名前(デフォルトあり)
  //メソッドを含めたボタンを作成したい場合:[{name:hoge,action:method},{…}]の形で渡してください
  actionBtnArray?: Array<{ name: string; action: () => void }>;
};

/**
 * モーダルコンポーネント.
 * @remarks  このコンポーネントを使用する際は、hooksからインポートしたメソッドをそのまま渡してください
 *  const modalStore = useModal();
 *  const { onOpen, isOpen, onClose } = modalStore;
 * …<ModalSet isOpen={isOpen} onClose={onClose} />
 */
export const ModalSet: FC<Props> = memo((props) => {
  const {
    isOpen,
    onClose,
    modalTitle,
    contents,
    closeBtnName = "キャンセル",
    actionBtnArray,
  } = props;

  return (
    <>
      {/* モーダル本体 */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="auto" minWidth={500} maxWidth="none">
          {modalTitle ? (
            <ModalHeader textAlign="center">{modalTitle}</ModalHeader>
          ) : (
            <Box pb={30}></Box>
          )}
          <ModalBody textAlign="center">{contents}</ModalBody>

          {/* ボタンコーナー */}
          <ModalFooter justifyContent="center">
            <Flex>
              {actionBtnArray &&
                actionBtnArray.map((btn) => (
                  <Button
                    minWidth={120}
                    backgroundColor="green.400"
                    textColor="white"
                    _hover={{ backgroundColor: "green.400" }}
                    _active={{ backgroundColor: "green.600" }}
                    _focus={{ boxShadow: "none" }}
                    key={btn.name}
                    mr={3}
                    onClick={() => {
                      btn.action();
                      onClose();
                    }}
                  >
                    {btn.name}
                  </Button>
                ))}
              <Button
                minWidth={120}
                backgroundColor="gray.300"
                _hover={{ backgroundColor: "gray.300" }}
                _active={{ backgroundColor: "gray.500" }}
                _focus={{ boxShadow: "none" }}
                onClick={onClose}
              >
                {closeBtnName}
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});
