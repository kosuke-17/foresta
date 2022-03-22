import { FC, memo } from "react";
import { FormLabel, Select } from "@chakra-ui/react";
import { useGetAllTechTreeQuery } from "../../../types/generated/graphql";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registers: any; //入力値登録
  label: string; //ラベル名
};

/**
 * 学習記録用技術リストselectboxコンポ―ネント.
 */
export const StackSelectSkill: FC<Props> = memo((props) => {
  const { data } = useGetAllTechTreeQuery();
  const { label, registers } = props;

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Select {...registers}>
        {data &&
          data.getAllTechTree.map((skillTag) => (
            <option key={skillTag.id} value={skillTag.name}>
              {skillTag.name}
            </option>
          ))}
      </Select>
    </>
  );
});
