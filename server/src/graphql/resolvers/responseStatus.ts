// レスポンスで返すステータス
export enum QueryStatus {
  success = "success",
  error = "error",
}
/**
 *
 * @param node - リターンするデータ
 * @param msg - メッセージ
 * @returns success
 * @returns オブジェクトまたは配列
 * @returns サクセスメッセージ
 */
export const success = (node: any, msg?: string) => ({
  status: QueryStatus.success,
  node,
  msg,
});
/**
 *
 * @param msg - メッセージ
 * @returns error
 * @returns エラーメッセージ
 */
export const error = (msg: string) => ({
  status: QueryStatus.error,
  msg,
});
