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

/**
 *  ユーザー技術情報スキーマ.
 *  @remarks
 *  -
 *    - 技術ツリーID : string
 *    - 技術ツリー達成率 : number
 *    - 技術リーフタグ一覧 : string[]]
 *    - ユーザーID : string
 */
const UserLeafsSchema = new mongoose.Schema({
  techLeafs: [
    {
      techTreeId: String,
      achievementRate: Number,
      techLeafIds: [String],
    },
  ],
  userId: String,
});

export const Users = mongoose.model("user", UserSchema);
export const UserUrls = mongoose.model("userurl", UserUrlsSchema);
export const UserTodos = mongoose.model("userTodo", UseTodoSchema);
export const UserLeafs = mongoose.model("userLeaf", UserLeafsSchema);
