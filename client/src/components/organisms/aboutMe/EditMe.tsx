import { memo, FC } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//バリデーションチェック
const schema = yup.object().shape({
  //姓のバリデーション
  name: yup
    .string()
    .trim()
    .required("姓名を入力してください")
    .max(15, "姓名は15文字以内で入力してください"),
});

/**
 * EditMe.
 */
export const EditMe: FC = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "名前",
    },
  });
  /**
   * 更新ボタンを押した時に呼ばれる
   * @param data - 入力したデータ
   */
  const onSubmit = async (data: any) => {
    try {
      alert("データ:" + data.name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {errors.name?.message}
      <input type="text" {...register("name")} />
      <button type="button" onClick={handleSubmit(onSubmit)}>
        送信
      </button>
    </>
  );
});
