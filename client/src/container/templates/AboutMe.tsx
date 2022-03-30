import { FC } from "react";
import { Private } from "../../components/organisms/aboutMe/Private";
import { Public } from "../../components/organisms/aboutMe/Public";

import { useLocation } from "react-router-dom";

interface State {
  engineerId: string;
}

/**
 * AboutMe表示ページ.
 */
export const AboutMe: FC = () => {
  // エンジニアリストからtokenを受け取るためのlocation
  const location = useLocation();
  const { engineerId } = location.state as State;

  return (
    <>
      <Public engineerId={engineerId} />
      {!engineerId && <Private />}
    </>
  );
};
