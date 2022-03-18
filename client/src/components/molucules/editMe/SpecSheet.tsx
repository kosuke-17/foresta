import { memo, FC, Dispatch, SetStateAction, useState } from "react";
import { Button, FormControl } from "@chakra-ui/react";

import { TextInput } from "../../atoms/editMe/TextInput";
import { useSpecSheet } from "../../../hooks/editMe/useSpecSheet";
import { TextArea } from "../../atoms/editMe/TextArea";

type Props = {
  setMenuItem: Dispatch<SetStateAction<string>>; //menuItemセット用
  onClose: () => void; //モーダルを閉じるメソッド
};

/**
 * スペックシート基本情報以外編集画面.
 * @remarks 自己PR、業務外、資格、前職
 */
export const SpecSheet: FC<Props> = memo(({ setMenuItem, onClose }) => {
  //public部分基本情報編集hooksを使用(引数に渡してあげつつ、使う機能を宣言)
  const {
    handleSubmit,
    register,
    errors,
    onSubmit,
    prevJobs,
    setPrevJobs,
    watch,
    setValue,
  } = useSpecSheet(
    setMenuItem, //メニューアイテムを空にする
    onClose, //モーダルを閉じるメソッド
  );

  return (
    <>
      <TextInput
        registers={register("studyOnOwnTime")}
        errorMessage={errors.studyOnOwnTime?.message}
        label="業務外の取り組み"
        placeholder="業務外の取り組み"
      />

      {prevJobs?.map((item: any, index: number) => (
        <>
          <TextArea
            key={index}
            registers={register(`prevJobs_${index}` as any)}
          />
          <Button
            type="button"
            onClick={() => {
              const newVal = [...prevJobs];
              newVal.splice(index, 1);
              setPrevJobs(newVal);
              prevJobs.forEach((_, idx) => {
                if (index > idx) return;
                setValue(`prevJobs_${idx}`, watch(`prevJobs_${idx + 1}`));
              });
            }}
          >
            削除
          </Button>
          {errors?.[`prevJobs_${index}` as any]?.message}
        </>
      ))}
      <Button
        onClick={() => {
          setPrevJobs((cur) => [...cur, ""]);
          setValue(`prevJobs_${prevJobs.length}`, "");
        }}
      >
        前職を追加
      </Button>

      <TextInput
        registers={register("certification")}
        errorMessage={errors.certification?.message}
        label="資格"
        placeholder="資格"
      />

      <TextArea
        registers={register("selfIntro")}
        errorMessage={errors.selfIntro?.message}
        label="PR"
        placeholder="PR"
      />

      <Button onClick={handleSubmit(onSubmit)}>更新</Button>
      <Button type="button" onClick={onClose} _focus={{ boxShadow: "none" }}>
        キャンセル
      </Button>
    </>
  );
});
