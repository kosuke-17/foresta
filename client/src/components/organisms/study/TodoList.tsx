import { FC, memo } from "react";
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
  List,
  ListItem,
  IconButton,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import type { ApolloError } from "@apollo/client";

import { TodoWithCheck } from "../../molucules/todos/TodoWithCheck";
import type { TodoData } from "../../../types/types";
import { useTodoList } from "../../../hooks/study/useTodoList";

type Props = {
  todos: Array<TodoData | null>;
  loading: boolean;
  error: ApolloError | undefined;
  openReadModal: (todo: TodoData) => void;
  openAddModal: (startedAt?: Date, finishedAt?: Date) => void;
};

// タブのタイプ
const tabs = ["全て", "今日", "期限切れ"] as const; //as const をつけてreadonlyにする

/**
 * Todoリストを表示するコンポーネント.
 */
export const TodoList: FC<Props> = memo((props) => {
  const { todos, loading, error, openReadModal, openAddModal } = props;

  const { getFilteredTodos } = useTodoList(todos);

  return (
    <>
      <Flex align="center" gap={1} mb={1}>
        <Heading as="h2" size="lg">
          Todoリスト
        </Heading>
        <IconButton
          size="sm"
          aria-label="Add Todo"
          colorScheme="teal"
          icon={<AddIcon />}
          onClick={() => openAddModal()}
        />
      </Flex>
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
            {tabs.map((tab, index) => {
              return (
                <TabPanel key={index}>
                  {loading ? (
                    <Stack spacing={3}>
                      <Skeleton height="20px" />
                      <Skeleton height="20px" />
                      <Skeleton height="20px" />
                      <Skeleton height="20px" />
                      <Skeleton height="20px" />
                    </Stack>
                  ) : error ? (
                    <>エラーが発生しました</>
                  ) : getFilteredTodos(tab).length > 0 ? (
                    <List>
                      {getFilteredTodos(tab).map((todo) => (
                        <ListItem key={todo.id}>
                          <TodoWithCheck
                            todo={todo}
                            openReadModal={openReadModal}
                          />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <p>該当のTodoが存在しません</p>
                  )}
                </TabPanel>
              );
            })}
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
});
