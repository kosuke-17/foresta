import { memo, FC } from "react";
import styled from "styled-components";

export const Header: FC = memo(() => {
  return (
    <>
      <_Header>ヘッダ</_Header>
    </>
  );
});

const _Header = styled.footer`
  display: flex;
  width: 100%;
  background-color: gray;
  height: 64px;
`;
