import { memo, FC, Dispatch, SetStateAction, useState } from "react";
import { Button, Spinner, Flex } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import styled from "styled-components";

import { TextInput } from "../../atoms/common/TextInput";
import { useUserUrls } from "../../../hooks/editMe/useUserUrls";
import { Url, useGetUserUrlByIdQuery } from "../../../types/generated/graphql";

type Props = {
  setMenuItem: Dispatch<SetStateAction<string>>; //menuItemセット用
  onClose: () => void; //モーダルを閉じるメソッド
};

//やること:URLの登録が0だった場合の処理
//CSS
//バリデーション
//asを処理

/**
 * public部分URL編集画面.
 * @remarks title, url
 */
export const UserUrls: FC<Props> = memo(({ setMenuItem, onClose }) => {
  //cookieからID取得
  const [cookies] = useCookies();

  const { data, loading, error } = useGetUserUrlByIdQuery({
    variables: {
      userToken: cookies.ForestaID,
    },
  });

  //URLリストデータ
  const urlData = data?.urls.node.userUrls.user_urls as Array<Url>;
  //URLのテーブルID
  const urlTableId = data?.urls.node.userUrls.id as string;

  //編集モード
  const [editMode, setEditMode] = useState("");
  //IDセット用
  const [urlId, setUrlId] = useState("");

  //public部分基本情報編集hooksを使用
  const { handleSubmit, register, errors, onDelete, onSubmit } = useUserUrls(
    urlTableId, //URLテーブルのID
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
      {editMode === "" && (
        <>
          {urlData.map((url) => (
            <div key={url.id}>
              <_List>
                <Flex>
                  <_ListTitle>{url.urlName}</_ListTitle>

                  <Button
                    type="button"
                    onClick={() => {
                      setEditMode("削除");
                      setUrlId(url.id);
                    }}
                    ml={3}
                  >
                    削除
                  </Button>
                </Flex>
              </_List>
            </div>
          ))}

          <Flex justifyContent="center" gap={3} mt={5}>
            <Button
              type="button"
              onClick={() => setEditMode("追加")}
              _focus={{ boxShadow: "none" }}
            >
              新規追加
            </Button>
            <Button
              type="button"
              onClick={onClose}
              _focus={{ boxShadow: "none" }}
            >
              キャンセル
            </Button>
          </Flex>
        </>
      )}

      {editMode === "追加" && (
        <>
          <_TextItem>
            <TextInput
              registers={register("urlName")}
              errorMessage={errors.urlName?.message}
              label="タイトル"
              placeholder="タイトル"
            />
          </_TextItem>

          <_TextItem>
            <TextInput
              registers={register("url")}
              errorMessage={errors.url?.message}
              label="URL"
              placeholder="URL"
            />
          </_TextItem>

          <Flex gap={3} justifyContent="center">
            <Button onClick={handleSubmit(onSubmit)}>追加</Button>
            <Button
              type="button"
              onClick={() => setEditMode("")}
              _focus={{ boxShadow: "none" }}
            >
              キャンセル
            </Button>
          </Flex>
        </>
      )}

      {editMode === "削除" && (
        <>
          削除しますか？
          <Flex gap={3} justifyContent="center" mt={5}>
            <Button
              onClick={() => {
                onDelete(urlId);
                setEditMode("");
                setUrlId("");
              }}
            >
              はい
            </Button>
            <Button
              type="button"
              onClick={() => {
                setEditMode("");
                setUrlId("");
              }}
              _focus={{ boxShadow: "none" }}
            >
              キャンセル
            </Button>
          </Flex>
        </>
      )}
    </>
  );
});

const _TextItem = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const _ListTitle = styled.div`
  width: 300px;
`;

const _List = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
`;
