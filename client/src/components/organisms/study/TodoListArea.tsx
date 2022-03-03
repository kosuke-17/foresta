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
  List,
  ListItem,
} from "@chakra-ui/react";

import { TodoWithCheck } from "../../molucules/TodoWithCheck";
import { Calendar } from "../../molucules/Calendar";
import { useGetAllTodoByUserQuery } from "../../../types/generated/graphql";

/**
 * Todoを表示するエリアのコンポーネント.
 */
export const TodoListArea: FC = memo(() => {
  const userId = "621f1cba386085f036353ecd";

  const { data, error, loading } = useGetAllTodoByUserQuery({
    variables: {
      userId,
    },
  });
  console.log(
    "🚀 ~ file: TodoListArea.tsx ~ line 24 ~ constTodoListArea:FC=memo ~ data",
    data,
  );

  if (error) {
    return <div>エラー</div>;
  }

  if (loading) {
    return <div>...loading</div>;
  }

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
              {data?.todos.length ? (
                <List>
                  {data.todos.map((todo) => (
                    <ListItem key={todo.id}>
                      <TodoWithCheck {...todo} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <p>Todoが存在しません</p>
              )}
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
      <Calendar />
    </Container>
  );
});
