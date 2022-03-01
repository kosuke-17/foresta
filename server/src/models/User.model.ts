import mongoose from "mongoose";

/**
 *  ユーザースキーマ.
 *  @remarks
 *  - ユーザー名 : string
 *  - 職業タイプ : string
 *  - GithubURL : string
 *  - 習得技術情報 : obj
 */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  githubURL: {
    type: String,
  },
  have_techLeafs: [
    {
      techTree: { type: String },
      achievementRate: { type: Number },
      techLeafIds: { type: [String] },
    },
  ],
});

/**
 *  ユーザーURLスキーマ.
 *
 * @remarks
 *    - Url名 : string
 *    - Url : string
 *  - ユーザーID : string
 */
const UserUrlsSchema = new mongoose.Schema({
  user_urls: [
    {
      urlName: { type: String },
      url: { type: String },
    },
  ],
  userId: { type: String },
});

/**
 *  ユーザーTodoスキーマ.
 *  @remarks
 *  -
 *    - タイトル : string
 *    - 説明 : string
 *    - 開始日 : string
 *    - 終了日 : string
 *    - todo状態 : string
 *    - ユーザーID : string
 */
const UseTodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  startedAt: String,
  finishedAt: String,
  isStatus: Boolean,
  userId: String,
});

export const User = mongoose.model("user", UserSchema);
export const UserUrls = mongoose.model("userurl", UserUrlsSchema);
export const UserTodo = mongoose.model("userTodo", UseTodoSchema);
