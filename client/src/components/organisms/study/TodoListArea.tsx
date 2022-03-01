import { FC, memo } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Container,
  Heading,
} from "@chakra-ui/react";

import { TodoWithCheck } from "../../molucules/TodoWithCheck";

/**
 * Todoを表示するエリアのコンポーネント.
 */
export const TodoListArea: FC = memo(() => {
  return (
    <Container maxW="5xl">
      <Heading as="h2" size="lg">
        Todoリスト
      </Heading>
      <Box bg="#f5f5f5" padding="5px 24px 10px 24px">
        <Tabs
          variant="soft-rounded"
          colorScheme="green"
          isLazy
          _focus={{ boxShadow: "none" }}
        >
          <TabList>
            <Tab _focus={{ boxShadow: "green" }}>全て</Tab>
            <Tab _focus={{ boxShadow: "green" }}>今日</Tab>
            <Tab _focus={{ boxShadow: "green" }}>期限切れ</Tab>
          </TabList>
          <TabPanels
            bg="white"
            padding="10px 40px"
            overflow="auto"
            height="180px"
          >
            <TabPanel>
              {/* <p>全てのTodo</p> */}
              <TodoWithCheck />
              <TodoWithCheck />
              <TodoWithCheck />
              <TodoWithCheck />
              <TodoWithCheck />
              <TodoWithCheck />
              <TodoWithCheck />
            </TabPanel>
            <TabPanel>
              <p>今日のTodo</p>
            </TabPanel>
            <TabPanel>
              <p>期限切れ</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
});
