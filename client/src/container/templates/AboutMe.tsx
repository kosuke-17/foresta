import { FC, useState } from "react";
import { EditMe } from "../../components/organisms/aboutMe/EditMe";
import { Private } from "../../components/organisms/aboutMe/Private";
import { Public } from "../../components/organisms/aboutMe/Public";
import { MenuBar } from "../../components/molucules/MenuBar";
import { Flex } from "@chakra-ui/react";

/**
 * AboutMe表示ページ.
 */
export const AboutMe: FC = () => {
  const [menuItem, setMenuItem] = useState("");
  return (
    <>
      <Flex justifyContent="right">
        <MenuBar setMenuItem={setMenuItem} />
      </Flex>
      {menuItem ? (
        <EditMe menuItem={menuItem} setMenuItem={setMenuItem} />
      ) : (
        <>
          <Public />
          <Private />
        </>
      )}
    </>
  );
};
