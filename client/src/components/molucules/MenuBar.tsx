import { FC, memo } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

export const MenuBar: FC = memo(() => {
  return (
    <>
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
          <MenuItem>ユーザ情報</MenuItem>
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
