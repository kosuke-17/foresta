import { Portfolio, Skill, SpecSheet } from "../../../models";
import { IdType, UserIdType } from "../../../types";
import { success } from "../responseStatus";

/**
 *  ## スペックシート・ポートフォリオの取得
 */
const specSheetQueries = {
  /**
   * ユーザーIDに紐づくスペックシートの取得.
   * @param userId - ユーザーID
   * @returns ユーザーIDに紐づくスペックシート
   */
  getSheetByUserId: async (_: any, { userId }: UserIdType) => {
    try {
      const result = await SpecSheet.findOne({ userId: userId });
      if (result === null) {
        return {
          status: "error",
          message: "該当のスペックシートが見つかりません。",
        };
      }
      return success(result);
    } catch (error) {
      return {
        status: "error",
      };
    }
  },
  /**
   * ユーザーIDに紐づくポートフォリオの取得.
   *
   * @param userId - ユーザーID
   * @returns ユーザーIDに紐づくポートフォリオ
   */
  getPortfolioByUserId: async (_: any, { userId }: UserIdType) => {
    try {
      const result = await Portfolio.findOne({ userId: userId });
      if (result === null) {
        return {
          status: "error",
          message: "該当のポートフォリオが見つかりません。",
        };
      }
      return success(result);
    } catch (error) {
      return {
        status: "error",
      };
    }
  },
  getAllSkill: async () => {
    return await Skill.find({});
  },
  getOperationEnvs: async (_: any, { _id }: IdType) => {
    return await Skill.findById({ _id: _id });
  },
  getLanguages: async (_: any, { _id }: IdType) => {
    return await Skill.findById({ _id: _id });
  },
  getFrameworks: async (_: any, { _id }: IdType) => {
    return await Skill.findById({ _id: _id });
  },
  getLibraries: async (_: any, { _id }: IdType) => {
    return await Skill.findById({ _id: _id });
  },
  getOtherTools: async (_: any, { _id }: IdType) => {
    return await Skill.findById({ _id: _id });
  },
};

export default specSheetQueries;
