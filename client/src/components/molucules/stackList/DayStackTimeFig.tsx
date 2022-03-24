import { Box, Button, Flex } from "@chakra-ui/react";
import { format, subDays } from "date-fns";
import { FC } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { DayStackTime } from "../../../types/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

/**
 * 日にちごとの学習時間グラフを表すコンポーネント
 * @param props
 * @returns 日ごとの学習時間を表す積み上げ棒グラフ
 */
export const DayStackTimeFig: FC<DayStackTime> = (props) => {
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
            {format(subDays(new Date(), 7 + dateValueDay), "yyyy年MM月dd日")}~
            {format(subDays(new Date(), dateValueDay), "yyyy年MM月dd日")}
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
            <Bar data={chartDatas} options={dayOptions} />
          </Box>
          <Box
            height={300}
            width={300}
            alignItems="center"
            backgroundColor="white"
            borderRadius="md"
            shadow="sm"
          >
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
