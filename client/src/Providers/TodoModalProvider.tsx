import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { TodoData } from "../types/types";

type Props = {
  children: ReactNode;
};

// contextのタイプ定義
type ContextType = {
  modalMode: "read" | "edit" | "add" | "delete";
  setModalMode: Dispatch<SetStateAction<"read" | "edit" | "add" | "delete">>;
  todo: TodoData;
  setTodo: Dispatch<SetStateAction<TodoData>>;
};

// contextを使用する
export const TodoModalContext = createContext<ContextType>({} as ContextType);

/**
 * Todoのモーダルの状態を管理するグローバルstate.
 */
export const TodoModalProvider: FC<Props> = (props) => {
  const { children } = props;

  // モーダルのモード (read, edit, add, delete)
  const [modalMode, setModalMode] = useState<
    "read" | "edit" | "add" | "delete"
  >("read");
  // モーダルに表示する対象のTodo
  const [todo, setTodo] = useState<TodoData>({} as TodoData);

  return (
    <TodoModalContext.Provider
      value={{
        modalMode,
        setModalMode,
        todo,
        setTodo,
      }}
    >
      {children}
    </TodoModalContext.Provider>
  );
};
