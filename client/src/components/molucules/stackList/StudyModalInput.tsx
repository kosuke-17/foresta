import { ModalBody } from "@chakra-ui/react";
import { FC, memo } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { AddStack } from "../../../types/types";
import { StackInput } from "../../atoms/study/StackInput";
import { StackSelectSkill } from "../../atoms/study/StackSelectSkill";
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

/**
 * studyModalに表示するテキストボックス.
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
      <StackSelectSkill registers={register("skillTagId")} label="技術" />
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
