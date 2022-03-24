import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
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
        <Flex justifyContent="center" alignItems="center">
          <Button
            mr={5}
            color="white"
            backgroundColor="green.300"
            onClick={subDateBtn}
            shadow="base"
            _focus={{ boxShadow: "none" }}
          >
            <ArrowLeftIcon />
          </Button>
          <Box>
            {format(
              subMonths(new Date(), 1 + dateValueMonth),
              "yyyy年MM月dd日",
            )}
            ~{format(subMonths(new Date(), dateValueMonth), "yyyy年MM月dd日")}
          </Box>
          <Button
            ml={5}
            color="white"
            backgroundColor="green.300"
            onClick={addDateBtn}
            shadow="base"
            _focus={{ boxShadow: "none" }}
          >
            <ArrowRightIcon />
          </Button>
        </Flex>
        <Flex gap={10} m={10}>
          <Box
            width={600}
            backgroundColor="white"
            borderRadius="md"
            shadow="sm"
          >
            <Bar data={chartDatas} options={monthOptions} />
          </Box>
          <Box
            height={300}
            width={300}
            alignItems="center"
            backgroundColor="white"
            borderRadius="md"
            shadow="sm"
          >
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
