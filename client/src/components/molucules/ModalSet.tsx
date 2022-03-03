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
  Box,
} from "@chakra-ui/react";
import styled from "styled-components";

type Props = {
  openBtnName: string; //モーダルを開くボタンの名前
  openBtnColor?: string; //モーダルを開くボタンの色
  openBtnTextColor?: string; //モーダルを開くボタンの文字色
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
    openBtnColor = "green.400",
    openBtnTextColor = "white",
    modalTitle,
    contents,
    closeBtnName = "キャンセル",
    actionBtnArray,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        _focus={{ boxShadow: "none" }}
        backgroundColor={openBtnColor}
        _hover={{ backgroundColor: openBtnColor }}
        textColor={openBtnTextColor}
      >
        {openBtnName}
      </Button>

      <_Test>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent position="fixed" top={150}>
            {modalTitle ? (
              <ModalHeader textAlign="center">{modalTitle}</ModalHeader>
            ) : (
              <Box pb={30}></Box>
            )}
            <ModalBody textAlign="center">{contents}</ModalBody>

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
      </_Test>
    </>
  );
});

const _Test = styled.div`
  top: 200px;
`;
