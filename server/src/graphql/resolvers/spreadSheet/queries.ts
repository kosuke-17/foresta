import { google } from "googleapis";
import { GoogleAuth } from "google-auth-library";
import { Users } from "../../../models";
import { UserToken } from "../../../types";
import { error, success } from "../responseStatus";
import { verifyJwtToken } from "../../../utli/fncJwtToken";

const sepreadSheetQueries = {
  /**
   * ユーザーのスプレッドシートのデータを取得する.
   *
   * @param userToken - ユーザートークン
   * @returns 取得ステータス
   */
  getSpreadSheet: async (_: any, { userToken }: UserToken) => {
    const userId = verifyJwtToken(userToken);
    const user = await Users.findById({ _id: userId });
    if (user === null) {
      return error("該当のユーザーがいませんでした。");
    }
    // スプレッドシートのIDを取得
    const spreadsheetId = user.spreadSheetID;
    if (!spreadsheetId) {
      return error("該当のスプレッドシートIDがありませんでした");
    }
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
