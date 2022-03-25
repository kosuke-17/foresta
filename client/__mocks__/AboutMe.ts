import {
  GetPrAndSheetByUserIdDocument,
  GetSheetByUserIdDocument,
  GetSheetOtherByUserIdDocument,
  GetSheetPrByUserIdDocument,
  GetSheetProjectByUserIdDocument,
  GetUserUrlByIdDocument,
} from "../src/types/generated/graphql";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

//パブリック
/**
 * URL.
 */
export const userUrlMocks = {
  request: {
    query: GetUserUrlByIdDocument, // Codegenで生成されたクエリ Documentで終わるもの。
    variables: {
      userToken: cookies.get("ForestaID"),
    },
  },
  result: {
    // データをモック
    data: {
      __typename: "Query",
      urls: {
        status: "success",
        msg: "取得に成功しました。",
        node: {
          userUrls: {
            user_urls: [
              {
                urlName: "URL1",
                url: "url1.com",
                id: "",
              },
              {
                urlName: "URL2",
                url: "url2.com",
                id: "",
              },
            ],
            id: "",
          },
        },
      },
    },
  },
};

/**
 * 制作物.
 */
export const userPortfolioMocks = {
  request: {
    query: GetUserUrlByIdDocument, // Codegenで生成されたクエリ Documentで終わるもの。
    variables: {
      userToken: cookies.get("ForestaID"),
    },
  },
  result: {
    data: {
      __typename: "Query",
      portfolios: {
        status: "success",
        msg: "取得に成功しました。",
        node: [
          {
            id: "ID",
            title: "制作物タイトル1",
            description: "詳細詳細詳細",
            img: "image.jpg",
            portfolioURL: "url.com",
            skills: ["Vue", "TypeScript"],
            specSheetId: "スプレッドシートID",
          },
          {
            id: "ID",
            title: "制作物タイトル2",
            description: "詳細詳細詳細",
            img: "image.jpg",
            portfolioURL: "url.com",
            skills: ["Vue", "TypeScript"],
            specSheetId: "スプレッドシートID",
          },
          {
            id: "ID",
            title: "制作物タイトル3",
            description: "詳細詳細詳細",
            img: "image.jpg",
            portfolioURL: "url.com",
            skills: ["Vue", "TypeScript"],
            specSheetId: "スプレッドシートID",
          },
        ],
      },
    },
  },
};

// プライベート
/**
 * 基本情報.
 */
export const userInfoMocks = {
  request: {
    query: GetSheetByUserIdDocument, // Codegenで生成されたクエリ Documentで終わるもの。
    variables: {
      userToken: cookies.get("ForestaID"),
    },
  },
  result: {
    // データをモック
    data: {
      __typename: "Query",
      user: {
        status: "success",
        msg: "取得に成功しました。",
        node: {
          userInfo: {
            id: "ユーザID",
            stuffID: "FR-123-4567",
            age: 20,
            gender: "男",
            nearestStation: "ほげほげ駅(ほげほげ線)",
            startWorkDate: "応相談",
            seExpAmount: 3,
            pgExpAmount: 12,
            itExpAmount: 30,
            specSheetId: "スプレッドシートID",
          },
        },
      },
    },
  },
};

/**
 * 自己PR.
 */
export const userPrMocks = {
  request: {
    query: GetSheetPrByUserIdDocument, // Codegenで生成されたクエリ Documentで終わるもの。
    variables: {
      userToken: "",
    },
  },
  result: {
    // データをモック
    data: {
      __typename: "Query",
      pr: {
        status: "success",
        msg: "取得に成功しました。",
        node: {
          id: "ユーザID",
          selfIntro: "自己PR",
        },
      },
    },
  },
};

/**
 * スキル要約.
 */
export const userSkillMocks = {
  request: {
    query: GetSheetPrByUserIdDocument, // Codegenで生成されたクエリ Documentで終わるもの。
    variables: {
      userToken: "",
    },
  },
  result: {
    // データをモック
    data: {
      __typename: "Query",
      skills: {
        status: "success",
        msg: "取得に成功しました。",
        node: {
          techInfo: {
            id: "ユーザID",
            operationEnvs: ["Mac", "Windows", "Linux"],
            languages: ["TypeScript", "HTML", "CSS"],
            frameworks: ["Vue", "React", "Angular"],
            libraries: ["React-hook-form", "Jest", "StoryBook"],
            otherTools: ["Figma", "スプレッドシート"],
            devRoles: ["詳細設計", "実装", "テスト"],
            specSheetId: "スプレッドシートID",
          },
        },
      },
    },
  },
};

/**
 * 開発経験.
 */
export const userProjectMocks = {
  request: {
    query: GetSheetProjectByUserIdDocument, // Codegenで生成されたクエリ Documentで終わるもの。
    variables: {
      userToken: "",
    },
  },
  result: {
    // データをモック
    data: {
      __typename: "Query",
      projects: {
        status: "success",
        msg: "取得に成功しました。",
        node: {
          project: [
            {
              id: "ユーザID",
              name: "プロジェクトタイトル",
              startedAt: "Tue Mar 01 2022 09:00:00 GMT+0900 (日本標準時)",
              finishedAt: "Thu Mar 31 2022 09:00:00 GMT+0900 (日本標準時)",
              roleSharing: "PG",
              memberCount: 30,
              content: "プロジェクトについての詳細説明です。",
              operationEnvs: ["Mac", "Windows", "Linux"],
              languages: ["TypeScript", "HTML", "CSS"],
              frameworks: ["Vue", "React", "Angular"],
              libraries: ["React-hook-form", "Jest", "StoryBook"],
              otherTools: ["Figma", "スプレッドシート"],
              devRoles: ["詳細設計", "実装", "テスト"],
              specSheetId: "スプレッドシートID",
            },
          ],
        },
      },
    },
  },
};

/**
 * その他情報.
 */
export const userOtherMocks = {
  request: {
    query: GetSheetOtherByUserIdDocument, // Codegenで生成されたクエリ Documentで終わるもの。
    variables: {
      userToken: "",
    },
  },
  result: {
    // データをモック
    data: {
      __typename: "Query",
      other: {
        status: "success",
        msg: "取得に成功しました。",
        node: {
          id: "ユーザID",
          studyOnOwnTime: "業務外に行っている事",
          certification: "ITパスポート",
          prevJobs: [
            {
              content: "前職経験1",
            },
            {
              content: "前職経験2",
            },
          ],
        },
      },
    },
  },
};
