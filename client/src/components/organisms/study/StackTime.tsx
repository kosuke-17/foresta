import "chart.js/auto";
import { ChartOptions } from "chart.js";
import { subDays, subMonths } from "date-fns";
import { memo } from "react";
import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
//pluginを使うため
import "chartjs-plugin-datalabels";
//日付を使うため
import "chartjs-adapter-date-fns";
import { DayStackTimeFig } from "../../molucules/stackList/DayStackTimeFig";
import { MonthStackTimeFig } from "../../molucules/stackList/MonthStackTimeFig";
import { useTimeFig } from "../../../hooks/study/useTimeFig";
import { useFigBtn } from "../../../hooks/study/useFigBtn";
import { usePercentMonth } from "../../../hooks/study/usePercentMonth";
import { usePercentDate } from "../../../hooks/study/usePercentDate";

/**
 * 学習記録のグラフを表示する
 */
export const StackTime = memo(() => {
  //学習時間グラフ表示用hooks使用
  const { studyData, chartDatas } = useTimeFig();

  //グラフ表示切り替えボタン用hooks使用
  const {
    monthBtn,
    dayBtn,
    subDateBtn,
    addDateBtn,
    dateValueDay,
    dateValueMonth,
    isDay,
  } = useFigBtn();

  //%表示用hooks使用
  const { pieMonthData, monthPercentOptions } = usePercentMonth(
    studyData,
    dateValueMonth,
  );
  const { pieDateData, dayPercentOptions } = usePercentDate(
    studyData,
    dateValueDay,
  );

  //棒グラフのオプションを指定
  const dayOptions: ChartOptions<any> = {
    scales: {
      xAxes: {
        stacked: true,
        min: subDays(new Date(), 7 + dateValueDay).getTime(),
        max: subDays(new Date(), dateValueDay).getTime(),
        title: {
          display: true,
          text: "学習日時",
        },
        type: "time",
        time: {
          unit: "day", //日付ごと表示
        },
        ticks: {
          align: "start",
        },
      },

      yAxes: {
        stacked: true,
        title: {
          display: true,
          text: "学習時間（分）",
        },
      },
    },
  };
  const monthOptions: ChartOptions<any> = {
    scales: {
      xAxes: {
        stacked: true,
        min: subMonths(new Date(), 1 + dateValueMonth).getTime(),
        max: subMonths(new Date(), dateValueMonth).getTime(),
        title: {
          display: true,
          text: "学習日時",
        },
        type: "time",
        time: {
          unit: "month", //月ごと表示
        },
      },
      yAxes: {
        stacked: true,
        title: {
          display: true,
          text: "学習時間（分）",
        },
      },
    },
  };

  return (
    <>
      <Heading as="h2" size="lg" mr={3} mt={5} ml={5}>
        学習時間
      </Heading>
      <Box
        width="full"
        backgroundColor="#f5f5f5"
        borderRadius="md"
        mr={5}
        ml={5}
      >
        <Stack>
          <Flex justifyContent="center" gap={5} my={5}>
            <Button
              backgroundColor="green.300"
              onClick={monthBtn}
              shadow="base"
              color="white"
              _hover={{ bg: "gray.300" }}
              _focus={{ boxShadow: "none" }}
            >
              月別
            </Button>
            <Button
              backgroundColor="green.300"
              onClick={dayBtn}
              shadow="base"
              color="white"
              _hover={{ bg: "gray.300" }}
              _focus={{ boxShadow: "none" }}
            >
              日別
            </Button>
          </Flex>

          <Flex justifyContent="center">
            <Box>
              {isDay ? (
                <DayStackTimeFig
                  subDateBtn={subDateBtn}
                  dateValueDay={dateValueDay}
                  addDateBtn={addDateBtn}
                  chartDatas={chartDatas}
                  dayOptions={dayOptions}
                  pieDateData={pieDateData}
                  dayPercentOptions={dayPercentOptions}
                />
              ) : (
                <MonthStackTimeFig
                  subDateBtn={subDateBtn}
                  dateValueMonth={dateValueMonth}
                  addDateBtn={addDateBtn}
                  chartDatas={chartDatas}
                  monthOptions={monthOptions}
                  pieMonthData={pieMonthData}
                  monthPercentOptions={monthPercentOptions}
                />
              )}
            </Box>
          </Flex>
        </Stack>
      </Box>
    </>
  );
});
