import { Users } from "../../../models";
import { UserToken } from "../../../types";
import { verifyJwtToken } from "../../../utli/fncJwtToken";
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
   * @param userToken - ユーザートークン
   * @returns ユーザーIDに紐づくユーザー情報
   */
  getUserById: async (_: any, { userToken }: UserToken) => {
    const userId = verifyJwtToken(userToken);
    try {
      const result = await Users.findById({ _id: userId });
      if (result === null) {
        return error("該当のユーザーが見つかりません。");
      }

      return success(result, "取得に成功しました。");
    } catch {
      return error("取得に失敗しました。");
    }
  },
};

export default userQueries;
