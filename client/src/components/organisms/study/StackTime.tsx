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

export const StackTime = memo(() => {
  //今日のデータを取ってきて、今日を含んで過去6ヶ月にする
  const labels = [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ];

  const data = {
    // labels: labels,
    datasets: [
      {
        //techTreeのデータを取ってきて
        label: "React",
        data: [
          {
            x: "2021-05-06",
            y: 50,
          },
          {
            x: "2021-11-07",
            y: 60,
          },
          {
            x: "2021-12-07",
            y: 20,
          },
          {
            x: "2021-10-07",
            y: 20,
          },
          {
            x: "2021-9-07",
            y: 20,
          },
          {
            x: "2021-12-09 ",
            y: 50,
          },
        ],

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Vue",
        data: [
          {
            x: "2021-05-06",
            y: 50,
          },
          {
            x: "2021-11-07",
            y: 60,
          },
          {
            x: "2021-12-07",
            y: 20,
          },
          {
            x: "2021-10-07",
            y: 20,
          },
          {
            x: "2021-9-07",
            y: 20,
          },
          {
            x: "2021-12-09 ",
            y: 50,
          },
        ],

        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
      // {
      //   label: "TypeScript",
      //   data: [120, 20, 40, 10, 40, 35], //学習時間

      //   backgroundColor: ["rgba(255, 206, 86, 0.2)"],
      //   borderColor: ["rgba(255, 206, 86, 1)"],
      //   borderWidth: 1,
      // },
      // {
      //   label: "JavaScript",
      //   data: [120, 20, 40, 40, 20, 35], //学習時間

      //   backgroundColor: ["rgba(75, 192, 192, 0.2)"],
      //   borderColor: ["rgba(75, 192, 192, 1)"],
      //   borderWidth: 1,
      // },
      // {
      //   label: "GraphQL",
      //   data: [120, 20, 40, 100, 20, 35], //学習時間

      //   backgroundColor: ["rgba(153, 102, 255, 0.2)"],
      //   borderColor: ["rgba(153, 102, 255, 1)"],
      //   borderWidth: 1,
      // },
      // {
      //   label: "MongoDB",
      //   data: [120, 20, 40, 50, 20, 35], //学習時間

      //   backgroundColor: ["rgba(255, 159, 64, 0.2)"],
      //   borderColor: ["rgba(255, 159, 64, 1)"],
      //   borderWidth: 1,
      // },
    ],
  };

  //型をつけないとoptionを追加できない
  const options: ChartOptions<any> = {
    //アスペクト比
    // maintainAspectRatio: false,
    scales: {
      xAxes: {
        stacked: true,
        type: "time",
        time: {
          unit: "week",
          displayFormats: {
            quarter: "MMM YYYY",
          },
        },

        ticks: {
          min: "2021-10-07 09:00:28",
          max: "2021-11-07 01:00:28",
        },
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
        <Box w="1000px">
          <Bar data={data} options={options} />
        </Box>
        <canvas></canvas>
      </Flex>
    </div>
  );
});
