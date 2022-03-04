import {
  SpecSheet,
  SpecTechInfoSheet,
  SpecUserInfoSheet,
} from "../../../models/SpecSheet.model";
import { success } from "../responseStatus";

const speckSheetMutations = {
  /**
   * スペックシートの情報を更新
   *
   * @param speckSheet - スペックシートの情報
   * @returns 更新したスペックシートの情報
   */
  updateSpeckSheet: async (_: any, { speckSheet }: any) => {
    const { speckSheetId, selfIntro, studyOnOwnTime, certification, prevJobs } =
      speckSheet;
    try {
      // 前職内容をアップデートするオブジェクト生成
      const updatePrevJobs = new Array();
      for (const prevJob of prevJobs) {
        const updatePrevJob = new Object({ content: prevJob });
        updatePrevJobs.push(updatePrevJob);
      }

      // スペックシート更新
      const result = await SpecSheet.findByIdAndUpdate(
        { _id: speckSheetId },
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
  updateSpeckTechInfo: async (_: any, { specTechInfo }: any) => {
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
      return { status: "error" };
    }
  },
};

export default speckSheetMutations;
