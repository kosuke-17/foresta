import { memo, FC } from "react";
import styled from "styled-components";

export const Footer: FC = memo(() => {
  return (
    <>
      <_Footer>フッタ</_Footer>
    </>
  );
});

const _Footer = styled.footer`
  display: flex;
  position: relative;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: gray;
  height: 64px;
  justify-content: center;
  align-items: center;
`;
