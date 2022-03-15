import { useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { TodoModalContext } from "../../Providers/TodoModalProvider";
import { TodoData } from "../../types/types";

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
  const openAddModal = () => {
    // モーダルのモードを追加モードに設定
    setModalMode("create");
    // Todoは空のオブジェクトを設定
    setTodo({} as TodoData);
    onOpen();
  };

  return { isOpen, onOpen, onClose, openReadModal, openAddModal };
};