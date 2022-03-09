import { google } from "googleapis";
import { GoogleAuth } from "google-auth-library";
import { SpecSheet, SpecUserInfoSheet, Users, UserUrls } from "../../../models";
import { UserIdType } from "../../../types";
import { error, success } from "../responseStatus";

const spreadSheetMutations = {
  /**
   * スプレッドシートに基本情報データを追加する.
   *
   * @param userId - ユーザーID
   * @returns 処理ステータス
   */
  updateSpreadUserInfo: async (_: any, { userId }: UserIdType) => {
    const user = await Users.findById({ _id: userId });
    const specSheet = await SpecSheet.findOne({ userId: userId });
    const specSheetUserInfo = await SpecUserInfoSheet.findOne({
      userId: specSheet.userId,
    });

    const stuffIDData = specSheetUserInfo.stuffID;
    const genderData = specSheetUserInfo.gender;
    const stationData = specSheetUserInfo.nearestStation;
    const seExp = specSheetUserInfo.seExpAmount + "ヶ月";
    const pgExp = specSheetUserInfo.pgExpAmount + "ヶ月";
    const engTotalExp =
      specSheetUserInfo.seExpAmount + specSheetUserInfo.pgExpAmount + "ヶ月";
    const itExp = specSheetUserInfo.itExpAmount + "ヶ月";
    let ageInfo = "デフォルト";
    if (specSheetUserInfo.age < 25) {
      ageInfo = "20代前半";
    } else if (specSheetUserInfo.age < 30) {
      ageInfo = "20代後半";
    } else {
      ageInfo = "30代前半";
    }
    if (user === null) {
      return error("該当のユーザーがいませんでした。");
    }
    // スプレッドシートのIDを取得
    const spreadsheetId = user.spreadSheetID;
    if (!spreadsheetId) {
      return error("該当のスプレッドシートIDがありませんでした");
    }
    // スプレッドシートのシート名を指定
    const sheetRange = "スペックシート!B4:BB6";

    const auth = new GoogleAuth({
      keyFile: "credentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
    // 認証のためのクライアント作成
    const client = await auth.getClient();
    // Google Sheets APIのインスタンス作成
    const googleSheets = google.sheets({ version: "v4", auth: client });
    const request = {
      spreadsheetId: spreadsheetId,
      requestBody: {
        valueInputOption: "USER_ENTERED",
        data: [
          {
            range: sheetRange,
            majorDimension: "ROWS",
            values: [
              [
                "スタッフID",
                "",
                "",
                "",
                "",
                stuffIDData,
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "年齢",
                "",
                "",
                ageInfo,
                "",
                "",
                "",
                "",
                "",
                "性別",
                "",
                "",
                genderData,
                "",
                "",
                "最寄駅",
                "",
                "",
                "",
                stationData,
              ],
              [
                "エンジニア歴",
                "",
                "",
                "",
                "",
                engTotalExp,
                "",
                "",
                "",
                "",
                "",
                "<--内訳--",
                "",
                "",
                "",
                "",
                "ＳＥ経験",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                seExp,
                "",
                "",
                "",
                "",
                "",
                "",
                "IT全体経験",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                itExp,
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
              ],
              [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "ＰＧ・作業員経験",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                pgExp,
              ],
            ],
          },
        ],
      },

      auth: client,
    };
    try {
      await googleSheets.spreadsheets.values.batchUpdate(request);
      return success("", "更新に成功しました。");
    } catch {
      return error("更新に失敗しました。");
    }
  },
  /**
   * ポートフォリオのためのUrlデータを出力する.
   *
   * @param userID - ユーザーID
   * @returns 処理のステータス
   */
  updateSpreadPortfolioUrl: async (_: any, { userId }: UserIdType) => {
    const user = await Users.findById({ _id: userId });
    const userUrls = await UserUrls.findOne({ userId: userId });
    if (!userUrls) {
      return error("該当のユーザーURLsがありませんでした");
    }
    const portfolioData = userUrls.user_urls.map(
      (urlData: any) => `${urlData.urlName} : ${urlData.url}`
    );
    const JoinedData = portfolioData.join("\n");

    // スプレッドシートのIDを取得
    const spreadsheetId = user.spreadSheetID;
    if (!spreadsheetId) {
      return error("該当のスプレッドシートIDがありませんでした");
    }
    // スプレッドシートのシート名を指定
    const sheetRange = "スペックシート!B9";

    const auth = new GoogleAuth({
      keyFile: "credentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
    // 認証のためのクライアント作成
    const client = await auth.getClient();
    // Google Sheets APIのインスタンス作成
    const googleSheets = google.sheets({ version: "v4", auth: client });
    const request = {
      spreadsheetId: spreadsheetId,
      requestBody: {
        valueInputOption: "USER_ENTERED",
        data: [
          {
            range: sheetRange,
            majorDimension: "ROWS",
            values: [[JoinedData]],
          },
        ],
      },

      auth: client,
    };

    try {
      await googleSheets.spreadsheets.values.batchUpdate(request);
      return success("", "更新に成功しました。");
    } catch {
      return error("更新に失敗しました。");
    }
  },
  /**
   * 自己PR、勤務時間外の学習、資格、前職経験を出力する.
   *
   * @param userID - ユーザーID
   * @returns 処理のステータス
   */
  updateSpeadSelfPR: async (_: any, { userId }: UserIdType) => {
    const user = await Users.findById({ _id: userId });
    const { selfIntro, studyOnOwnTime, certification, prevJobs } =
      await SpecSheet.findOne({
        userId: userId,
      });

    const jobsData = prevJobs.map((prevJob: any) => prevJob.content);
    const JoinedData = jobsData.join("\n\n");

    // スプレッドシートのシート名を指定
    const sheetRange = "スペックシート!B18:BB25";
    // スプレッドシートのIDを取得(必須)
    const spreadsheetId = user.spreadSheetID;
    if (!spreadsheetId) {
      return error("該当のスプレッドシートIDがありませんでした");
    }
    const auth = new GoogleAuth({
      keyFile: "credentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
    // 認証のためのクライアント作成
    const client = await auth.getClient();
    // Google Sheets APIのインスタンス作成
    const googleSheets = google.sheets({ version: "v4", auth: client });

    const request = {
      spreadsheetId: spreadsheetId,
      requestBody: {
        valueInputOption: "USER_ENTERED",
        data: [
          {
            range: sheetRange,
            majorDimension: "ROWS",
            values: [
              ["アピールポイント・前職経験"],
              [selfIntro],
              ["業務外に取り組んでいること"],
              [studyOnOwnTime],
              ["資格"],
              [certification],
              ["前職経験"],
              [JoinedData],
            ],
          },
        ],
      },

      auth: client,
    };

    try {
      await googleSheets.spreadsheets.values.batchUpdate(request);
      return success("", "更新に成功しました。");
    } catch {
      return error("更新に失敗しました。");
    }
  },
};

export default spreadSheetMutations;
