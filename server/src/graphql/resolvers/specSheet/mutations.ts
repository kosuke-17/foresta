import {
  Portfolio,
  SpecProjectSheet,
  SpecSheet,
  SpecTechInfoSheet,
  SpecUserInfoSheet,
} from "../../../models";
import {
  PortfolioIdType,
  PortfolioType,
  SpecProjectType,
  SpecSheetIdType,
  SpecSheetType,
  SpecTechInfoType,
  SpecUserInfoType,
  PortfolioUpdateType,
  SpecProjectAddType,
} from "../../../types";
import { error, success } from "../responseStatus";

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
  updateSpecSheet: async (_: any, { specSheet }: SpecSheetType) => {
    const { specSheetId, selfIntro, studyOnOwnTime, certification, prevJobs } =
      specSheet;
    // スペックシートIDが""だったらエラー
    if (!specSheetId) {
      return error("スペックシートIDを入力してください。");
    }
    // スペックシートIDが24文字でなければエラー
    if (specSheetId.length !== 24) {
      return error("スペックシートIDが24文字ではありませんでした。");
    }

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
      // 該当のIDが存在したかのチェック
      if (result === null) return error("該当のIDが存在しません。");

      return success(result, "更新に成功しました。");
    } catch {
      return error("更新に失敗しました。");
    }
  },
  /**
   * スペックシートのユーザー情報を更新
   *
   * @param specUserInfo - ユーザーの情報
   * @returns 更新したスペックシートのユーザー情報
   */
  updateSpecUserInfo: async (_: any, { specUserInfo }: SpecUserInfoType) => {
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
    } = specUserInfo;

    // 基本情報IDが""だったらエラー
    if (!specUserInfoId) return error("基本情報IDを入力してください。");
    // 基本情報IDが24文字でなければエラー
    if (specUserInfoId.length !== 24) {
      return error("基本情報IDが24文字ではありませんでした。");
    }
    // stuffIDはFR-XXX-XXXXでないとエラー
    const regexStuffId = /^[A-Z]{2,3}\-(\d{3})-(\d{4})$/;
    if (!regexStuffId.test(stuffID)) {
      return error(
        "スタッフIDは「 FR-XXX-XXXX 」のフォーマットにしてください。"
      );
    }
    // startWorkDateはyyyy-mm-dd出ないとエラー
    const regexDate = /^[0-9]{4}\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/;
    if (!regexDate.test(startWorkDate)) {
      return error(
        "稼働開始日は「 yyyy-mm-dd 」のフォーマットにしてください。"
      );
    }

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
        },
        { new: true, runValidators: true }
      );

      return success(result, "更新に成功しました。");
    } catch {
      return error("更新に失敗しました。");
    }
  },
  /**
   * スペックシートのスキル要約を更新
   *
   * @param specTechInfo - スキル要約の情報
   * @returns 更新したスペックシートのスキル要約情報
   */
  updateSpecTechInfo: async (_: any, { specTechInfo }: SpecTechInfoType) => {
    const {
      specTechInfoId,
      operationEnvs,
      languages,
      frameworks,
      libraries,
      otherTools,
      devRoles,
    } = specTechInfo;
    // スキル要約IDが""だったらエラー
    if (!specTechInfoId) return error("スキル要約IDを入力してください。");

    try {
      const result = await SpecTechInfoSheet.findOneAndUpdate(
        { _id: specTechInfoId },
        {
          $set: {
            operationEnvs: [...operationEnvs],
            languages: [...languages],
            frameworks: [...frameworks],
            libraries: [...libraries],
            otherTools: [...otherTools],
            devRoles: [...devRoles],
          },
        },
        { new: true }
      );

      // 該当のIDが存在したかのチェック
      if (result === null) return error("該当のIDが存在しません。");

      return success(result, "更新に成功しました。");
    } catch {
      return error("更新に失敗しました。");
    }
  },
  /**
   * スペックシートの開発経験(プロジェクト)を更新
   *
   * @param specProject - 開発経験の情報
   * @returns 更新したスペックシートの開発経験情報
   */
  updateSpecProject: async (_: any, { specProject }: SpecProjectType) => {
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
      otherTools,
      devRoles,
    } = specProject;
    try {
      const result = await SpecProjectSheet.findOneAndUpdate(
        { _id: specProjectId },
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
            otherTools: [...otherTools],
            devRoles: [...devRoles],
          },
        },
        { new: true }
      );

      return success(result, "更新に成功しました。");
    } catch {
      return error("更新に失敗しました。");
    }
  },
  /**
   * プロジェクトの追加
   *
   * @param specProject - 追加プロジェクト情報
   * @returns 追加したプロジェクト情報
   */
  addSpecProject: async (_: any, { specProject }: SpecProjectAddType) => {
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
      otherTools,
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
      otherTools: [...otherTools],
      devRoles: [...devRoles],
      specSheetId,
    });

    try {
      const result = await createProject.save();
      return success(result, "追加に成功しました。");
    } catch {
      return error("追加に失敗しました。");
    }
  },
  /**
   * 開発経験の削除.
   *
   * @param specProjectId - 開発経験ID
   * @returns 削除処理ステータス
   */
  removeSpecProject: async (_: any, { specProjectId }: SpecSheetIdType) => {
    try {
      await SpecProjectSheet.findByIdAndRemove({ _id: specProjectId });
      return success("", "削除に成功しました。");
    } catch {
      return error("削除に失敗しました。");
    }
  },
  /**
   * ポートフォリオの作成.
   *
   * @param portfolio - 作成ポートフォリオ情報
   * @returns 作成したポートフォリオ情報
   */
  createPortfolio: async (_: any, { portfolio }: PortfolioType) => {
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
      return success(result, "作成に成功しました。");
    } catch {
      return error("作成に失敗しました。");
    }
  },
  /**
   * ポートフォリオの編集.
   *
   * @param portfolio - 編集ポートフォリオ情報
   * @returns 編集したポートフォリオ情報
   */
  updatePortfolio: async (_: any, { portfolio }: PortfolioUpdateType) => {
    const { portfolioId, title, description, img, portfolioURL } = portfolio;
    try {
      const result = await Portfolio.findByIdAndUpdate(
        { _id: portfolioId },
        { $set: { title, description, img, portfolioURL } },
        { new: true }
      );
      return success(result, "更新に成功しました。");
    } catch {
      return error("更新に失敗しました。");
    }
  },
  /**
   * ポートフォリオの削除.
   *
   * @param portfolioID - ポートフォリオID
   * @returns 削除処理ステータス
   */
  removePortfolio: async (_: any, { portfolioId }: PortfolioIdType) => {
    try {
      await Portfolio.findByIdAndRemove({ _id: portfolioId });
      return success("", "削除に成功しました。");
    } catch {
      return error("削除に失敗しました。");
    }
  },
};

export default specSheetMutations;
