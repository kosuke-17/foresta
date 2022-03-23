import { Box, Button, Flex } from "@chakra-ui/react";
import { ChartData } from "chart.js";
import { format, subDays } from "date-fns";
import { FC } from "react";
import { Bar, Pie } from "react-chartjs-2";

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
  pieDateData: ChartData<"pie">;
  dayPercentOptions: any;
};

/**
 * 日にちごとの学習時間グラフを表すコンポーネント
 * @param props
 * @returns 日ごとの学習時間を表す積み上げ棒グラフ
 */
export const DayStackTimeFig: FC<Props> = (props) => {
  const {
    subDateBtn,
    dateValueDay,
    addDateBtn,
    chartDatas,
    dayOptions,
    pieDateData,
    dayPercentOptions,
  } = props;

  return (
    <>
      <Box>
        <Flex justifyContent="center" alignItems="center" mb={20}>
          <Button onClick={subDateBtn}>⏪</Button>
          {format(subDays(new Date(), 7 + dateValueDay), "yyyy年MM月dd日")}~
          {format(subDays(new Date(), dateValueDay), "yyyy年MM月dd日")}
          <Button onClick={addDateBtn}>⏩</Button>
        </Flex>
        <Flex gap={10} mb={30}>
          <Box height={500} width={600}>
            <Bar data={chartDatas} options={dayOptions} />
          </Box>
          <Box height={300} width={300} alignItems="center">
            {pieDateData && pieDateData.labels?.length != 0 ? (
              <Pie data={pieDateData} options={dayPercentOptions} />
            ) : (
              <Flex
                justifyContent="center"
                alignItems="center"
                backgroundColor="gray.100"
                width={250}
                height={250}
                borderRadius={500}
                ml="30px"
                mt="30px"
              >
                データがありません
              </Flex>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
};
