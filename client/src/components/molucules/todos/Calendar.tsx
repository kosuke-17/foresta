import { Dispatch, FC, memo, SetStateAction } from "react";
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

type Props = {
  todos: Array<TodoData> | undefined;
  error: ApolloError | undefined;
  onOpen: (e: any) => void;
  setTodoId: Dispatch<SetStateAction<string>>;
};

/**
 * カレンダーを表示するコンポーネント.
 *
 * @param todos Todoの配列
 */
export const Calendar: FC<Props> = memo((props) => {
  const { todos, error, onOpen, setTodoId } = props;

  // propsで渡ってきたtodoデータからeventデータを作成
  const events = todos?.map((todo) => {
    return {
      id: todo.id,
      title: todo.title,
      start: todo.startedAt,
      end: todo.finishedAt ? addDays(new Date(todo.finishedAt), 1) : null,
      allDay: true,
    } as EventInput; // fullcalendarのEvent用の型に変換
  });

  const onEventClick = (info: EventClickArg) => {
    setTodoId(info.event.id);
    onOpen(info.jsEvent); // info.jsEventでクリックしたイベントのDOMを取得できる
    console.log(info);
  };

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
        events={events || []} // イベントを設定
        eventClick={(info) => onEventClick(info)} // イベントをクリックした時に呼ばれる
      />
      {error && <p>なんらかのエラーが発生してイベントを取得できませんでした。</p>}
    </Box>
  );
});
