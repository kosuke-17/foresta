import { memo, FC } from "react";
import { LogoutButton } from "../atoms/auth/LogoutButton";
import styled from "styled-components";

export const Header: FC = memo(() => {
  return (
    <>
      <_Header>
        <LogoutButton />
      </_Header>
    </>
  );
});

const _Header = styled.footer`
  display: flex;
  width: 100%;
  background-color: gray;
  height: 64px;
`;
