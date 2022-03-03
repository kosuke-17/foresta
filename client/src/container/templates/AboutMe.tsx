import { FC, useCallback, useState } from "react";
import { ModalSet } from "../../components/molucules/ModalSet";
import { Private } from "../../components/organisms/aboutMe/Private";
import { Public } from "../../components/organisms/aboutMe/Public";

import { useDisclosure } from "@chakra-ui/react";

/**
 * AboutMe表示ページ.
 */
export const AboutMe: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  const onOpen = useCallback(() => {
    console.log("あける");
    setIsOpen(true);
  }, []);
  console.log(isOpen);

  return (
    <>
      <button type="button" onClick={onOpen}>
        ボタン
      </button>
      <ModalSet contents="aaa" isOpen={isOpen} onClose={onClose} />
      <Public />
      <Private />
    </>
  );
};
