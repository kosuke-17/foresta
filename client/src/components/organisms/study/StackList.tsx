import {
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
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
      <Center>
        <Tabs
          isFitted
          isLazy
          variant="soft-rounded"
          colorScheme="green"
          width="container.xl"
        >
          <TabList>
            <Tab
              _focus={{ boxShadow: "none" }}
              _selected={{ color: "white", bg: "green.300" }}
              _hover={{ bg: "gray.300" }}
            >
              学習リスト
            </Tab>
            <Tab
              _focus={{ boxShadow: "none" }}
              _selected={{ color: "white", bg: "green.300" }}
              _hover={{ bg: "gray.300" }}
            >
              更新情報
            </Tab>
          </TabList>
          <TabPanels overflow="auto" height="250px">
            <TabPanel >
              <StackListTable />
            </TabPanel>
            <TabPanel>
              <LogListTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </div>
  );
});
