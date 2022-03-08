import { FC, memo } from "react";
import { Input } from "@chakra-ui/react";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registers: any; //value(テキストボックスの値と紐づけ用)
  errorMessage: string | undefined; //エラーメッセージ(errors.registers?.messageの形で渡す)
};

/**
 * テキストボックスコンポ―ネント.
 */
export const TextInput: FC<Props> = memo((props) => {
  const { registers, errorMessage } = props;

  return (
    <>
      {errorMessage}
      <Input type="text" {...registers}></Input>
    </>
  );
});
