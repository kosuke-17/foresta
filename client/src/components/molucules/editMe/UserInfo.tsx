import { memo, FC, Dispatch, SetStateAction } from "react";
import { Button } from "@chakra-ui/react";
import { useGetUserByIdQuery } from "../../../types/generated/graphql";

import { useUserInfo } from "../../../hooks/editMe/useUserInfo";
import { SelectInput } from "../../atoms/editMe/SelectInput";
import { TextInput } from "../../atoms/editMe/TextInput";

type Props = {
  setMenuItem: Dispatch<SetStateAction<string>>; //menuItemセット用
  onClose: () => void; //モーダルを閉じるメソッド
};

/**
 * public部分基本情報編集画面.
 * @remarks 名前, 職種, github, (mail,pw,specsheetId)
 */
export const UserInfo: FC<Props> = memo(({ setMenuItem, onClose }) => {
  /**
   * ユーザ情報の取得.
   */
  const { data } = useGetUserByIdQuery({
    //idは実際cookieから取得
    variables: { id: "621b4b55e9204efe7d8f594a" }, //花子
  });
  const user = data?.user;

  //こんな感じで職種のセレクトoptionも取得
  // const { data: lang } = useGetLanguagesQuery();
  // const langArray = lang?.getLanguages.data as Array<string>;

  //public部分基本情報編集hooksを使用
  const { handleSubmit, register, errors, onSubmit } = useUserInfo(
    //デフォルト値
    {
      name: user?.name,
      jobType: user?.jobType,
      github: user?.githubURL,
    },
    //メニューアイテムを空にするset
    setMenuItem,
    //モーダルを閉じるメソッド
    onClose,
  );

  return (
    <>
      <TextInput
        registers={register("name")}
        errorMessage={errors.name?.message}
      />
      <TextInput
        registers={register("githubURL")}
        errorMessage={errors.githubURL?.message}
      />
      <SelectInput
        options={["フロントエンドエンジニア", "バックエンドエンジニア", "営業"]}
        registers={register("jobType")}
        errorMessage={errors.jobType?.message}
      />
      <Button onClick={handleSubmit(onSubmit)}>更新</Button>
    </>
  );
});
