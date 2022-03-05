import { Users } from "../../../models/User.model";
import { UserIdType } from "../../../types";
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
  getUserById: async (_: any, { _id }: UserIdType) =>
    await Users.findById({ _id }),
};

export default userQueries;
