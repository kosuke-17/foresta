import { FC, memo, ChangeEvent } from "react";
import { Textarea } from "@chakra-ui/react";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registers: any; //value(テキストボックスの値と紐づけ用)
  errorMessage?: string | undefined; //エラーメッセージ(errors.registers?.messageの形で渡す)
  label?: string;
  placeholder?: string;
  onChange?: (args: ChangeEvent<HTMLInputElement>) => void;
};

/**
 * テキストボックスコンポ―ネント.
 */
export const TextArea: FC<Props> = memo(
  ({ registers, errorMessage, label, placeholder, onChange }) => {
    return (
      <>
        {errorMessage}
        <br />
        {label}
        <Textarea
          size="lg"
          type="text"
          {...registers}
          placeholder={placeholder}
          onChange={onChange}
        ></Textarea>
      </>
    );
  },
);
