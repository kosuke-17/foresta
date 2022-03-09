import { memo, FC, Dispatch, SetStateAction } from "react";
import { TextInput } from "../../atoms/editMe/TextInput";
import { SelectInput } from "../../atoms/editMe/SelectInput";
import { useUserInfo } from "../../../hooks/editMe/useUserInfo";
import { Button } from "@chakra-ui/react";

type Props = {
  setMenuItem: Dispatch<SetStateAction<string>>;
};

/**
 * public部分基本情報編集画面.
 * @remarks 名前, 職種, github, (mail,pw,specsheetId)
 */
export const UserInfo: FC<Props> = memo(({ setMenuItem }) => {
  const { handleSubmit, cancel, register, errors, onSubmit } = useUserInfo(
    "初期表示用データ",
    setMenuItem,
  );

  return (
    <>
      <TextInput
        registers={register("name")}
        errorMessage={errors.name?.message}
      />
      <TextInput
        registers={register("GithubURL")}
        errorMessage={errors.GithubURL?.message}
      />
      <SelectInput
        options={["フロントエンド", "バックエンド", "営業"]}
        registers={register("jobType")}
        errorMessage={errors.jobType?.message}
      />
      <Button onClick={handleSubmit(onSubmit)}>送信</Button>
      <Button onClick={cancel}>キャンセル</Button>
    </>
  );
});
