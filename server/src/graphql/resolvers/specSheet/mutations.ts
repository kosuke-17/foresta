import {
  SpecSheet,
  SpecTechInfoSheet,
  SpecUserInfoSheet,
} from "../../../models/SpecSheet.model";
import { success } from "../responseStatus";

const specSheetMutations = {
  /**
   * スペックシートの情報を更新
   *
   * @param specSheet - スペックシートの情報
   * @returns 更新したスペックシートの情報
   */
  updateSpecSheet: async (_: any, { specSheet }: any) => {
    const { specSheetId, selfIntro, studyOnOwnTime, certification, prevJobs } =
      specSheet;
    try {
      // 前職内容をアップデートするオブジェクト生成
      const updatePrevJobs = new Array();
      for (const prevJob of prevJobs) {
        const updatePrevJob = new Object({ content: prevJob });
        updatePrevJobs.push(updatePrevJob);
      }

      // スペックシート更新
      const result = await SpecSheet.findByIdAndUpdate(
        { _id: specSheetId },
        {
          $set: {
            selfIntro: selfIntro,
            studyOnOwnTime: studyOnOwnTime,
            certification: certification,
            prevJobs: updatePrevJobs,
          },
        },
        {
          new: true,
        }
      );
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * スペックシートのユーザー情報を更新
   *
   * @param specUserInfo - ユーザーの情報
   * @returns 更新したスペックシートのユーザー情報
   */
  updateSpecUserInfo: async (_: any, { specUserInfo }: any) => {
    const {
      specUserInfoId,
      stuffID,
      age,
      gender,
      nearestStation,
      startWorkDate,
      seExpAmount,
      pgExpAmount,
      itExpAmount,
      specSheetId,
    } = specUserInfo;

    try {
      const result = await SpecUserInfoSheet.findByIdAndUpdate(
        { _id: specUserInfoId },
        {
          stuffID,
          age,
          gender,
          nearestStation,
          startWorkDate,
          seExpAmount,
          pgExpAmount,
          itExpAmount,
          specSheetId,
        },
        { new: true }
      );

      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * スペックシートのスキル要約を更新
   *
   * @param specTechInfo - スキル要約の情報
   * @returns 更新したスペックシートのスキル要約情報
   */
  updateSpecTechInfo: async (_: any, { specTechInfo }: any) => {
    const {
      specTechInfoId,
      operationEnvs,
      languages,
      frameworks,
      libraries,
      OtherTools,
      devRoles,
      specSheetId,
    } = specTechInfo;
    try {
      const result = await SpecTechInfoSheet.findOneAndUpdate(
        { _id: specTechInfoId, specSheetId: specSheetId },
        {
          $set: {
            operationEnvs: [...operationEnvs],
            languages: [...languages],
            frameworks: [...frameworks],
            libraries: [...libraries],
            OtherTools: [...OtherTools],
            devRoles: [...devRoles],
          },
        },
        { new: true }
      );

      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      // modelの型とsetしてるデータの方が違うとエラーを返す
      return { status: "error" };
    }
  },
};

export default specSheetMutations;
