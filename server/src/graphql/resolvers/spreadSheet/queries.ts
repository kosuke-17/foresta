import { google } from "googleapis";
import { GoogleAuth } from "google-auth-library";
import { Users } from "../../../models/User.model";
import { UserIdType } from "../../../types";
import { error, success } from "../responseStatus";

const sepreadSheetQueries = {
  /**
   * ユーザーのスプレッドシートのデータを取得する.
   *
   * @param userID - ユーザーID
   * @returns 取得ステータス
   */
  getSpreadSheet: async (_: any, { userId }: UserIdType) => {
    const user = await Users.findById({ _id: userId });
    if (user === null) {
      return console.error();
      ("該当のユーザーがいませんでした。");
    }
    // スプレッドシートのIDを取得
    const spreadsheetId = user.spreadSheetID;
    // スプレッドシートのシート名を指定
    const sheetRange = "スペックシート";

    const auth = new GoogleAuth({
      keyFile: "credentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
    // 認証のためのクライアント作成
    const client = await auth.getClient();
    // Google Sheets APIのインスタンス作成
    const googleSheets = google.sheets({ version: "v4", auth: client });

    try {
      // スプレッドシートに存在するデーたを取得する
      const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: sheetRange,
      });
      console.dir(getRows.data.values);
      return success("", "スプレッドシートを取得しました。");
    } catch (e) {
      error("スプレッドシートを取得できませんでした。");
    }
  },
};

export default sepreadSheetQueries;
