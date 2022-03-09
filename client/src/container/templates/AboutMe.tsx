import { FC } from "react";
import { Private } from "../../components/organisms/aboutMe/Private";
import { Public } from "../../components/organisms/aboutMe/Public";
import { MenuBar } from "../../components/organisms/aboutMe/MenuBar";
import { Flex } from "@chakra-ui/react";

/**
 * AboutMe表示ページ.
 */
export const AboutMe: FC = () => {
  return (
    <>
      <Flex justifyContent="right">
        <MenuBar />
      </Flex>
      <Public />
      <Private />
    </>
  );
};
