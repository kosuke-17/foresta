import { memo, FC, Dispatch, SetStateAction } from "react";
import { Button, Textarea } from "@chakra-ui/react";

import { TextInput } from "../../atoms/editMe/TextInput";
import { useSpecSheet } from "../../../hooks/editMe/useSpecSheet";

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
  const { handleSubmit, register, errors, onSubmit, prevJobs, setPrevJobs } =
    useSpecSheet(
      setMenuItem, //メニューアイテムを空にする
      onClose, //モーダルを閉じるメソッド
    );

  return (
    <>
      <TextInput
        registers={register("studyOnOwnTime")}
        errorMessage={errors.studyOnOwnTime?.message}
        label="業務外"
        placeholder="業務外の取り組み"
      />

      {prevJobs?.map((item: any, index: number) => (
        <div key={index}>
          <p>{`前職${index + 1}`}</p>
          <Textarea
            value={item?.content}
            id={item.content}
            placeholder="前職"
            onChange={(event) => {
              const arr = [...prevJobs];
              arr[index] = { content: event.target.value };
              setPrevJobs(arr);
            }}
          >
            {item?.content}
          </Textarea>
        </div>
      ))}
      <Button onClick={() => setPrevJobs([...prevJobs, { content: "" }])}>
        追加
      </Button>
      <br />

      <TextInput
        registers={register("certification")}
        errorMessage={errors.certification?.message}
        label="資格"
        placeholder="資格"
      />

      <TextInput
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
