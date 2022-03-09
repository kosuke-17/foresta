import { memo, FC, Dispatch, SetStateAction } from "react";
import { TextInput } from "../../atoms/editMe/TextInput";
import { SelectInput } from "../../atoms/editMe/SelectInput";
import { useUserInfo } from "../../../hooks/editMe/useUserInfo";
import { Button } from "@chakra-ui/react";
import { useGetUserByIdQuery } from "../../../types/generated/graphql";

type Props = {
  setMenuItem: Dispatch<SetStateAction<string>>;
  onClose: () => void;
};

/**
 * public部分基本情報編集画面.
 * @remarks 名前, 職種, github, (mail,pw,specsheetId)
 */
export const UserInfo: FC<Props> = memo(({ setMenuItem, onClose }) => {
  const { data } = useGetUserByIdQuery({
    //idは実際cookieから取得
    variables: { id: "621b4b55e9204efe7d8f594a" }, //花子
  });

  const { handleSubmit, register, errors, onSubmit } = useUserInfo(
    {
      name: data?.user.name,
      jobType: data?.user.jobType,
      github: data?.user.githubURL,
    },
    setMenuItem,
    onClose,
  );

  return (
    <>
      <TextInput
        registers={register("name")}
        // errorMessage={errors.name?.message}
      />
      <TextInput
        registers={register("githubURL")}
        // errorMessage={errors.GithubURL?.message}
      />
      <SelectInput
        options={["フロントエンド", "バックエンド", "営業"]}
        registers={register("jobType")}
        // errorMessage={errors.jobType?.message}
      />
      <Button onClick={handleSubmit(onSubmit)}>更新</Button>
    </>
  );
});
