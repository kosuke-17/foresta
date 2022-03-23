import "chart.js/auto";
import { memo, useState } from "react";
import { Box, Button, Flex, Stack } from "@chakra-ui/react";
//pluginを使うため
import "chartjs-plugin-datalabels";
//optionを追加するため
import { ChartOptions } from "chart.js";
//日付を使うため
import "chartjs-adapter-date-fns";
import { useStackList } from "../../../hooks/study/useStackList";
import { usePercentDate } from "../../../hooks/study/usePercentDate";
import { usePercentMonth } from "../../../hooks/study/usePercentMonth";
import { subDays, subMonths } from "date-fns";
import { DayStackTimeFig } from "../../molucules/stackList/DayStackTimeFig";
import { MonthStackTimeFig } from "../../molucules/stackList/MonthStackTimeFig";
import {
  StudyStack,
  useGetStudyColorQuery,
} from "../../../types/generated/graphql";

export const StackTime = memo(() => {
  //学習リストのデータを取得
  const { data } = useStackList();
  const studyData = data?.getAllStudyStack.node as Array<StudyStack>;

  /**
   * 技術の色データを取得.
   */
  const { data: colors } = useGetStudyColorQuery();
  console.log(colors);

  //色（背景）
  const backgroundColors = new Array<string>();
  //色（線）
  const borderColors = new Array<string>();

  //データ変換用
  const firstDatasets = [];
  //グラフ用
  const datasets = [];

  if (data && colors) {
    const stackDatas = [...data.getAllStudyStack.node];
    const colorData = [...colors.getAllTechTree];
    //学習リストで取得したデータをグラフ用に変換する
    for (const stackData of stackDatas) {
      for (const color of colorData) {
        //ラベル名と同じ色をプッシュする
        if (stackData.skillTagId === color.name) {
          backgroundColors.push(`#${color.color}`);
          borderColors.push(`#${color.color}`);
        }
      }

      firstDatasets.push({
        label: stackData.skillTagId,
        data: [
          {
            x: new Date(stackData.createdAt).getTime(),
            y: stackData.timeStack,
          },
        ],
        backgroundColor: backgroundColors,
        borderColor: borderColors,
      });
    }

    //グラフ用に変換したデータを同じ技術内容ごとに振り分けて技術内容ごとに色分けする
    for (let i = 0; i < firstDatasets.length; i++) {
      if (firstDatasets[i]) {
        for (let j = i + 1; j < firstDatasets.length; j++) {
          if (firstDatasets[j]) {
            if (firstDatasets[i].label === firstDatasets[j].label) {
              firstDatasets[i].data.push(firstDatasets[j].data[0]);
              delete firstDatasets[j];
            }
          }
        }
        //それぞれのデータをグラフ用datasetsにpushする
        datasets.push({
          label: firstDatasets[i].label,
          data: firstDatasets[i].data,
          borderWidth: 1,
          backgroundColor: backgroundColors[i],
          borderColor: borderColors[i],
        });
      }
    }
  }
  console.log(firstDatasets);
  //グラフ表示用
  const chartDatas = { datasets };

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

  //グラフのオプションを指定
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
        min: subMonths(new Date(), 3 + dateValueMonth).getTime(),
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

  //%表示用hooks使用
  const { pieMonthData, monthPercentOptions } = usePercentMonth(
    studyData,
    dateValueMonth,
  );
  const { pieDateData, dayPercentOptions } = usePercentDate(
    studyData,
    dateValueDay,
  );

  return (
    <>
      <Box width="100%">
        <Stack>
          <Flex justifyContent="center" gap={5} my={5}>
            <Button colorScheme="green" onClick={monthBtn}>
              月別
            </Button>
            <Button colorScheme="green" onClick={dayBtn}>
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
