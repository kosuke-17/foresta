import { Portfolio } from "../../../models/SpecSheet.model";
import { success } from "../responseStatus";

const specSheetQueries = {
  // getSheetByUserId: (_: any) => {},
  /**
   * ユーザーIDに紐づくポートフォリオの取得.
   *
   * @param userId - ユーザーID
   * @returns ユーザーIDに紐づくポートフォリオ
   */
  getPortfolioByUserId: async (_: any, { userId }: any) => {
    try {
      const result = await Portfolio.findOne({ userId: userId });
      if (result === null) {
        return {
          status: "error",
          message: "該当のデータが見つかりませんでした",
        };
      }
      return success(result);
    } catch (error) {
      return {
        status: "error",
      };
    }
  },
};

export default specSheetQueries;
