import {
  TechArea,
  TechBranch,
  TechLeaf,
  TechTree,
} from "../../../models/TechForest.model";
import { success } from "../responseStatus";
import {
  TechAreaType,
  TechBranchType,
  TechLeafType,
  TechTreeType,
} from "../../../types";

/**
 * ## 技術ツリーの変更処理
 */
const techForestMutations = {
  /**
   * TechLeaf追加する.
   *
   * @param techLeaf - techLeaf名
   * @returns success : successステータス,作成したtechLeaf
   * @returns error : errorステータス
   */
  createTechLeaf: async (_: any, { techLeaf }: TechLeafType) => {
    const { name } = techLeaf;

    try {
      const createTechLeaf = new TechLeaf({ name });
      const result = await createTechLeaf.save();
      return success(result);
    } catch (e) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * TechBranch追加する.
   *
   * @param techBranch - techBranch名
   * @returns success : successステータス,作成したtechBranch
   * @returns error : errorステータス
   */
  createTechBranch: async (_: any, { techBranch }: TechBranchType) => {
    const { name } = techBranch;

    try {
      const createTechBranch = new TechBranch({ name });
      const result = await createTechBranch.save();
      return success(result);
    } catch (e) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * TechTree追加する.
   *
   * @param techTree - techTree名
   * @returns success : successステータス,作成したtechTree
   * @returns error : errorステータス
   */
  createTechTree: async (_: any, { techTree }: TechTreeType) => {
    const { name } = techTree;

    try {
      const createTechTree = new TechTree({ name });
      const result = await createTechTree.save();
      return success(result);
    } catch (e) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * TechArea追加する.
   *
   * @param techArea - techArea名
   * @returns success : successステータス,作成したtechArea
   * @returns error : errorステータス
   */
  createTechArea: async (_: any, { techArea }: TechAreaType) => {
    const { name } = techArea;

    try {
      const createTechArea = new TechArea({ name });
      const result = await createTechArea.save();
      return success(result);
    } catch (e) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
};

export default techForestMutations;
