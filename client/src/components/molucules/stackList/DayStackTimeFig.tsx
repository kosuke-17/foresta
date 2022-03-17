import { Box, Button } from "@chakra-ui/react";
import { format, subDays } from "date-fns";
import { FC } from "react";
import { Bar } from "react-chartjs-2";

type Props = {
  subDateBtn: () => void;
  dateValueDay: number;
  addDateBtn: () => void;
  chartDatas: {
    datasets: {
      label: string;
      data: {
        x: number;
        y: number;
      }[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }[];
  };
  dayOptions: any;
};

/**
 * 日にちごとの学習時間グラフを表すコンポーネント
 * @param props 
 * @returns 日ごとの学習時間を表す積み上げ棒グラフ
 */
export const DayStackTimeFig: FC<Props> = (props) => {
  const { subDateBtn, dateValueDay, addDateBtn, chartDatas, dayOptions } =
    props;
  return (
    <>
      <Box>
        <Button onClick={subDateBtn}>⏪</Button>
        {format(subDays(new Date(), 7 + dateValueDay), "yyyy年MM月dd日")}~
        {format(subDays(new Date(), dateValueDay), "yyyy年MM月dd日")}
        <Button onClick={addDateBtn}>⏩</Button>
        <Bar data={chartDatas} options={dayOptions} height={400} width={500} />
      </Box>
    </>
  );
};
