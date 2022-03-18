import { Box, Button } from "@chakra-ui/react";
import { ChartData, ChartOptions } from "chart.js";
import { format, subMonths } from "date-fns";
import { FC } from "react";
import { Bar, Pie } from "react-chartjs-2";

type Props = {
  subDateBtn: () => void;
  dateValueMonth: number;
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
  monthOptions: any;
  pieMonthData: ChartData<"pie">;
  monthPercentOptions: ChartOptions<"pie">;
};

/**
 * 月ごとの学習時間グラフを表すコンポーネント
 * @param props
 * @returns 月ごとの学習時間を表す積み上げ棒グラフ
 */
export const MonthStackTimeFig: FC<Props> = (props) => {
  const {
    subDateBtn,
    dateValueMonth,
    addDateBtn,
    chartDatas,
    monthOptions,
    pieMonthData,
    monthPercentOptions,
  } = props;

  return (
    <>
      <Box>
        <Button onClick={subDateBtn}>⏪</Button>
        {format(subMonths(new Date(), 1 + dateValueMonth), "yyyy年MM月dd日")}~
        {format(subMonths(new Date(), dateValueMonth), "yyyy年MM月dd日")}
        <Button onClick={addDateBtn}>⏩</Button>
        <Bar
          data={chartDatas}
          options={monthOptions}
          height={400}
          width={500}
        />
        <Pie data={pieMonthData} options={monthPercentOptions} />
      </Box>
    </>
  );
};
