import { ChartData, ChartOptions } from "chart.js";
import { Todo, Portfolio, User, StudyStack } from "./generated/graphql";

// Todoの型
export type TodoData = Pick<
  Todo,
  "id" | "title" | "description" | "startedAt" | "finishedAt" | "isStatus"
>;

// Todoモーダルのモードの型
export type TodoModalModeType = "read" | "update" | "create" | "delete";

//ユーザ型
export type UserType = Pick<
  User,
  "id" | "name" | "jobType" | "githubURL" | "spreadSheetID"
>;

//制作物
export type PortfolioType = Pick<
  Portfolio,
  | "id"
  | "title"
  | "description"
  | "img"
  | "portfolioURL"
  | "specSheetId"
  | "skills"
>;

//ユーザ情報編集
export type userInfoEditType = {
  name: string;
  jobType: string;
  githubURL: string;
};

//技術ツリーの型
export type TechTree = {
  treeData: any;
  techTreeData: any;
  indexOfTreeData: number;
};

//技術リーフの型
export type TechLeaf = {
  treeData: any;
  techLeafData: any;
  techBranchData: any;
  indexOfTreeData: number;
  indexOfBranchData: number;
  indexOfLeafData: number;
  cheakedLeaf: (
    treeId: string,
    branchId: string,
    leafId: string,
    isStatus: boolean,
  ) => void;
};

// エンジニアの型
export type Engineer = {
  engineerData: {
    __typename?: "User" | undefined;
    id: string;
    name: string;
    jobType: string;
    email: string;
    password: string;
    githubURL: string;
  };
  key: number;
};

//学習リストの型
export type AddStack = Pick<
  StudyStack,
  "createdAt" | "skillTagId" | "timeStack" | "content"
>;

//Githubの草データを取得するときの型
export type GithubLeafType = {
  user: {
    login: string;
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
        weeks: [
          {
            contributionDays: [
              {
                contributionCount: number;
                date: string;
                color: string;
              },
            ];
          },
        ];
      };
    };
  };
};

//日にち毎の学習時間グラフ用
export type DayStackTime = {
  subDateBtn: () => void;
  dateValueDay: number;
  addDateBtn: () => void;
  chartDatas: {
    datasets: {
      label: string;
      data: {
        x: number;
        y: number;
      }[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }[];
  };
  dayOptions: any;
  pieDateData: ChartData<"pie">;
  dayPercentOptions: any;
};

//月毎の学習時間グラフ用
export type MonthStackTime = {
  subDateBtn: () => void;
  dateValueMonth: number;
  addDateBtn: () => void;
  chartDatas: {
    datasets: {
      label: string;
      data: {
        x: number;
        y: number;
      }[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }[];
  };
  monthOptions: any;
  pieMonthData: ChartData<"pie">;
  monthPercentOptions: ChartOptions<"pie">;
};
