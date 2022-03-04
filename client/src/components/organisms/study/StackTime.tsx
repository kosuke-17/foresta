import "chart.js/auto";
import { memo } from "react";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Box, Flex, Spacer } from "@chakra-ui/react";

const data = {
  labels: ["React", "Vue", "TypeScript", "JavaScript", "GraphQL", "Github"],
  datasets: [
    {
      data: [120, 20, 40, 500, 20, 35],//学習時間
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const StackTime = memo(() => {
  return (
    <div>
      <h1>Chartjs練習</h1>
      <Flex>
        <Box w="700px">
          <Bar data={data} />
        </Box>
        <Spacer />
        <Box w="700px">
          <Pie data={data} />
        </Box>
      </Flex>
    </div>
  );
});
