import { memo, FC } from "react";
import { Private } from "../../components/organisms/aboutMe/Private";
import { Public } from "../../components/organisms/aboutMe/Public";

export const AboutMe: FC = memo(() => {
  return (
    <>
      <Public />
      <Private />
    </>
  );
});
