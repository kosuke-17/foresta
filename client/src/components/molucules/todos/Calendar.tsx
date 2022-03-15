import { FC, memo, useState, useEffect } from "react";
import FullCalendar, {
  addDays,
  EventClickArg,
  EventInput,
} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Box } from "@chakra-ui/react";
import type { ApolloError } from "@apollo/client";

import type { TodoData } from "../../../types/types";
import { isNonNullTodoData } from "../../organisms/study/TodoList";

type Props = {
  todos: Array<TodoData | null>;
  error: ApolloError | undefined;
  openReadModal: (todo: TodoData) => void;
};

/**
 * カレンダーを表示するコンポーネント.
 *
 * @param todos Todoの配列
 */
export const Calendar: FC<Props> = memo((props) => {
  const { todos, error, openReadModal } = props;

  // カレンダーに渡すデータ
  const [events, setEvents] = useState([] as EventInput);

  /**
   * カレンダーのイベントをクリックした時に呼ばれる.
   * @remarks
   * 対象のTodoの詳細モーダルを開く
   * @param info イベントが持っている情報
   */
  const onEventClick = (info: EventClickArg) => {
    const todo = {
      id: info.event.id,
      title: info.event.title,
      description: info.event.extendedProps.description,
      startedAt: info.event.extendedProps.startedAt,
      finishedAt: info.event.extendedProps.finishedAt,
      isStatus: info.event.extendedProps.isStatus,
    };

    openReadModal(todo);
  };

  /**
   * todosが変わるたびに、カレンダーに表示するイベントを更新する.
   */
  useEffect(() => {
    // todosの中身がnullかどうかで型ガード
    if (!isNonNullTodoData(todos)) {
      return;
    }
    const events = todos.map((todo) => {
      return {
        ...todo,
        start: todo.startedAt,
        end: todo.finishedAt ? addDays(new Date(todo.finishedAt), 1) : null,
        allDay: true,
      } as EventInput; // fullcalendarのEvent用の型に変換
    });
    setEvents(events);
  }, [todos]);

  return (
    <Box
      padding="1rem 3rem"
      margin="1rem"
      bg="#f0fff4"
      border="1px solid #6BE4A3"
      borderRadius="3xl"
    >
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        // locale='ja' // 日本語化
        eventColor="#48BB78"
        businessHours={true} // 休日に色をつけるかどうか
        editable={true} // イベントを編集できるかどうか(移動可能に)
        contentHeight="auto" // カレンダーの高さ
        dayMaxEvents={3} // 1日に表示できるイベント数
        events={events} // イベントを設定
        eventClick={(info) => onEventClick(info)} // イベントをクリックした時に呼ばれる
      />
      {error && (
        <p>なんらかのエラーが発生してイベントを取得できませんでした。</p>
      )}
    </Box>
  );
});
