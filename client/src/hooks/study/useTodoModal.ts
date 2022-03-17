import { useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { TodoModalContext } from "../../Providers/TodoModalProvider";
import { TodoData } from "../../types/types";
import { isSameDay } from "date-fns";

/**
 * Todoのモーダルを操作するためのhook.
 */
export const useTodoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    setModalMode,
    setTodo,
  } = useContext(TodoModalContext);

  /**
   * Todo詳細表示のモーダルを開く.
   * @param todo モーダルに表示するTodo
   */
  const openReadModal = (todo: TodoData) => {
    setModalMode("read");
    setTodo(todo);
    onOpen();
  };

  /**
   * Todo追加用のモーダルを開く.
   */
  const openAddModal = (startedAt?: Date, finishedAt?: Date) => {
    // モーダルのモードを追加モードに設定
    setModalMode("create");
    if (startedAt && finishedAt) {
      // カレンダーの日付変更がトリガーとなった時
      setTodo({
        startedAt,
        finishedAt: isSameDay(startedAt, finishedAt) ? null : finishedAt // 単一日の場合終了日をnullに
      } as TodoData);
    } else {
      // Todo追加ボタンがトリガーとなった時
      // Todoは空のオブジェクトを設定
      setTodo({} as TodoData);
    }

    onOpen();
  };

  return { isOpen, onOpen, onClose, openReadModal, openAddModal };
};