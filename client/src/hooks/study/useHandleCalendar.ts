import { addDays, DateSelectArg, EventClickArg, EventDropArg } from "@fullcalendar/react";
import { useToast } from "@chakra-ui/react";

import { useUpdateTodoMutation, GetAllTodoByUserDocument } from "../../types/generated/graphql";
import type { TodoData } from "../../types/types";

/**
 * カレンダーを操作するためのhooks.
 */
export const useHandleCalendar = (openReadModal: (todo: TodoData) => void, openAddModal: (startedAt?: Date, finishedAt?: Date) => void) => {
  const toast = useToast();

  const [updateTodo] = useUpdateTodoMutation({
    refetchQueries: [GetAllTodoByUserDocument],
  });

  /**
   * 対象のTodoの詳細モーダルを開く.
   * @remarks
   * カレンダーのイベントをクリックした時に呼ばれる
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
   * Todo追加用モーダルを開く.
   * @remarks
   * カレンダーの日付を選択したときに呼ばれる(クリックもしくは複数選択)。
   * 追加フォームの日付欄に選択した日付を設定する。
   * @param info 日付選択時の情報
   */
  const onDateSelect = (info: DateSelectArg) => {
    openAddModal(info.start, addDays(info.end, -1));
  };

  /**
   * Todoの日付を更新する.
   * @remarks
   * カレンダーのイベントをドラッグした時に呼ばれる。移動先の日付でデータを更新。
   * @param info ドラッグ&ドロップしたイベントの情報
   */
  const onEventDrop = async (info: EventDropArg) => {
    const finishedAt = info.event.end ? addDays(info.event.end, -1) : null; // 移動先の終了日(終了日がある場合)

    const todo = {
      todoId: info.event.id,
      title: info.event.title,
      description: info.event.extendedProps.description,
      startedAt: info.event.start, // 移動先の開始日
      finishedAt, // 移動先の終了日
      isStatus: info.event.extendedProps.isStatus,
      userId: "621f1cba386085f036353ecd",
    };
    try {
      const updateTodoData = await updateTodo({
        variables: {
          todo: todo,
        }
      });
      if (updateTodoData.data?.updateTodo.status === "success") {
        toast({
          title: "Todoの日付を更新しました",
          status: "success",
          position: "bottom-left",
          isClosable: true
        });

      } else if (updateTodoData.data?.updateTodo.status === "error") {
        toast({
          title: "Todoの日付の更新に失敗しました",
          status: "error",
          position: "bottom-left",
          isClosable: true
        });
      }

    } catch (error) {
      if (error instanceof Error) { // errorがunknown型で返ってくるので型ガード
        toast({
          title: "Todoの日付の更新に失敗しました",
          status: "error",
          position: "bottom-left",
          isClosable: true
        });
      }
    }
  };

  return { onEventClick, onDateSelect, onEventDrop };
};