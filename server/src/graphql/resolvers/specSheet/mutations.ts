import {
  Portfolio,
  SpecProjectSheet,
  SpecSheet,
  SpecTechInfoSheet,
  SpecUserInfoSheet,
} from "../../../models/SpecSheet.model";
import { success } from "../responseStatus";

/**
 * ## スペックシートの変更処理
 */
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
  /**
   * スペックシートの開発経験(プロジェクト)を更新
   *
   * @param specProject - 開発経験の情報
   * @returns 更新したスペックシートの開発経験情報
   */
  updateSpecProject: async (_: any, { specProject }: any) => {
    const {
      specProjectId,
      name,
      startedAt,
      finishedAt,
      roleSharing,
      memberCount,
      content,
      operationEnvs,
      languages,
      frameworks,
      libraries,
      OtherTools,
      devRoles,
      specSheetId,
    } = specProject;
    try {
      const result = await SpecProjectSheet.findOneAndUpdate(
        { _id: specProjectId, specSheetId: specSheetId },
        {
          $set: {
            name: name,
            startedAt: startedAt,
            finishedAt: finishedAt,
            roleSharing: roleSharing,
            memberCount: memberCount,
            content: content,
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
  /**
   * プロジェクトの追加
   *
   * @param specProject - 追加プロジェクト情報
   * @returns 追加したプロジェクト情報
   */
  addSpecProject: async (_: any, { specProject }: any) => {
    const {
      name,
      startedAt,
      finishedAt,
      roleSharing,
      memberCount,
      content,
      operationEnvs,
      languages,
      frameworks,
      libraries,
      OtherTools,
      devRoles,
      specSheetId,
    } = specProject;

    const createProject = new SpecProjectSheet({
      name,
      startedAt,
      finishedAt,
      roleSharing,
      memberCount,
      content,
      operationEnvs: [...operationEnvs],
      languages: [...languages],
      frameworks: [...frameworks],
      libraries: [...libraries],
      OtherTools: [...OtherTools],
      devRoles: [...devRoles],
      specSheetId,
    });

    try {
      const result = createProject.save();
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      // modelの型とsetしてるデータの方が違うとエラーを返す
      return { status: "error" };
    }
  },
  removeSpecProject: async (_: any, { specProjectId }: any) => {
    try {
      const result = await SpecProjectSheet.findByIdAndRemove({
        _id: specProjectId,
      });
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * ポートフォリオの作成
   *
   * @param portfolio - 作成ポートフォリオ情報
   * @returns 作成したポートフォリオ情報
   */
  createPortfolio: async (_: any, { portfolio }: any) => {
    const { title, description, img, portfolioURL, userId, specSheetId } =
      portfolio;
    const newPortfolio = new Portfolio({
      title,
      description,
      img,
      portfolioURL,
      userId,
      specSheetId,
    });
    try {
      const result = await newPortfolio.save();
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * ポートフォリオの編集
   *
   * @param portfolio - 編集ポートフォリオ情報
   * @returns 編集したポートフォリオ情報
   */
  updatePortfolio: async (_: any, { portfolio }: any) => {
    const { portfolioId, title, description, img, portfolioURL } = portfolio;
    try {
      const result = await Portfolio.findByIdAndUpdate(
        { _id: portfolioId },
        { $set: { title, description, img, portfolioURL } },
        { new: true }
      );
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * ポートフォリオの削除
   *
   * @param portfolioID - ポートフォリオID
   * @returns 削除処理ステータス
   */
  removePortfolio: async (_: any, { portfolioId }: any) => {
    try {
      const result = await Portfolio.findByIdAndRemove({ _id: portfolioId });
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
};

export default specSheetMutations;
