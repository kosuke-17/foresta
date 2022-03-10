/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import { GetUserByIdDocument } from "../src/types/generated/graphql";
import { UrlList } from "../src/components/molucules/aboutMePublic/UrlList";
import { SiteImageBox } from "../src/components/molucules/aboutMePublic/SiteImageBox";
import { SiteDetail } from "../src/components/molucules/aboutMePublic/SiteDetail";
import { ModalSet } from "../src/components/molucules/ModalSet";
import { SiteImage } from "../src/components/atoms/AboutMePublic/SiteImage";
import userEvent from "@testing-library/user-event";

// GraphQLエンドポイントへの呼び出しをモック(codegen後使用)
const mocks = [
  {
    request: {
      query: GetUserByIdDocument,
    },
    result: {
      data: {
        user: {
          node: {
            name: "dummyName",
            jobType: "dummyJobType",
            spreadSheetID: "duumySpreadSheetId",
            githubURL: "dummyGiuHubUrl",
            portfolio: [
              {
                title: "dummyTitle",
                description: "dummyDescription",
                img: "dummyImage.jpg",
                portfolioURL: "dummyURL",
              },
            ],
            userUrls: {
              user_urls: [
                {
                  urlName: "dummyURLName",
                  url: "dummyURL",
                },
              ],
            },
          },
        },
      },
    },
  },
];

/**
 * URLリストコンポーネントのテスト.
 */
describe("URLリストの表示", () => {
  const dummyUrlList = [{ urlName: "dummytitle", url: "dummyurl.com" }];
  it("Propsが表示される", () => {
    render(
      // <MockedProvider mocks={mocks} addTypename={false}>
      //   <UrlList />
      // </MockedProvider>,
      <UrlList urlData={dummyUrlList} />,
    );
    expect(screen.getByText("『dummytitle』")).toBeInTheDocument();
    expect(screen.getByText("dummyurl.com")).toBeInTheDocument();
  });
});
/**
 * SiteImageBoxコンポーネントのテスト.
 */
describe("制作物画面の表示", () => {
  const dummyPortfolioList = [
    {
      title: "dummytitle",
      description: "dummy description",
      img: "dummyimage.jpg",
      portfolioURL: "dummyurl.com",
    },
  ];
  it("Propsが表示される", () => {
    render(<SiteImageBox siteData={dummyPortfolioList} />);
    //ここで表示されるのは画像とタイトルのみ
    expect(screen.getByText("dummytitle")).toBeInTheDocument();
    //画像表示テスト
  });
});

/**
 * SiteDetailコンポーネントのテスト.
 */
describe("制作物詳細画面の表示", () => {
  const dummyPortfolioList = {
    title: "dummytitle",
    description: "dummy description",
    img: "dummyimage.jpg",
    portfolioURL: "dummyurl.com",
  };
  it("Props表示テスト", () => {
    render(<SiteDetail siteItem={dummyPortfolioList} />);
    //ここで表示されるのは詳細、画像、URL、使用技術(タイトルはモーダルの方で)
    expect(screen.getByText("dummy description")).toBeInTheDocument();
    expect(screen.getByText("dummyurl.com")).toBeInTheDocument();
    //画像表示テスト
    //使用技術
  });
});

/**
 * SiteDetailをモーダルに埋めた際、タイトルが表示されるかどうかのテスト.
 */
describe("制作物詳細モーダルの表示", () => {
  //ダミーデータ
  const dummyPortfolioList = {
    title: "dummytitle",
    description: "dummy description",
    img: "dummyimage.jpg",
    portfolioURL: "dummyurl.com",
  };

  //モーダルに渡すダミーデータ
  const dummyModalSet = {
    onClose: () => alert("モーダルをとじる"),
    isOpen: true,
    modalTitle: "dummytitle",
    contents: <SiteDetail siteItem={dummyPortfolioList} />,
  };
  it("Propsが表示される", () => {
    render(<ModalSet {...dummyModalSet} />);
    //ここで表示されるのは詳細、画像、URL、使用技術、タイトル
    expect(screen.getByText("dummytitle")).toBeInTheDocument();
    expect(screen.getByText("dummy description")).toBeInTheDocument();
    expect(screen.getByText("dummyurl.com")).toBeInTheDocument();
    //画像表示テスト
    //使用技術
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
