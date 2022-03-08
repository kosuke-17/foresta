import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
 * public部分基本情報編集メソッド.
 * @returns
 * - register:入力したデータ
 * - handleSubmit:データを入力した際のリアルタイム更新
 * - errors:エラー
 * - onSubmit:更新ボタンを押した時のメソッド
 * @params userData - 初期表示用データ
 */
export const useUserInfo = (userData: any) => {
  // バリデーション機能を呼び出し
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    //初期値はログインしている人のデータを入れる
    defaultValues: {
      name: userData,
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

  /**
   * キャンセルボタンを押した時に呼ばれる
   */
  const cancel = () => {
    alert("キャンセル");
  };

  return {
    handleSubmit,
    cancel,
    register,
    errors,
    onSubmit,
    userData,
  };
};
