import {
  Dispatch,
  FC,
  memo,
  SetStateAction,
  useState,
  useCallback,
} from "react";
import { Button, Flex, Input } from "@chakra-ui/react";
import styled from "styled-components";

import { TextInput } from "../../../atoms/common/TextInput";
import { TableFlexItem } from "../../../atoms/TableFlexItem";
import { Portfolio } from "../../../../types/generated/graphql";
import { useUserPortfolio } from "../../../../hooks/editMe/useUserPortfolio";

type Props = {
  portfolioData: Portfolio;
  setMenuItem: Dispatch<SetStateAction<string>>; //menuItemセット用
  setEditMode: Dispatch<SetStateAction<string>>; //モードセット用
  editMode: string; //編集モード
  onClose: () => void; //モーダルを閉じるメソッド
};

export const EditPortfolio: FC<Props> = memo(
  ({ portfolioData, setMenuItem, setEditMode, editMode, onClose }) => {
    //public部分基本情報編集hooksを使用
    const {
      onDelete,
      handleSubmit,
      register,
      errors,
      onSubmit,
      hookSkillArray,
      setHookSkillArray,
      addSkill,
    } = useUserPortfolio(
      portfolioData,
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

    return (
      <>
        {editMode === "編集" && (
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
              <_LabelItem>使用技術</_LabelItem>
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
            <Flex gap={3} justifyContent="center" mt={10}>
              <Button onClick={handleSubmit(onSubmit)}>更新</Button>
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
            <Button
              onClick={() => {
                onDelete();
                setEditMode("");
              }}
            >
              はい
            </Button>
            <Button
              type="button"
              onClick={() => setEditMode("")}
              _focus={{ boxShadow: "none" }}
            >
              キャンセル
            </Button>
          </>
        )}
      </>
    );
  },
);

const _TextItem = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const _LabelItem = styled.div`
  text-align: left;
  font-weight: bold;
`;
