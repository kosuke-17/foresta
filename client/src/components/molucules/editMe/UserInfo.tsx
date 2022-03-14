import { memo, FC, Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button, Spinner, Flex } from "@chakra-ui/react";
import { useGetUserByIdQuery } from "../../../types/generated/graphql";
import { useCookies } from "react-cookie";

import { SelectInput } from "../../atoms/editMe/SelectInput";
import { TextInput } from "../../atoms/editMe/TextInput";
import { useUserInfo } from "../../../hooks/editMe/useUserInfo";
import { UserType } from "../../../types/types";

type Props = {
  setMenuItem: Dispatch<SetStateAction<string>>; //menuItemセット用
  onClose: () => void; //モーダルを閉じるメソッド
};

/**
 * public部分基本情報編集画面.
 * @remarks 名前, 職種, github, (mail,pw,specsheetId)
 */
export const UserInfo: FC<Props> = memo(({ setMenuItem, onClose }) => {
  //cookieからID取得
  const [cookies] = useCookies();
  /**
   * ユーザ情報の取得.
   * @remarks 取得情報:名前、職種、GitHub
   */
  const { data, loading, error } = useGetUserByIdQuery({
    variables: {
      id: cookies.ForestaID,
    },
  });
  const user = data?.user.node;

  //テキストボックスに入れるデフォルト値
  const [userData, setUserData] = useState<UserType>({
    id: "",
    name: "",
    jobType: "",
    githubURL: "",
    spreadSheetID: "",
  });

  /**
   * デフォルト値を渡す際undefinedになってしまうので防止.
   */
  useEffect(() => {
    setUserData({
      id: String(cookies.ForestaID),
      name: String(user?.name),
      jobType: String(user?.jobType),
      githubURL: String(user?.githubURL),
      spreadSheetID: String(user?.spreadSheetID),
    });
  }, [
    cookies.ForestaID,
    data,
    user?.githubURL,
    user?.jobType,
    user?.name,
    user?.spreadSheetID,
  ]);

  //public部分基本情報編集hooksを使用(引数に渡してあげつつ、使う機能を宣言)
  const { handleSubmit, register, errors, onSubmit } = useUserInfo(
    userData, //デフォルト値
    setMenuItem, //メニューアイテムを空にする
    onClose, //モーダルを閉じるメソッド
  );

  //読み込み中時の表示
  if (loading) {
    return (
      <Flex justifyContent="center">
        <Spinner color="green.400" />
      </Flex>
    );
  }
  //エラー時の表示
  if (error) {
    return <Flex justifyContent="center">Error</Flex>;
  }

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
