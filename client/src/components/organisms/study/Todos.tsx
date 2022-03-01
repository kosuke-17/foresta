import { FC, memo } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Container } from "@chakra-ui/react";
import { TodoWithCheck } from "../../molucules/TodoWithCheck";

export const Todos: FC = memo(() => {
  return (
    <Container maxW="5xl">
      <h2>Todoリスト</h2>
      <Box bg="#f5f5f5" padding="5px 24px">
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
          <TabPanels bg="white" padding="10px 40px" overflow="auto" height="200px">
            <TabPanel>
              <p>全てのTodo</p>
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
