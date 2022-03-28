import { Users } from "../../../models";
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
   * ユーザーIDまたはユーザーユニークIDに紐づくユーザー情報を取得する.
   *
   * @param userToken - ユーザートークン
   * @param userUuid - ユーザーユニークID
   * @returns ユーザーIDまたはユーザーユニークIDに紐づくユーザー情報
   */
  getUserById: async (
    _: any,
    { userToken, userUuid }: { userToken: string; userUuid: string }
  ) => {
    try {
      let result;
      // 本人情報を取得
      if (userToken) {
        const userId = verifyJwtToken(userToken);
        result = await Users.findById({ _id: userId });
      }
      // 本人以外のユーザー情報を取得
      if (userUuid) {
        result = await Users.findOne({ _uuid: userUuid });
      }
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
