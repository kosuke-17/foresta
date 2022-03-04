
import { format } from "date-fns";

/**
 * 日時データをフォーマットして返すメソッド.
 *
 * @param date - フォーマットしたい日時データ
 * @returns "YYYY年MM月DD日"の形でフォーマットされた日時
 */
export const getFormattedDate = (date: Date) => {
  return format(date, "yyyy/MM/dd");
};

/**
 * 日時データを月と日だけでフォーマットして返すメソッド.
 *
 * @param date - フォーマットしたい日時データ
 * @returns "MM月DD日"の形でフォーマットされた日時
 */
export const getFormattedDateWithoutYear = (date: Date) => {
  return format(date, "MM/dd");
};
