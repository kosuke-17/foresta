import { UserUrls } from "../../../models/User.model";
import { success } from "../responseStatus";

const userUrlsMutations = {
  /**
   * ユーザーのurl情報を作成.
   *
   * @param user - ユーザー情報
   * @returns success : successステータス,作成したURL情報
   * @returns error : errorステータス
   */
  createUserUrls: async (_parent: any, { user }: any) => {
    const { urlName, url, userId } = user;

    try {
      const createUserUrls = new UserUrls({
        user_urls: [
          {
            urlName: urlName,
            url: url,
          },
        ],
        userId: userId,
      });

      const result = await createUserUrls.save();
      return success(result);
    } catch (error) {
      return { status: "error" };
    }
  },
  /**
   * ユーザーのurl情報を追加.
   *
   * @param user - ユーザー情報
   * @returns success : successステータス,追加したURL情報
   * @returns error : errorステータス
   */
  addUserUrls: async (_parent: any, { user }: any) => {
    const { urlName, url, urlId } = user;
    const user_urls_obj = { urlId, urlName: urlName, url: url };
    try {
      const result = await UserUrls.findByIdAndUpdate(
        { _id: urlId },
        { $addToSet: { user_urls: user_urls_obj } }
      );
      return success(result);
    } catch (error) {
      return { status: "error" };
    }
  },
  /**
   * ユーザーのurl情報を削除.
   *
   * @param user - ユーザー情報
   * @returns success : successステータス,追加したURL情報
   * @returns error : errorステータス
   */
  removeUserUrls: async (_parent: any, { user }: any) => {
    const { urlId, userUrlsId } = user;

    try {
      const result = await UserUrls.findOneAndUpdate(
        {
          _id: userUrlsId,
        },
        {
          $pull: {
            user_urls: { _id: urlId },
          },
        },
        { new: true }
      );
      return success(result);
    } catch (error) {
      return { status: "error" };
    }
  },
};

export default userUrlsMutations;
