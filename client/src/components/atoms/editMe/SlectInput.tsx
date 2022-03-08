import { FC, memo } from "react";
import { Select } from "@chakra-ui/react";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registers: any; //value(テキストボックスの値と紐づけ用)
  errorMessage: string; //エラーメッセージ(errors.registers?.messageの形で渡す)
};

/**
 * セレクトボックスコンポ―ネント.
 */
export const SelectInput: FC<Props> = memo((props) => {
  const { registers, errorMessage } = props;

  return (
    <>
      {errorMessage}
      <Select {...registers}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </>
  );
});
