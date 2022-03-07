import {
  Center,
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
import { StudyModal } from "../../molucules/StudyModal";

//タブ名
const tabNames = ["学習リスト", "更新情報"] as const;

/**
 * 学習リスト/更新情報を表示する
 * @returns 学習リストと更新情報
 */
export const StackList = memo(() => {
  //カスタムフックから学習リストデータ取得
  const { error, loading, data, stackSumList } = useStackList();

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <div>
      <Center>
        <Tabs
          isFitted
          isLazy
          variant="soft-rounded"
          colorScheme="green"
          width="container.xl"
        >
          <TabList>
            {tabNames.map((tab, index) => (
              <Tab
                key={index}
                _focus={{ boxShadow: "none" }}
                _selected={{ color: "white", bg: "green.300" }}
                _hover={{ bg: "gray.300" }}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          {loading ? (
            <p>Loading...</p>
          ) : data?.getAllStudyStack.length ? (
            <TabPanels overflow="auto" height="250px">
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
      </Center>
      {/* 仮の学習記録ボタン */}
      <StudyModal title="記録追加" buttonTitle="記録" />
    </div>
  );
});
