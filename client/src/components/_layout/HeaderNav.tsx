import { FC } from "react";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

// ナビゲーションメニュー項目
const navMenu = [
  { link: "/", text: "学習記録" },
  { link: "/aboutMe", text: "ポートフォリオ" },
  { link: "/techforest", text: "進捗ツリー" },
  { link: "/engineerlist", text: "エンジニアリスト" },
];

/**
 * ヘッダーのナビゲーションメニューのコンポーネント.
 */
export const HeaderNav: FC = () => {
  // クッキー
  const [cookie] = useCookies();
  return (
    <Flex gap={5} marginLeft={10}>
      {navMenu.map((nav) => (
        <NavLink
          key={nav.link}
          to={nav.link}
          state={{ engineerId: cookie.ForestaID }}
          // activeなページのテキスト色を変更
          style={({ isActive }) => ({
            color: isActive ? "#48bb78" : "#333",
          })}
        >
          {nav.text}
        </NavLink>
      ))}
    </Flex>
  );
};
