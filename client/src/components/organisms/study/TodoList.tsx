import { FC, memo } from "react";
import { List, ListItem } from "@chakra-ui/react";
import { isWithinInterval, isToday, isBefore, addDays } from "date-fns";

import { TodoWithCheck } from "../../molucules/TodoWithCheck";
import type { TodoData } from "../../../types/types";
// import { TodoDetail } from './TodoDetail';

type Props = {
  todos: Array<TodoData> | undefined;
  loading: boolean;
  tabType: "全て" | "今日" | "期限切れ";
};

/**
 * Todoリストを表示するコンポーネント.
 */
export const TodoList: FC<Props> = memo((props) => {
  const { todos, loading, tabType } = props;

  /**
   * Todoをタブのタイプに応じてフィルタリングする.
   *
   * @returns フィルタリングしたtodoの配列
   */
  const getFilteredTodos = () => {
    const today = new Date();

    if (todos !== undefined) {
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
            if (todo.finishedAt) {
              // 複数日間のタスク
              const endDate = new Date(todo.finishedAt);

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
            const startDate = new Date(todo.startedAt);
            if (todo.finishedAt) {
              // 複数日間のタスク
              const endDate = new Date(todo.finishedAt);
              console.log(startDate, endDate, today);
              return isBefore(addDays(endDate, 1), today);
            }
            return isBefore(addDays(startDate, 1), today);
          });
        default:
          break;
      }
    }
    return [];
  };

  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : getFilteredTodos()?.length ? (
        <List>
          {getFilteredTodos()?.map((todo) => (
            <ListItem key={todo.id}>
              <TodoWithCheck {...todo} />
            </ListItem>
          ))}
        </List>
      ) : (
        <p>該当のTodoが存在しません</p>
      )}
      {/* <TodoDetail /> */}
    </>
  );
});
