import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//バリデーションチェック
const schema = yup.object().shape({
  //氏名のバリデーション
  name: yup
    .string()
    .trim()
    .required("氏名を入力してください")
    .max(15, "氏名は15文字以内で入力してください"),
  //職種のバリデーション
  jobType: yup.string().required("職種を入力して下さい"),
  //Githubアカウントのバリデーション
  GithubURL: yup
    .string()
    .trim()
    .required("GitHubアカウント名を入力して下さい")
    .max(39, "39文字以内で入力して下さい"),
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
      jobType: userData,
      GithubURL: userData,
    },
  });

  /**
   * 更新ボタンを押した時に呼ばれる
   * @param data - 入力したデータ
   */
  const onSubmit = async (data: any) => {
    try {
      console.dir("データ" + JSON.stringify(data));
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
