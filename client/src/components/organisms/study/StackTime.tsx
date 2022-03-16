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
import { subDays, subMonths } from "date-fns";
import { DayStackTimeFig } from "../../molucules/stackList/DayStackTimeFig";
import { MonthStackTimeFig } from "../../molucules/stackList/MonthStackTimeFig";

export const StackTime = memo(() => {
  //学習リストのデータを取得
  const { data } = useStackList();

  //色サンプル（背景）
  const backgroundColors = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 188, 188, 0.2)",
    "rgba(255, 127, 127, 0.2)",
    "rgba(127, 255, 255, 0.2)",
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 188, 188, 0.2)",
    "rgba(255, 127, 127, 0.2)",
    "rgba(127, 255, 255, 0.2)",
  ];
  //色サンプル（線）
  const borderColors = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 188, 188, 1)",
    "rgba(255, 127, 127, 1)",
    "rgba(127, 255, 255, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 188, 188, 1)",
    "rgba(255, 127, 127, 1)",
    "rgba(127, 255, 255, 1)",
  ];

  //データ変換用
  const firstDatasets = [];
  //グラフ用
  const datasets = [];

  if (data) {
    const stackDatas = [...data.getAllStudyStack.node];
    //学習リストで取得したデータをグラフ用に変換する
    for (const stackData of stackDatas) {
      firstDatasets.push({
        label: stackData.skillTagId,
        data: [
          {
            // x: format(new Date(stackData.createdAt), "yyyy-MM-dd"),
            x: new Date(stackData.createdAt).getTime(),
            y: stackData.timeStack,
          },
        ],
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
          backgroundColor: backgroundColors[i],
          borderColor: borderColors[i],
          borderWidth: 1,
        });
      }
    }
  }
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
    //アスペクト比
    // maintainAspectRatio: false,
    scales: {
      xAxes: {
        stacked: true,
        min: subMonths(new Date(), 3 + dateValueMonth).getTime(),
        max: subMonths(new Date(), dateValueMonth).getTime(),
        type: "time",
        time: {
          unit: "month", //月ごと表示
        },
      },
      yAxes: {
        stacked: true,
      },
    },
  };

  return (
    <>
      <Box width={600}>
        <Stack>
          <Flex>
            <Button colorScheme="green" onClick={monthBtn}>
              月別
            </Button>
            <Button colorScheme="green" onClick={dayBtn}>
              日別
            </Button>
          </Flex>

          <Flex>
            <Box>
              {isDay ? (
                <DayStackTimeFig
                  subDateBtn={subDateBtn}
                  dateValueDay={dateValueDay}
                  addDateBtn={addDateBtn}
                  chartDatas={chartDatas}
                  dayOptions={dayOptions}
                />
              ) : (
                <MonthStackTimeFig
                  subDateBtn={subDateBtn}
                  dateValueMonth={dateValueMonth}
                  addDateBtn={addDateBtn}
                  chartDatas={chartDatas}
                  monthOptions={monthOptions}
                />
              )}
            </Box>
          </Flex>
        </Stack>
      </Box>
    </>
  );
});
