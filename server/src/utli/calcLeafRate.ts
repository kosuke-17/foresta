import mongoose from "mongoose";
import { UserLeafs } from "../models";

/**
 * 習得率の計算を行う.
 *
 * @param userLeafsId - ユーザーが保持する技術オブジェクトのID
 * @param treeId - 技術ツリーID
 * @param changedStatus - 更新したステータス
 * @returns 習得率
 */
export const calcUserLeafsRate = async (
  userLeafsId: string,
  treeId: string,
  changedStatus: boolean
): Promise<number> => {
  // 文字列の変数をオブジェクトIDに変更
  const userLeafsID = new mongoose.Types.ObjectId(userLeafsId);
  const treeID = new mongoose.Types.ObjectId(treeId);

  // ユーザーの習得技術を下記の条件で取得
  const userLeafs = await (
    await UserLeafs.aggregate([
      { $match: { _id: userLeafsID } },
      { $unwind: "$myForest" },
      { $match: { "myForest._id": treeID } },
      {
        $project: {
          branches: "$myForest.branches",
        },
      },
    ])
  )[0];
  let totalLeafsCount = 0;
  let masteredLeafsCount = 0;
  // 習得した技術の数と全習得技術の数をカウント
  for (const branch of userLeafs.branches) {
    for (const leaf of branch.leafs) {
      if (leaf.isStatus === true) {
        masteredLeafsCount++;
      }
    }
    totalLeafsCount += branch.leafs.length;
  }

  // ステータス変更分の数をここで修正
  if (changedStatus) {
    masteredLeafsCount++;
  } else {
    masteredLeafsCount--;
  }

  // 習得率をここで計算
  const achievementRate = Math.round(
    (masteredLeafsCount / totalLeafsCount) * 100
  );

  return achievementRate;
};
