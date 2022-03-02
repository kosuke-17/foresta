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
import { FC } from "react";

type Props = {
  title: string;
  buttonTitle: string;
};

export const StudyModal: FC<Props> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { title, buttonTitle } = props;
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
          {title === "記録編集" && (
            <ModalBody>
              日付:
              <Input variant="outline" placeholder="日付" />
              技術:
              <Input variant="outline" placeholder="技術" />
              時間:
              <Input variant="outline" placeholder="時間" />
              メモ:
              <Textarea placeholder="メモ" />
            </ModalBody>
          )}

          <ModalFooter>
            <Button variant="ghost">{buttonTitle}する</Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              キャンセル
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
