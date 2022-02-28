import { FC, memo } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export const Todos: FC = memo(() => {
  return (
    <>
      <h2>Todoリスト</h2>
      <Tabs variant="soft-rounded" colorScheme='green' isLazy>
        <TabList>
          <Tab>全て</Tab>
          <Tab>今日</Tab>
          <Tab>期限切れ</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>全てのTodo</p>
  return (<>
    Todos
    
  </>);
          </TabPanel>
          <TabPanel>
            <p>今日のTodo</p>
          </TabPanel>
          <TabPanel>
            <p>期限切れ</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
});
