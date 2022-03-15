import { TechArea, TechBranch, TechLeaf, TechTree } from "../../../models";
import { error, success } from "../responseStatus";
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
      return success(result, "作成に成功しました。");
    } catch {
      return error("作成に失敗しました。");
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
    const { name, color, techTree_id } = techBranch;

    try {
      const createTechBranch = new TechBranch({ name, color, techTree_id });

      const result = await createTechBranch.save();
      return success(result, "追加に成功しました。");
    } catch {
      return error("追加に失敗しました。");
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
      return success(result, "作成に成功しました。");
    } catch {
      return error("作成に失敗しました。");
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
      return success(result, "作成に成功しました。");
    } catch {
      return error("作成に失敗しました。");
    }
  },
};

export default techForestMutations;
