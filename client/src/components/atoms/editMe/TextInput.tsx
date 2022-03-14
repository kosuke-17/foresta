import { FC, memo } from "react";
import { Input } from "@chakra-ui/react";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registers: any; //value(テキストボックスの値と紐づけ用)
  errorMessage?: string | undefined; //エラーメッセージ(errors.registers?.messageの形で渡す)
  label?: string;
  placeholder?: string;
};

/**
 * テキストボックスコンポ―ネント.
 */
export const TextInput: FC<Props> = memo(
  ({ registers, errorMessage, label, placeholder }) => {
    return (
      <>
        {errorMessage}
        {label}
        <Input type="text" {...registers} placeholder={placeholder}></Input>
      </>
    );
  },
);
