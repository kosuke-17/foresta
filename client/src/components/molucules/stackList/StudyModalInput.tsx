import { ModalBody } from "@chakra-ui/react";
import { FC, memo } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { AddStack } from "../../../types/types";
import { TextAreaWithCounter } from "../../atoms/common/TextAreaWithCounter";
import { TextInput } from "../../atoms/common/TextInput";
import { StackSelectSkill } from "../../atoms/study/StackSelectSkill";

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
      <TextInput
        label="Started at"
        type="date"
        placeholder="Started at"
        registers={register("createdAt")}
        errorMessage={errors.createdAt?.message}
      />
      <StackSelectSkill registers={register("skillTagId")} label="Technology" />
      <TextInput
        label="Hours"
        type="number"
        placeholder="Hours"
        registers={register("timeStack")}
        errorMessage={errors.timeStack?.message}
      />
      <TextAreaWithCounter
        label="Detail"
        placeholder="Detail"
        registers={register("content")}
        errorMessage={errors.content?.message}
      />
    </ModalBody>
  );
});
