/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";

import { Public } from "../../src/components/organisms/aboutMe/Public";
import { UrlList } from "../../src/components/molucules/aboutMePublic/UrlList";
import { SiteImageBox } from "../../src/components/molucules/aboutMePublic/SiteImageBox";
import { SiteDetail } from "../../src/components/molucules/aboutMePublic/SiteDetail";
import { SiteImage } from "../../src/components/atoms/AboutMePublic/SiteImage";
import {
  userPortfolioMocks,
  userPublicMocks,
  userUrlMocks,
} from "../../__mocks__/AboutMe";
import { Router } from "react-router-dom";

/**
 * 基本情報コンポーネントのテスト.
 */
// const WrapedUserInfoArea = () => {
//   return (
//     <MockedProvider mocks={[userPublicMocks]} addTypename={false}>
//       <Public />
//     </MockedProvider>
//   );
// };
// describe("基本情報の表示", () => {
//   it("基本情報が表示される", () => {
//     const history = createMemoryHistory();
//     waitFor(() => {
//       render(
//         <Router history={history}>
//           <WrapedUserInfoArea />
//         </Router>,
//       );
//       new Promise((resolve) => setTimeout(resolve, 0));
//       expect(screen.getByText("氏名:山田太郎")).toBeInTheDocument();
//       expect(screen.getByText("フロントエンドエンジニア")).toBeInTheDocument();
//     });
//   });
// });

/**
 * URLリストコンポーネントのテスト.
 */
const WrapedUrlArea = () => {
  return (
    <MockedProvider mocks={[userUrlMocks]} addTypename={false}>
      <UrlList postData={""} />
    </MockedProvider>
  );
};
describe("URLリストの表示", () => {
  it("URLが表示される", () => {
    waitFor(() => {
      render(<WrapedUrlArea />);
      new Promise((resolve) => setTimeout(resolve, 0));
      expect(screen.getByText("URL1")).toBeInTheDocument();
      expect(screen.getByText("url1.com")).toBeInTheDocument();
      expect(screen.getByText("URL2")).toBeInTheDocument();
      expect(screen.getByText("url2.com")).toBeInTheDocument();
    });
  });
});

/**
 * SiteImageBoxコンポーネントのテスト.
 */
const WrapedPortfolioArea = () => {
  return (
    <MockedProvider mocks={[userPortfolioMocks]} addTypename={false}>
      <SiteImageBox postData={""} />
    </MockedProvider>
  );
};
describe("制作画面の表示", () => {
  it("制作物が表示される", () => {
    waitFor(() => {
      render(<WrapedPortfolioArea />);
      new Promise((resolve) => setTimeout(resolve, 0));
      expect(screen.getByText("制作物タイトル1")).toBeInTheDocument();
      expect(screen.getByText("制作物タイトル2")).toBeInTheDocument();
      expect(screen.getByText("制作物タイトル3")).toBeInTheDocument();
      expect(screen.getByText("詳細詳細詳細")).toBeInTheDocument();
      expect(screen.getByText("image.jpg")).toBeInTheDocument();
      expect(screen.getByText("url.com")).toBeInTheDocument();
      expect(screen.getByText("Vue"[0])).toBeInTheDocument();
      expect(screen.getByText("TypeScript"[1])).toBeInTheDocument();
      expect(screen.getByText("Vue"[0])).toBeInTheDocument();
    });
  });
});

/**
 * SiteDetailコンポーネントのテスト.
 */
describe("制作物詳細画面の表示", () => {
  const dummyPortfolioList = {
    id: "ID",
    specSheetId: "スプレッドシートID",
    skills: ["Vue", "TypeScript"],
    title: "dummytitle",
    description: "dummy description",
    img: "dummyimage.jpg",
    portfolioURL: "dummyurl.com",
  };
  it("制作物詳細表示テスト", () => {
    render(<SiteDetail siteItem={dummyPortfolioList} />);
    expect(screen.getByText("Vue")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("dummy description")).toBeInTheDocument();
    expect(screen.getByText("dummyurl.com")).toBeInTheDocument();
    //画像表示テスト
  });
});

/**
 * 個々の制作物画面.
 */
describe("個々の制作物画面", () => {
  const dummyData = {
    imageUrl: "image.jpg",
    siteName: "dummy site name",
  };

  it("Propsが表示される", () => {
    render(<SiteImage {...dummyData} />);
    expect(screen.getByText("dummy site name")).toBeInTheDocument();
  });
});
