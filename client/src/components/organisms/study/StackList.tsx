import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { StackListTable } from "../../molucules/stackList/StackListTable";
import { LogListTable } from "../../molucules/stackList/LogListTable";
import { memo } from "react";

/**
 * 学習リスト/更新情報を表示する
 * @returns 学習リストと更新情報
 */
export const StackList = memo(() => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>学習リスト</Tab>
          <Tab>更新情報</Tab>
        </TabList>
        <TabPanels overflow="auto" height="200px">
          <TabPanel>
            <StackListTable />
          </TabPanel>
          <TabPanel>
            <LogListTable />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
});
