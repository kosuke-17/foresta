import { memo, FC } from "react";
import { StackList } from "../../components/organisms/study/StackList";
import { StackTime } from "../../components/organisms/study/StackTime";

export const Study: FC = memo(() => {
  return (
    <>
      <StackList />
      <StackTime />
    </>
  );
});
