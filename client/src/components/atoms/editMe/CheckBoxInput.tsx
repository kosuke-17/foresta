import { FC, memo } from "react";
import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registers: any; //value(テキストボックスの値と紐づけ用)
  errorMessage?: string | undefined; //エラーメッセージ(errors.registers?.messageの形で渡す)
  array: Array<string>;
  label?: string;
};

/**
 * チェックボックスコンポ―ネント.
 */
export const CheckBoxInput: FC<Props> = memo(
  ({ registers, errorMessage, label, array }) => {
    return (
      <>
        <_LabelItem>{label}</_LabelItem>
        <Flex gap={3} mt={1}>
          {array.map((item) => (
            <Flex alignItems="center" gap={1} key={item}>
              <input type="checkbox" id={item} {...registers} value={item} />
              <label>{item}</label>
            </Flex>
          ))}
        </Flex>
        <_ErrorMessage>{errorMessage}</_ErrorMessage>
      </>
    );
  },
);

const _ErrorMessage = styled.div`
  color: red;
  height: 10px;
`;

const _LabelItem = styled.div`
  text-align: left;
  font-weight: bold;
`;
