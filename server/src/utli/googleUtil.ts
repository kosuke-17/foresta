import { google } from "googleapis";
import { GoogleAuth } from "google-auth-library";
export const getGoogleAuth = async () => {
  const auth = new GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  // 認証のためのクライアント作成
  const client = await auth.getClient();
  // Google Sheets APIのインスタンス作成
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const data = { client, googleSheets };

  return data;
};
