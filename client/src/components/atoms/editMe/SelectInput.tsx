import { FC, memo } from "react";
import { Select } from "@chakra-ui/react";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registers: any; //value(テキストボックスの値と紐づけ用)
  errorMessage?: string | undefined; //エラーメッセージ(errors.registers?.messageの形で渡す)
  options: Array<string>; //セレクトボックスのoption
  label?: string;
  placeholder?: string;
};

/**
 * セレクトボックスコンポ―ネント.
 */
export const SelectInput: FC<Props> = memo(
  ({ registers, errorMessage, options, label, placeholder }) => {
    return (
      <>
        {errorMessage}
        {label}
        <Select {...registers} placeholder={placeholder}>
          {options.map((optionItem, index) => (
            <option key={index} value={optionItem}>
              {optionItem}
            </option>
          ))}
        </Select>
      </>
    );
  },
);
