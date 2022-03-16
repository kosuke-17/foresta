import {
  memo,
  FC,
  Dispatch,
  SetStateAction,
  useState,
  useCallback,
  useEffect,
} from "react";
import { Button, Spinner, Flex, Input } from "@chakra-ui/react";
import { useCookies } from "react-cookie";

import { SelectInput } from "../../atoms/editMe/SelectInput";
import { TextInput } from "../../atoms/editMe/TextInput";
import { useNewPortfolio } from "../../../hooks/editMe/useNewPortfolio";
import { EditPortfolio } from "../../atoms/editMe/EditPortfolio";

import {
  Portfolio,
  useGetUserPortfolioByIdQuery,
} from "../../../types/generated/graphql";
import styled from "styled-components";
import { TableFlexItem } from "../../atoms/TableFlexItem";

type Props = {
  setMenuItem: Dispatch<SetStateAction<string>>; //menuItemセット用
  onClose: () => void; //モーダルを閉じるメソッド
};

/**
 * 制作物編集画面.
 * @remarks タイトル、詳細、画像、URL
 */
export const UserPortfolio: FC<Props> = memo(({ setMenuItem, onClose }) => {
  //cookieからID取得
  const [cookies] = useCookies();

  const { data, loading, error } = useGetUserPortfolioByIdQuery({
    variables: {
      // id: "622db6cb03794ad6e8ea6950", //toge
      id: cookies.ForestaID,
    },
  });
  const portfolioData = data?.portfolios.node.portfolio as Array<Portfolio>;

  const [editMode, setEditMode] = useState("");
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
`;

const _List = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
`;
