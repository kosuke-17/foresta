import { Dispatch, FC, memo, ReactNode, SetStateAction, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { useModal } from "../../../hooks/useModal";
import { ModalSet } from "../../molucules/ModalSet";
import { EditMe } from "./EditMe";

// type Props = { setMenuItem: Dispatch<SetStateAction<string>> };

export const MenuBar: FC = memo(() => {
  //モーダル使用のhooks
  const modalStore = useModal();
  const { onOpen, isOpen, onClose } = modalStore;
  const [menuItem, setMenuItem] = useState("");

  return (
    <>
      <ModalSet
        isOpen={isOpen}
        onClose={onClose}
        modalTitle={menuItem}
        contents={
          <EditMe
            menuItem={menuItem}
            setMenuItem={setMenuItem}
            onClose={onClose}
          />
        }
      />
      <Menu>
        <MenuButton
          _focus={{ boxShadow: "none" }}
          as={Button}
          backgroundColor="green.400"
          textColor="white"
          _hover={{ backgroundColor: "green.300" }}
          width="auto"
          height={10}
          justifyContent="center"
          textAlign="center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={(e) => {
              setMenuItem("userInfo");
              onOpen(e);
            }}
          >
            ユーザ情報
          </MenuItem>
          <MenuItem>制作物</MenuItem>
          <MenuItem>URL</MenuItem>
          <MenuItem>基本情報</MenuItem>
          <MenuItem>スキル要約</MenuItem>
          <MenuItem>自己PR・前職経験</MenuItem>
          <MenuItem>その他情報</MenuItem>
          <MenuItem>開発経験</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
});
