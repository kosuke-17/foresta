import { Box, Button, Flex } from "@chakra-ui/react";
import { format, subMonths } from "date-fns";
import { FC } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { MonthStackTime } from "../../../types/types";

/**
 * 月ごとの学習時間グラフを表すコンポーネント
 * @param props
 * @returns 月ごとの学習時間を表す積み上げ棒グラフ
 */
export const MonthStackTimeFig: FC<MonthStackTime> = (props) => {
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
        <Flex justifyContent="center" alignItems="center" mb={20}>
          <Button onClick={subDateBtn}>⏪</Button>
          {format(subMonths(new Date(), 1 + dateValueMonth), "yyyy年MM月dd日")}~
          {format(subMonths(new Date(), dateValueMonth), "yyyy年MM月dd日")}
          <Button onClick={addDateBtn}>⏩</Button>
        </Flex>
        <Flex gap={10} mb={30}>
          <Box height={500} width={600}>
            <Bar data={chartDatas} options={monthOptions} />
          </Box>
          <Box height={300} width={300} alignItems="center">
            {pieMonthData && pieMonthData.labels?.length != 0 ? (
              <Pie data={pieMonthData} options={monthPercentOptions} />
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
