import { google } from "googleapis";
import { GoogleAuth } from "google-auth-library";
import { SpecSheet, SpecUserInfoSheet, Users } from "../../../models";
import { UserIdType } from "../../../types";
import { error, success } from "../responseStatus";

const spreadSheetMutations = {
  updateSpreadSheet: async (_: any, { userId }: UserIdType) => {
    const user = await Users.findById({ _id: userId });
    const specSheet = await SpecSheet.findOne({ userId: userId });
    const specSheetUserInfo = await SpecUserInfoSheet.findOne({
      userId: specSheet.userId,
    });

    const stuffIDData = specSheetUserInfo.stuffID;
    if (user === null) {
      return error("該当のユーザーがいませんでした。");
    }
    // スプレッドシートのIDを取得
    const spreadsheetId = user.spreadSheetID;
    // スプレッドシートのシート名を指定
    const sheetRange = "スペックシート!G4";

    const auth = new GoogleAuth({
      keyFile: "credentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
    // 認証のためのクライアント作成
    const client = await auth.getClient();
    // Google Sheets APIのインスタンス作成
    const googleSheets = google.sheets({ version: "v4", auth: client });

    try {
      /**
       * valueInputOption: "USER_ENTERED",
       * 値は、ユーザーがUIに入力したかのように解析されます。数字は数字のままですが、GoogleスプレッドシートのUIを使用してセルにテキストを入力するときに適用されるのと同じルールに従って、文字列を数字や日付などに変換できます。
       */
      await googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range: sheetRange,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [["stuffIDData"]],
        },
      });
      return success("", "スプレッドシートを取得しました。");
    } catch {
      error("スプレッドシートを取得できませんでした。");
    }
  },
};

export default spreadSheetMutations;
