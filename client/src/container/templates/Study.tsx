import { memo, FC } from "react";
import { TodosArea } from "../../components/organisms/study/TodosArea";
import { StackList } from "../../components/organisms/study/StackList";
import { StackTime } from "../../components/organisms/study/StackTime";

export const Study: FC = memo(() => {
  return (
    <>
      <TodosArea />
      <StackList />
      <StackTime />
    </>
  );
});
