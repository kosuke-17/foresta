import { FC, memo, useCallback, useState } from "react";
import { Textarea, Flex } from "@chakra-ui/react";
import styled from "styled-components";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registers: any; //value(テキストボックスの値と紐づけ用)
  errorMessage?: string | undefined; //エラーメッセージ(errors.registers?.messageの形で渡す)
  label?: string;
  placeholder?: string;
};

/**
 * テキストエリアコンポ―ネント.
 */
export const TextAreaInput: FC<Props> = memo(
  ({ registers, errorMessage, label, placeholder }) => {
    const [textLength, setTextLength] = useState(150);
    /**
     * 文字を数える.
     */
    const count = useCallback((e) => {
      const MAX_LENGTH = 150;
      setTextLength(MAX_LENGTH - e.target.value.length);
    }, []);

    return (
      <>
        <_LabelItem>{label}</_LabelItem>
        <Flex gap={2}>
          残り文字数:
          {textLength >= 0 ? (
            <div>{textLength}</div>
          ) : (
            <_Length>{textLength}</_Length>
          )}
          文字
        </Flex>
        <Textarea {...registers} placeholder={placeholder} onChange={count} />
        <_ErrorMessage>{errorMessage}</_ErrorMessage>
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
`;

const _Length = styled.div`
  color: red;
`;
