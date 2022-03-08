import { FC } from "react";
import { EditMe } from "../../components/organisms/aboutMe/EditMe";
import { Private } from "../../components/organisms/aboutMe/Private";
import { Public } from "../../components/organisms/aboutMe/Public";

/**
 * AboutMe表示ページ.
 */
export const AboutMe: FC = () => {
  return (
    <>
      <Public />
      <Private />
      <EditMe />
    </>
  );
};
