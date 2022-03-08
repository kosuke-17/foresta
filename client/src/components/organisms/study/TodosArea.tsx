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
import { TodoList } from "./TodoList";
import { useGetAllTodoByUserQuery } from "../../../types/generated/graphql";
import { Calendar } from "../../molucules/Calendar";

// タブのタイプ
const tabs = ["全て", "今日", "期限切れ"] as const; //as const をつけてreadonlyにする

/**
 * Todoを表示するエリアのコンポーネント.
 */
export const TodosArea: FC = memo(() => {
  const userId = "621f1cba386085f036353ecd";

  const { data, error, loading } = useGetAllTodoByUserQuery({
    variables: {
      userId,
    },
  });

  if (error) {
    return <div>エラー</div>;
  }

  return (
    <Container maxW="5xl">
      <Heading as="h2" size="lg">
        Todoリスト
      </Heading>
      <Box bg="#f5f5f5" padding="5px 24px 10px 24px">
        <Tabs variant="soft-rounded" isLazy>
          <TabList>
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                _focus={{ boxShadow: "none" }}
                _selected={{ pointerEvents: "none", bg: "green.200" }}
                _hover={{ backgroundColor: "green.50" }}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanels
            bg="white"
            padding="10px 40px"
            overflow="auto"
            height="180px"
          >
            {tabs.map((tab, index) => (
              <TabPanel key={index}>
                <TodoList todos={data?.todos} loading={loading} tabType={tab} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>

      {/* カレンダーエリア */}
      <Calendar todos={data?.todos} />
    </Container>
  );
});
