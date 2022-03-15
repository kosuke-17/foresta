import "chart.js/auto";
import { memo } from "react";
import { Bar } from "react-chartjs-2";
import { Box, Button, Flex } from "@chakra-ui/react";
//pluginを使うため
import "chartjs-plugin-datalabels";
//optionを追加するため
import { ChartOptions } from "chart.js";
//日付を使うため
import "chartjs-adapter-date-fns";
import { useStackList } from "../../../hooks/study/useStackList";

export const StackTime = memo(() => {
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

  const firstDatasets = [];
  const datasets = [];

  if (data) {
    const stackDatas = [...data.getAllStudyStack.node];
    //学習リストで取得したデータをグラフ用に変換する
    for (const stackData of stackDatas) {
      firstDatasets.push({
        label: stackData.skillTagId,
        data: [{ x: stackData.createdAt, y: stackData.timeStack }],
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

  const chartDatas = { datasets };

  //型をつけないとoptionを追加できない
  const options: ChartOptions<any> = {
    //アスペクト比
    // maintainAspectRatio: false,
    scales: {
      xAxes: {
        stacked: true,
        type: "time",
        time: {
          unit: "day",
          displayFormats: {
            quarter: "MMM YYYY",
          },
        },

        // ticks: {
        //   min: "2021-10-07 09:00:28",
        //   max: "2021-11-07 01:00:28",
        // },
      },

      yAxes: {
        stacked: true,
      },
    },
  };

  return (
    <div>
      <h1>Chartjs練習</h1>
      <Button>月別</Button>
      <Button>日別</Button>
      <Flex>
        <Box>
          <Bar data={chartDatas} options={options} height={400} width={500} />
        </Box>
        <canvas></canvas>
      </Flex>
    </div>
  );
});
