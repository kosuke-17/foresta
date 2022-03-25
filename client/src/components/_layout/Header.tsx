import { memo, FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "@chakra-ui/react";
import { useCookies } from "react-cookie";

import { LogoutButton } from "../atoms/auth/LogoutButton";
import { HeaderNav } from "./HeaderNav";

/**
 * ヘッダー.
 */
export const Header: FC = memo(() => {
  const [cookies] = useCookies();
  const auth = cookies.ForestaID;

  return (
    <Flex direction="column" borderBottom="3px solid #48bb78">
      <_Header>
        <Link to="/">
          <img src="/images/header-logo.png" alt="ヘッダーロゴ" />
        </Link>
        {/* ログインしていればログアウトボタン表示 */}
        {auth && <LogoutButton />}
      </_Header>
      {/* ログインしていればナビゲーションメニュー表示 */}
      {auth && <HeaderNav />}
    </Flex>
  );
});

const _Header = styled.header`
  display: flex;
  justify-content: space-between;
  aligh-items: center;
  width: 100%;
  height: 64px;

  & img {
    margin-left: 20px;
    width: 150px;
    height: auto;
    padding: 8px 0;
    cursor: pointer;
  }
`;
