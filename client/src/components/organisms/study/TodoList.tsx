/* eslint-disable no-undef */
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
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import type { ApolloError } from "@apollo/client";
import { isWithinInterval, isToday, isBefore, addDays } from "date-fns";

import { TodoWithCheck } from "../../molucules/todos/TodoWithCheck";
import type { TodoData } from "../../../types/types";

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
 * Todoの配列の中身がnullでないことをチェックする.
 *
 * @remarks trueなら、引数の配列の中身はTodoData型になる
 * @param todos Todoの配列
 * @returns Todoの配列の中身がnullでないか
 */
export const isNonNullTodoData = (
  todoDataList: Array<TodoData | null>,
): todoDataList is Array<TodoData> => {
  return todoDataList.length > 0;
};

/**
 * Todoリストを表示するコンポーネント.
 */
export const TodoList: FC<Props> = memo((props) => {
  const { todos, loading, error, openReadModal, openAddModal } = props;

  /**
   * Todoをタブのタイプに応じてフィルタリングする.
   *
   * @returns フィルタリングしたtodoの配列
   */
  const getFilteredTodos = (tabType: "全て" | "今日" | "期限切れ") => {
    const today = new Date();

    // todosの中身がnullかどうかで型ガード
    if (!isNonNullTodoData(todos)) {
      return [];
    }

    // switch文で場合分け
    switch (tabType) {
      // 全ての場合
      case "全て":
        return todos;

      case "今日":
        // 今日の場合
        return todos.filter((todo) => {
          // 期間に今日が含まれているものを返す
          const startDate = new Date(todo.startedAt);
          if (todo?.finishedAt) {
            // 複数日間のタスク
            const endDate = new Date(todo?.finishedAt);

            // date-fnsのisWithinIntervalメソッドで、範囲内に入っているかどうかを判定
            return (
              isWithinInterval(today, {
                start: startDate,
                end: endDate,
              }) ||
              isToday(startDate) ||
              isToday(endDate)
            );
          } else {
            // 一日のタスク
            // date-fnsのisTodayメソッドで、今日かどうかを判定
            return isToday(startDate);
          }
        });
      case "期限切れ":
        // 期限切れの場合
        return todos.filter((todo) => {
          // 期限切れのもの
          const startDate = new Date(todo?.startedAt);
          if (todo?.finishedAt) {
            // 複数日間のタスク
            const endDate = new Date(todo?.finishedAt);
            return isBefore(addDays(endDate, 1), today);
          }
          return isBefore(addDays(startDate, 1), today);
        });
      default:
        return [];
    }
  };

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
                    <>Loading...</>
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
