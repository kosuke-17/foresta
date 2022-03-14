import { ModalBody } from "@chakra-ui/react";
import { FC, memo } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { StackInput } from "../../atoms/study/StackInput";
import { StackTextarea } from "../../atoms/study/StackTextarea";

type Props = {
  register: UseFormRegister<AddStack>;
  errors: {
    createdAt?: FieldError | undefined;
    skillTagId?: FieldError | undefined;
    timeStack?: FieldError | undefined;
    content?: FieldError | undefined;
  };
};

type AddStack = {
  createdAt: string;
  skillTagId: string;
  timeStack: number;
  content: string;
};

/**
 * studyModalに表示するテキストボックス
 */
export const StudyModalInput: FC<Props> = memo((props) => {
  const { register, errors } = props;
  return (
    <ModalBody backgroundColor="white" m={3} borderRadius="base">
      <StackInput
        label="日付"
        type="date"
        placeholder="日付"
        registers={register("createdAt")}
        errorMessage={errors.createdAt?.message}
      />
      <StackInput
        label="技術"
        type="text"
        placeholder="技術"
        registers={register("skillTagId")}
        errorMessage={errors.skillTagId?.message}
      />
      <StackInput
        label="時間"
        type="number"
        placeholder="時間"
        registers={register("timeStack")}
        errorMessage={errors.timeStack?.message}
      />
      <StackTextarea
        label="メモ"
        type="text"
        placeholder="メモ"
        registers={register("content")}
        errorMessage={errors.content?.message}
      />
    </ModalBody>
  );
});
