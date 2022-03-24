import { UserUrls } from "../../../models";
import { UrlDataAddType, UrlDataRemoveType } from "../../../types";
import { error, success } from "../responseStatus";

const userUrlsMutations = {
  /**
   * ユーザーのurl情報を追加.
   *
   * @param urlData - url情報
   * @returns success : successステータス,追加したURL情報
   * @returns error : errorステータス
   */
  addUserUrls: async (_parent: any, { urlData }: UrlDataAddType) => {
    try {
      const result = await UserUrls.findByIdAndUpdate(
        { _id: urlData.urlId },
        { $addToSet: { user_urls: urlData } },
        { new: true }
      );
      return success(result, "追加に成功しました。");
    } catch {
      return error("追加に失敗しました。");
    }
  },
  /**
   * ユーザーのurl情報を削除.
   *
   * @param user - ユーザー情報
   * @returns success : successステータス,追加したURL情報
   * @returns error : errorステータス
   */
  removeUserUrls: async (_: any, { urlData }: UrlDataRemoveType) => {
    const { urlId, userUrlsId } = urlData;

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
      return success(result, "削除に成功しました。");
    } catch {
      return error("削除に失敗しました。");
    }
  },
};

export default userUrlsMutations;
