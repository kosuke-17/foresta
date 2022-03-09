import { google } from "googleapis";
import { GoogleAuth } from "google-auth-library";
import { SpecSheet, SpecUserInfoSheet, Users } from "../../../models";
import { UserIdType } from "../../../types";
import { error, success } from "../responseStatus";

const spreadSheetMutations = {
  /**
   * スプレッドシートにデータを追加する.
   *
   * @param userId - ユーザーID
   * @returns 処理ステータス
   */
  updateSpreadSheet: async (_: any, { userId }: UserIdType) => {
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
      return success("", "スプレッドシートを更新しました。");
    } catch {
      error("スプレッドシートを更新できませんでした。");
    }
  },
};

export default spreadSheetMutations;
