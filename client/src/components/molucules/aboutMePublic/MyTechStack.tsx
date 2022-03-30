import { memo, FC } from "react";
import styled from "styled-components";
import { ProgressBar } from "../../atoms/techForest/ProgressBar";

/**
 * 技術ツリー表示コーナー.
 */
export const MyTechStack: FC = memo(() => {
  return (
    <>
      <HiddenScrollBar className="overflow-auto h-screen">
        <ProgressBar AchievementRate={3} />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
        ほげほげ
        <br />
      </HiddenScrollBar>
    </>
  );
});

//小窓
const HiddenScrollBar = styled.div`
  overflow: auto;
  height: 350px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
