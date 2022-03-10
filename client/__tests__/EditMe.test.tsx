/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { useState } from "react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import { SpecProject } from "../src/components/molucules/editMe/SpecProject";
import { SpecSheet } from "../src/components/molucules/editMe/SpecSheet";
import { SpecTechInfo } from "../src/components/molucules/editMe/SpecTechInfo";
import { SpecUserInfo } from "../src/components/molucules/editMe/SpecUserInfo";
import { UserInfo } from "../src/components/molucules/editMe/UserInfo";
import { UserPortfolio } from "../src/components/molucules/editMe/UserPortfolio";
import { UserUrls } from "../src/components/molucules/editMe/UserUrls";

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
 * public部分基本情報編集コンポーネントのテスト.
 */
describe("public部分基本情報編集", () => {
  //setメソッドを渡したいのにダミーデータがダメみたい
  // const [dummyMenuItem, setDummyMenuItem] = useState("");
  // const dummyData = {
  //   setMenuItem: setDummyMenuItem,
  //   onClose: () => alert("モーダルをとじる"),
  // };
  // it("Props表示テスト", () => {
  //   render(<UserInfo {...dummyData} />);
  //   //名前, 職種, github
  // });
});

/**
 * 制作物編集コンポーネントのテスト.
 */
describe("制作物編集", () => {
  it("Propsが表示される", () => {
    render(<UserPortfolio />);
    //タイトル、詳細、画像、URL
  });
});

/**
 * public部分URL編集コンポーネントのテスト.
 */
describe("制作物編集", () => {
  it("Propsが表示される", () => {
    render(<UserUrls />);
    //title, url
  });
});

/**
 * スペックシート部分基本情報編集コンポーネントのテスト.
 */
describe("スペックシート部分基本情報編集", () => {
  it("Propsが表示される", () => {
    render(<SpecUserInfo />);
    //スタッフID, 年齢, 性別, 最寄駅, 稼働開始日, エンジニア歴(SE,PG), IT全体歴
  });
});

/**
 * スペックシートスキル要約編集コンポーネントのテスト.
 */
describe("スペックシートスキル要約編集", () => {
  it("Propsが表示される", () => {
    render(<SpecTechInfo />);
    //OS、言語、フレームワーク、ライブラリ、ツール、役割
  });
});

/**
 * スペックシート基本情報以外編集コンポーネントのテスト.
 */
describe("スペックシート基本情報以外編集", () => {
  it("Propsが表示される", () => {
    render(<SpecSheet />);
    //自己PR、業務外、資格、前職
  });
});

/**
 * スペックシート開発経験編集画面のテスト.
 */
describe("スペックシート開発経験編集", () => {
  it("Propsが表示される", () => {
    render(<SpecProject />);
    //プロジェクト名, 期間(始め&終わり), 役割, 人数, 内容, OS, 言語, フレームワーク, ライブラリ, ツール, 役割
  });
});
