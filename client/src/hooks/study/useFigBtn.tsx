import { useState } from "react";

/**
 * 学習時間グラフ用ボタンメソッド
 * @returns 学習時間グラフ用ボタンメソッド
 */
export const useFigBtn = () => {
  //月ごとか日毎か
  const [isDay, setIsDay] = useState(true);
  //月ごと表示ボタン
  const monthBtn = () => {
    setIsDay(false);
  };
  //日毎表示ボタン
  const dayBtn = () => {
    setIsDay(true);
  };

  //日付用グラフの変化させる日にち
  const [dateValueDay, setDateValueDay] = useState(0);
  //月用グラフの変化させる月
  const [dateValueMonth, setDateValueMonth] = useState(0);
  //過去の記録を見るメソッド
  const subDateBtn = () => {
    if (isDay) {
      setDateValueDay(dateValueDay + 7);
    } else {
      setDateValueMonth(dateValueMonth + 1);
    }
  };
  //未来の記録を見るメソッド
  const addDateBtn = () => {
    if (isDay) {
      setDateValueDay(dateValueDay - 7);
    } else {
      setDateValueMonth(dateValueMonth - 1);
    }
  };
  return {
    monthBtn,
    dayBtn,
    subDateBtn,
    addDateBtn,
    dateValueDay,
    dateValueMonth,
    isDay,
  };
};
