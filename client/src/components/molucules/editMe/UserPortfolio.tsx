import {
  memo,
  FC,
  Dispatch,
  SetStateAction,
  useState,
  useCallback,
} from "react";
import { Button, Spinner, Flex, Input } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import styled from "styled-components";

import { TextInput } from "../../atoms/editMe/TextInput";
import { TableFlexItem } from "../../atoms/TableFlexItem";
import { EditPortfolio } from "./EditPortfolio";
import { useNewPortfolio } from "../../../hooks/editMe/useNewPortfolio";
import {
  Portfolio,
  useGetUserPortfolioByIdQuery,
} from "../../../types/generated/graphql";

type Props = {
  setMenuItem: Dispatch<SetStateAction<string>>; //menuItemセット用
  onClose: () => void; //モーダルを閉じるメソッド
};

//やること:
//CSS
//バリデーション
//asを処理

/**
 * 制作物編集画面.
 * @remarks タイトル、詳細、画像、URL
 */
export const UserPortfolio: FC<Props> = memo(({ setMenuItem, onClose }) => {
  //cookieからID取得
  const [cookies] = useCookies();

  /**
   * 制作物情報デフォルト値取得.
   */
  const { data, loading, error } = useGetUserPortfolioByIdQuery({
    variables: {
      id: cookies.ForestaID,
    },
  });
  const portfolioData = data?.portfolios.node.portfolio as Array<Portfolio>;

  //編集モード
  const [editMode, setEditMode] = useState("");
  //どの制作物を編集中か判断用
  const [itemName, setItemName] = useState("");

  //hooksを使用
  const {
    handleSubmit,
    register,
    errors,
    onSubmit,
    hookSkillArray,
    setHookSkillArray,
    addSkill,
  } = useNewPortfolio(
    setMenuItem, //メニューアイテムを空にする
    onClose, //モーダルを閉じるメソッド
  );

  //新しく入力した技術
  const [skill, setSkill] = useState("");
  /**
   * 入力した技術を反映.
   */
  const handleChange = useCallback((e) => {
    setSkill(e.target.value);
  }, []);

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
      {portfolioData &&
        portfolioData.map((portfolio) => (
          <div key={portfolio.id}>
            {editMode === "" && (
              <>
                <_List>
                  <Flex>
                    <_ListTitle>{portfolio.title}</_ListTitle>
                    <Button
                      type="button"
                      onClick={() => {
                        setItemName(portfolio.title);
                        setEditMode("編集");
                      }}
                    >
                      編集
                    </Button>
                    <Button
                      type="button"
                      onClick={() => {
                        setItemName(portfolio.title);
                        setEditMode("削除");
                      }}
                      ml={3}
                    >
                      削除
                    </Button>
                  </Flex>
                </_List>
              </>
            )}
            {portfolio.title === itemName && (
              <>
                <EditPortfolio
                  editMode={editMode}
                  setEditMode={setEditMode}
                  setMenuItem={setMenuItem}
                  onClose={onClose}
                  portfolioData={portfolio}
                />
              </>
            )}
          </div>
        ))}
      {editMode === "" && (
        <>
          <Flex justifyContent="center" gap={3} mt={5}>
            <Button
              type="button"
              onClick={() => setEditMode("新規")}
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
      {editMode === "新規" && (
        <>
          <_TextItem>
            <TextInput
              registers={register("title")}
              errorMessage={errors.title?.message}
              label="プロジェクト名"
              placeholder="プロジェクト名"
            />
          </_TextItem>

          <_TextItem>
            <TextInput
              registers={register("img")}
              errorMessage={errors.img?.message}
              label="画像URL"
              placeholder="画像URL"
            />
          </_TextItem>

          <_TextItem>
            <TextInput
              registers={register("portfolioURL")}
              errorMessage={errors.portfolioURL?.message}
              label="URL"
              placeholder="URL"
            />
          </_TextItem>

          <_TextItem>
            使用技術
            <Flex>
              <Input type="text" value={skill} onChange={handleChange} />
              <Button
                onClick={() => {
                  addSkill(skill);
                  setSkill("");
                }}
                ml={3}
              >
                追加
              </Button>
            </Flex>
            <_TextItem>
              <TableFlexItem
                itemArray={hookSkillArray}
                deleteBtn={true}
                setArray={setHookSkillArray}
              />
            </_TextItem>
          </_TextItem>

          <_TextItem>
            <TextInput
              registers={register("description")}
              errorMessage={errors.description?.message}
              label="詳細"
              placeholder="詳細"
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
    </>
  );
});

const _TextItem = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const _ListTitle = styled.div`
  width: 300px;
  padding-left: 40px;
  text-align: left;
`;

const _List = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
`;
