import { useGetAllTechAreaQuery } from "../../types/generated/graphql";

/**
 * 技術エリアのデータを取得する
 * @returns
 * - error:データ取得ができなかった場合
 * - loading:データ取得中の状態
 * - data:データベースから取得したデータ
 */
export const useGetTechArea = () => {
  const { data, loading, error } = useGetAllTechAreaQuery();
  const dataOfTechArea = data;
  const loadingOfTechArea = loading;
  const errorOfTechArea = error;
  return { errorOfTechArea, loadingOfTechArea, dataOfTechArea };
};
