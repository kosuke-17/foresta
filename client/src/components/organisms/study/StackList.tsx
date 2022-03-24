import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { memo } from "react";

import { useStackList } from "../../../hooks/study/useStackList";
import { LogListTable } from "../../molucules/stackList/LogListTable";
import { StudyListTable } from "../../molucules/stackList/StudyListTable";
import { StudyModal } from "../../molucules/stackList/StudyModal";

//タブ名
const tabNames = ["学習リスト", "更新情報"] as const;

/**
 * 学習リスト/更新情報を表示する
 * @returns 学習リストと更新情報
 */
export const StackList = memo(() => {
  //カスタムフックから学習リストデータ取得
  const { error, loading, data, stackSumList } = useStackList();

  return (
    <>
      <Flex align="center" gap={1} mb={1}>
        <Heading as="h2" size="lg" mr={3} ml={5}>
          学習記録
        </Heading>
        <StudyModal title="記録追加" stackId="" icon={<AddIcon />} />
      </Flex>
      <Box mr={5} ml={5}>
        <Tabs
          isFitted
          isLazy
          variant="soft-rounded"
          colorScheme="green"
          width="full"
          backgroundColor="#f5f5f5"
          padding="20px"
          w="full"
        >
          <TabList>
            {tabNames.map((tab, index) => (
              <Tab
                key={index}
                _focus={{ boxShadow: "none" }}
                _selected={{ color: "white", bg: "green.300" }}
                _hover={{ bg: "gray.300" }}
                backgroundColor="white"
                shadow="base"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error...</p>
          ) : data?.getAllStudyStack.node.length ? (
            <TabPanels
              overflowY="auto"
              height="300px"
              backgroundColor="white"
              margin="30px"
            >
              <TabPanel>
                <StudyListTable data={data} stackSumList={stackSumList} />
              </TabPanel>

              <TabPanel>
                <LogListTable data={data} />
              </TabPanel>
            </TabPanels>
          ) : (
            <p>学習記録が1件もありません</p>
          )}
        </Tabs>
      </Box>
    </>
  );
});
