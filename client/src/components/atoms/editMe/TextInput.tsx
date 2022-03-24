import { FC, memo } from "react";
import { Input, Flex } from "@chakra-ui/react";
import styled from "styled-components";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registers: any; //value(テキストボックスの値と紐づけ用)
  errorMessage?: string | undefined; //エラーメッセージ(errors.registers?.messageの形で渡す)
  label?: string;
  placeholder?: string;
  type?: string;
};

/**
 * テキストボックスコンポ―ネント.
 */
export const TextInput: FC<Props> = memo(
  ({ registers, errorMessage, label, placeholder, type = "text" }) => {
    return (
      <>
        <Flex gap={3}>
          <_LabelItem> {label}</_LabelItem>
          <_ErrorMessage>{errorMessage}</_ErrorMessage>
        </Flex>
        <Input type={type} {...registers} placeholder={placeholder}></Input>
      </>
    );
  },
);

const _LabelItem = styled.div`
  text-align: left;
  font-weight: bold;
`;

const _ErrorMessage = styled.div`
  color: red;
  height: 10px;
  text-align: left;
`;
