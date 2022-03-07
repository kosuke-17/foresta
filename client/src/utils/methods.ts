
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

/**
  * Todo用にフォーマットされた日付を返すメソッド.
  *
  * @remarks
  * 終了日が設定されている場合とされてない場合で場合分け
  * @param startedA - 対象のTodoの開始日
  * @param finishedAt - 対象のTodoの終了日
  * @returns フォーマットされた日付
  */
export const getformattedTodoDate = (startedAt: string, finishedAt: string): string => {
  if (startedAt && finishedAt) {
    return `${getFormattedDate(
      new Date(startedAt),
    )}-${getFormattedDateWithoutYear(new Date(finishedAt))}`;
  } else if (startedAt) {
    return `${getFormattedDate(new Date(startedAt))}`;
  } else {
    return "未定";
  }
};
