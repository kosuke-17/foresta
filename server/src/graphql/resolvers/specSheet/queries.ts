import { Portfolio, Skill, SpecSheet } from "../../../models";
import { NameType, UserToken } from "../../../types";
import { verifyJwtToken } from "../../../utli/fncJwtToken";
import { error, success } from "../responseStatus";

/**
 *  ## スペックシート・ポートフォリオの取得
 */
const specSheetQueries = {
  /**
   * ユーザーIDに紐づくスペックシートの取得.
   * @param userToken - ユーザートークン
   * @returns ユーザーIDに紐づくスペックシート
   */
  getSheetByUserId: async (_: any, { userToken }: UserToken) => {
    const userId = verifyJwtToken(userToken);
    try {
      const result = await SpecSheet.findOne({ userId: userId });
      if (result === null) {
        return error("該当のスペックシートが見つかりません。");
      }
      return success(result, "取得に成功しました。");
    } catch {
      return error("取得に失敗しました。");
    }
  },
  /**
   * ユーザーIDに紐づくポートフォリオの取得.
   *
   * @param userId - ユーザーID
   * @returns ユーザーIDに紐づくポートフォリオ
   */
  getPortfolioByUserId: async (_: any, { userToken }: UserToken) => {
    const userId = verifyJwtToken(userToken);
    try {
      const result = await Portfolio.find({ userId: userId });
      if (result === null) {
        return error("該当のポートフォリオが見つかりません。");
      }
      return success(result, "取得に成功しました。");
    } catch {
      return error("取得に失敗しました。");
    }
  },
  getAllSkill: async () => {
    return await Skill.find({});
  },
  getOperationEnvs: async (_: any, { name }: NameType) => {
    return await Skill.findOne({ name: name });
  },
  getLanguages: async (_: any, { name }: NameType) => {
    return await Skill.findOne({ name: name });
  },
  getFrameworks: async (_: any, { name }: NameType) => {
    return await Skill.findOne({ name: name });
  },
  getLibraries: async (_: any, { name }: NameType) => {
    return await Skill.findOne({ name: name });
  },
  getOtherTools: async (_: any, { name }: NameType) => {
    return await Skill.findOne({ name: name });
  },
};

export default specSheetQueries;
