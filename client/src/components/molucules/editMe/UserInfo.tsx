import { memo, FC, Dispatch, SetStateAction } from "react";
import { Button } from "@chakra-ui/react";

import { SelectInput } from "../../atoms/editMe/SelectInput";
import { TextInput } from "../../atoms/editMe/TextInput";
import { useUserInfo } from "../../../hooks/editMe/useUserInfo";

type Props = {
  setMenuItem: Dispatch<SetStateAction<string>>; //menuItemセット用
  onClose: () => void; //モーダルを閉じるメソッド
};

/**
 * public部分基本情報編集画面.
 * @remarks 名前, 職種, github, (mail,pw,specsheetId)
 */
export const UserInfo: FC<Props> = memo(({ setMenuItem, onClose }) => {
  //public部分基本情報編集hooksを使用(引数に渡してあげつつ、使う機能を宣言)
  const { handleSubmit, register, errors, onSubmit } = useUserInfo(
    setMenuItem, //メニューアイテムを空にする
    onClose, //モーダルを閉じるメソッド
  );

  return (
    <>
      {/* 名前の入力欄 */}
      <TextInput
        registers={register("name")}
        errorMessage={errors.name?.message}
        label="氏名"
        placeholder="氏名"
      />

      {/* githubアカウント入力欄 */}
      <TextInput
        registers={register("githubURL")}
        errorMessage={errors.githubURL?.message}
        label="GitHubアカウント"
        placeholder="GitHubアカウント"
      />

      {/* 職種入力欄 */}
      <SelectInput
        options={["フロントエンドエンジニア", "バックエンドエンジニア", "営業"]}
        registers={register("jobType")}
        errorMessage={errors.jobType?.message}
        label="職種"
      />

      <Button onClick={handleSubmit(onSubmit)}>更新</Button>
      <Button type="button" onClick={onClose} _focus={{ boxShadow: "none" }}>
        キャンセル
      </Button>
    </>
  );
});
