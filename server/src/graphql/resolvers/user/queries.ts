import { Users } from "../../../models";
import { IdType } from "../../../types";
import { error, success } from "../responseStatus";
/**
 * ## ユーザーの取得
 */
const userQueries = {
  /**
   * ユーザー一覧情報を取得.
   *
   * @returns ユーザー一覧情報
   */
  getAllUser: async () => await Users.find({}),
  /**
   * ユーザーIDに紐づくユーザー情報を取得する.
   *
   * @param _id - ユーザーID
   * @returns ユーザーIDに紐づくユーザー情報
   */
  getUserById: async (_: any, { _id }: IdType) => {
    try {
      const result = await Users.findById({ _id });
      return success(result, "取得に成功しました。");
    } catch {
      return error("取得に失敗しました。");
    }
  },
};

export default userQueries;
