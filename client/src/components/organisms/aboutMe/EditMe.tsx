import { memo, FC } from "react";
import { TextInput } from "../../atoms/editMe/TextInput";
import { useUserInfo } from "../../../hooks/editMe/useUserInfo";

/**
 * EditMe.
 */
export const EditMe: FC = memo(() => {
  const { handleSubmit, cancel, register, errors, onSubmit } =
    useUserInfo("初期表示用データ");

  return (
    <>
      <TextInput
        registers={register("name")}
        errorMessage={errors.name?.message}
      />
      <button type="button" onClick={handleSubmit(onSubmit)}>
        送信
      </button>
      <button type="button" onClick={cancel}>
        キャンセル
      </button>
    </>
  );
});
