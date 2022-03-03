import { FC } from "react";
import { Private } from "../../components/organisms/aboutMe/Private";
import { Public } from "../../components/organisms/aboutMe/Public";
import { ModalSet } from "../../components/molucules/ModalSet";
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

export const AboutMe: FC = () => {
  const testAction1 = () => {
    alert("ボタン1が押された");
  };
  const testAction2 = () => {
    alert("ボタン2が押された");
  };
  const testArray = [
    { name: "Action1", action: () => alert("Action1") },
    { name: "Action1", action: () => alert("Action1") },
    { name: "Action1", action: () => alert("Action1") },
    { name: "Action1", action: () => alert("Action1") },
  ];

  //   const testArray = [{ name: "はい", action: testAction1 }];

  return (
    <>
      <Flex justifyContent="center" mt={100}>
        <ModalSet
          openBtnName="テストボタン"
          contents="削除しますか？"
          actionBtnArray={testArray}
          closeBtnName="いいえ"
        />
      </Flex>
      <Public />
      <Private />
    </>
  );
};
