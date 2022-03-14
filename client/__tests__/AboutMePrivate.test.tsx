/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import { OtherData } from "../src/components/molucules/aboutMePrivate/OtherData";
import { Project } from "../src/components/molucules/aboutMePrivate/Project";
import { SkillTable } from "../src/components/molucules/aboutMePrivate/SkillTable";
import { TextBox } from "../src/components/molucules/aboutMePrivate/TextBox";
import { UserInfoTable } from "../src/components/molucules/aboutMePrivate/UserInfoTable";
import { TitleAndContent } from "../src/components/atoms/aboutMePrivate/TitleAndContent";

//ユーザ情報取得機能実装に作成

// GraphQLエンドポイントへの呼び出しをモック(codegen後使用)
// const mocks = [
//   {
//     request: {
//       query: GetUserByIdDocument,
//     },
//     result: {
//       data: {
//         //ここに返ってくるデータの形で入れる
//       },
//     },
//   },
// ];

/**
 * 基本情報コンポーネントのテスト.
 */
describe("基本情報の表示", () => {
  it("Propsが表示される", () => {
    render(<UserInfoTable />);
    //staffID
    //年齢
    //性別
    //最寄駅
    //稼働開始日
    //エンジニア歴
    //IT全体歴
  });
});

/**
 * テキストボックス(長い文章を表示する)コンポーネントのテスト.
 */
describe("長い文章を表示するテキストボックスの表示", () => {
  it("Propsが表示される", () => {
    render(<TextBox />);
  });
});

/**
 * 技術要約コンポーネントのテスト.
 */
describe("技術要約の表示", () => {
  it("Propsが表示される", () => {
    render(<SkillTable />);
    //役割
    //動作環境
    //言語
    //フレームワーク
    //ライブラリ
    //ツール
    //詳細
  });
});

/**
 * 開発経験コンポーネントのテスト.
 */
describe("開発経験の表示", () => {
  it("Propsが表示される", () => {
    render(<Project />);
    //プロジェクト名
    //期間
    //担当役割
    //チーム人数
    //動作環境
    //言語
    //フレームワーク
    //ライブラリ
    //ツール
    //詳細
  });
});

/**
 * その他データコンポーネントのテスト.
 */
describe("その他の情報の表示", () => {
  it("Propsが表示される", () => {
    render(<OtherData />);
    //業務外に取り組んでいること
    //資格情報
    //前職について
  });
});

/**
 * 個々の制作物画面.
 */
describe("個々の制作物画面", () => {
  const dummyData = {
    title: "dummy title",
    content: "dummy content",
  };

  it("Propsが表示される", () => {
    render(<TitleAndContent {...dummyData} />);
    expect(screen.getByText("■dummy title")).toBeInTheDocument();
    expect(screen.getByText("dummy content")).toBeInTheDocument();
  });
});
