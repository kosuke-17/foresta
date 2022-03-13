import mongoose from "mongoose";

/**
 *  ユーザースキーマ.
 *  @remarks
 *  - ユーザー名 : string
 *  - 職業タイプ : string
 *  - スプレッドシートURL : string
 *  - GithubURL : string
 */
const UserSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  jobType: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  spreadSheetID: { type: String },
  githubURL: { type: String },
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
  userId: { type: String, required: true },
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
  title: { type: String, required: true },
  description: { type: String, required: true },
  startedAt: { type: String, required: true },
  finishedAt: { type: String, required: true },
  isStatus: { type: Boolean, required: true },
  userId: { type: String, required: true },
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
  myForest: [
    {
      treeId: { type: String, required: true },
      areaId: { type: String, required: true },
      treeName: { type: String, required: true },
      achievementRate: { type: Number, required: true },
      branches: [
        {
          name: { type: String },
          leafs: [
            {
              name: { type: String },
              techBranch_id: { type: String },
              techTree_id: { type: String },
              isStatus: { type: Boolean },
            },
          ],
        },
      ],
    },
  ],
  userId: { type: String, required: true },
});

export const Users = mongoose.model("user", UserSchema);
export const UserUrls = mongoose.model("userurl", UserUrlsSchema);
export const UserTodos = mongoose.model("userTodo", UseTodoSchema);
export const UserLeafs = mongoose.model("userLeaf", UserLeafsSchema);
