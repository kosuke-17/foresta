import { Users } from "../../../models";
import { UserUuid } from "../../../types";
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
   * ユーザーユニークIDに紐づくユーザー情報を取得する.
   *
   * @param userUuid - ユーザーユニークID
   * @returns ユーザーIDに紐づくユーザー情報
   */
  getUserById: async (_: any, { userUuid }: UserUuid) => {
    try {
      const result = await Users.findOne({ _uuid: userUuid });
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
