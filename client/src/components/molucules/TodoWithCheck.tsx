import { FC, memo } from "react";
import { Checkbox, Flex } from "@chakra-ui/react";
import { Todo } from "../../types/generated/graphql";
import {
  getFormattedDate,
  getFormattedDateWithoutYear,
} from "../../utils/methods";

// 自動生成したTodoの型から使用したいプロパティ名だけを指定
type Props = Pick<
  Todo,
  "id" | "title" | "startedAt" | "finishedAt" | "isStatus"
>;

/**
 * Todoリストの一つのTodoを表示するコンポーネント.
 */
export const TodoWithCheck: FC<Props> = memo((props) => {
  const { id, title, startedAt, finishedAt, isStatus } = props;

  /**
   * Todo用にフォーマットされた日付を返すメソッド.
   *
   * @remarks
   * 終了日が設定されている場合とされてない場合で場合分け
   * @returns フォーマットされた日付
   */
  const getformattedTodoDate = () => {
    if (startedAt && finishedAt) {
      return `${getFormattedDate(
        new Date(startedAt),
      )}-${getFormattedDateWithoutYear(new Date(finishedAt))}`;
    } else if (startedAt) {
      return `${getFormattedDate(new Date(startedAt))}`;
    } else {
      return "未定";
    }
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      _hover={{ backgroundColor: "#f5f5f5", cursor: "pointer" }}
    >
      <Flex align="center">
        <Checkbox
          isChecked={isStatus!}
          colorScheme="teal"
          size="lg"
          onChange={() => alert("toggle")}
          padding="5px"
        />
        <span>{title}</span>
      </Flex>
      <span>{getformattedTodoDate()}</span>
    </Flex>
  );
});
