import { FC } from "react";
import { Private } from "../../components/organisms/aboutMe/Private";
import { Public } from "../../components/organisms/aboutMe/Public";

export const AboutMe: FC = () => {
  return (
    <>
      <Public />
      <Private />
    </>
  );
};
