import { Users } from "../../../models/User.model";

const userQueries = {
  /**
   * ユーザー一覧情報を取得する.
   *
   * @returns ユーザー一覧情報
   */
  getAllUser: async (_parent: any, _args: any) => {
    return await Users.find({});
  },
  user: async (_parent: any, { _id }: any) => {
    return await Users.findById({ _id });
  },
};

export default userQueries;
