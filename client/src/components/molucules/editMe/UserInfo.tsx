import { memo, FC } from "react";
import { TextInput } from "../../atoms/editMe/TextInput";
import { useUserInfo } from "../../../hooks/editMe/useUserInfo";
import { Button } from "@chakra-ui/react";

/**
 * public部分基本情報編集画面.
 * @remarks 名前, 職種, github, (mail,pw,specsheetId)
 */
export const UserInfo: FC = memo(() => {
  const { handleSubmit, cancel, register, errors, onSubmit } =
    useUserInfo("初期表示用データ");

  return (
    <>
      <TextInput
        registers={register("name")}
        errorMessage={errors.name?.message}
      />
      <Button onClick={handleSubmit(onSubmit)}>送信</Button>
      <Button onClick={cancel}>キャンセル</Button>
    </>
  );
});
