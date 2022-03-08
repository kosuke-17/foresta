import { FC, memo } from "react";
import { Select } from "@chakra-ui/react";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registers: any; //value(テキストボックスの値と紐づけ用)
  errorMessage: string | undefined; //エラーメッセージ(errors.registers?.messageの形で渡す)
  options: Array<string>; //セレクトボックスのoption
};

/**
 * セレクトボックスコンポ―ネント.
 */
export const SelectInput: FC<Props> = memo((props) => {
  const { registers, errorMessage, options } = props;

  return (
    <>
      {errorMessage}
      <Select {...registers}>
        {options.map((optionItem, index) => (
          <option key={index} value={optionItem}>
            {optionItem}
          </option>
        ))}
      </Select>
    </>
  );
});
