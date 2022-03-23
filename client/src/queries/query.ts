import { gql } from "@apollo/client";

//ユーザ情報取得.
gql`
  query GetUserById($id: String!) {
    user: getUserById(_id: $id) {
      status
      msg
      node {
        name
        jobType
        spreadSheetID
        githubURL
      }
    }
  }
`;

//ユーザ情報:制作物取得.
gql`
  query GetUserPortfolioById($id: String!) {
    portfolios: getUserById(_id: $id) {
      status
      msg
      node {
        portfolio {
          id
          title
          description
          img
          portfolioURL
          skills
          specSheetId
        }
      }
    }
  }
`;

//ユーザ情報:URL取得.
gql`
  query GetUrlById($id: String!) {
    urls: getUserById(_id: $id) {
      status
      msg
      node {
        userUrls {
          user_urls {
            urlName
            url
          }
        }
      }
    }
  }
`;

//ユーザ情報:スペックシート基本情報取得
gql`
  query GetSheetByUserId($userId: String!) {
    user: getSheetByUserId(userId: $userId) {
      status
      msg
      node {
        userInfo {
          id
          stuffID
          age
          gender
          nearestStation
          startWorkDate
          seExpAmount
          pgExpAmount
          itExpAmount
          specSheetId
        }
      }
    }
  }
`;

//ユーザ情報:スペックシート自己PR取得
gql`
  query GetSheetPrByUserId($userId: String!) {
    pr: getSheetByUserId(userId: $userId) {
      status
      msg
      node {
        id
        selfIntro
      }
    }
  }
`;

//ユーザ情報:スペックシートスキル要約取得
gql`
  query GetSheetSkillByUserId($userId: String!) {
    skills: getSheetByUserId(userId: $userId) {
      status
      msg
      node {
        techInfo {
          id
          operationEnvs
          languages
          frameworks
          libraries
          otherTools
          devRoles
          specSheetId
        }
      }
    }
  }
`;

//ユーザ情報:スペックシートその他の情報取得
gql`
  query GetSheetOtherByUserId($userId: String!) {
    other: getSheetByUserId(userId: $userId) {
      status
      msg
      node {
        id
        studyOnOwnTime
        certification
        prevJobs {
          content
        }
      }
    }
  }
`;

//ユーザ情報:スペックシート開発経験取得
gql`
  query GetSheetProjectByUserId($userId: String!) {
    projects: getSheetByUserId(userId: $userId) {
      status
      msg
      node {
        project {
          id
          name
          startedAt
          finishedAt
          roleSharing
          memberCount
          content
          operationEnvs
          languages
          frameworks
          libraries
          otherTools
          devRoles
          specSheetId
        }
      }
    }
  }
`;

//ユーザ情報:スペックシートIDのみ取得.
gql`
  query GetSpreadSheetID($id: String!) {
    getUserById(_id: $id) {
      status
      msg
      node {
        spreadSheetID
      }
    }
  }
`;

//ユーザ情報:開発経験名前のみ取得.
gql`
  query GetPjNameByUserId($userId: String!) {
    pj: getSheetByUserId(userId: $userId) {
      status
      msg
      node {
        project {
          name
        }
      }
    }
  }
`;

//ユーザ情報:自己PR取得+スペックシートその他情報同時取得.
gql`
  query GetPrAndSheetByUserId($userId: String!) {
    pr: getSheetByUserId(userId: $userId) {
      status
      msg
      node {
        id
        selfIntro
      }
    }
    other: getSheetByUserId(userId: $userId) {
      status
      msg
      node {
        id
        studyOnOwnTime
        certification
        prevJobs {
          content
        }
      }
    }
  }
`;

// スペックシートその他情報更新
gql`
  mutation UpdateSpecSheet($specSheet: SpecSheetUpdateInput!) {
    updateSpecSheet(specSheet: $specSheet) {
      status
      msg
    }
  }
`;

//ユーザ情報(public基本情報)編集
gql`
  mutation UpdateUser($user: UserUpdateInput!) {
    updateUser(user: $user) {
      status
      msg
    }
  }
`;

//ユーザ情報:制作物新規追加
gql`
  mutation CreatePortfolio($portfolio: PortfolioCreateInput!) {
    createPortfolio(portfolio: $portfolio) {
      status
      msg
    }
  }
`;

//ユーザ情報:制作物編集
gql`
  mutation UpdatePortfolio($portfolio: PortfolioUpdateInput!) {
    updatePortfolio(portfolio: $portfolio) {
      status
      msg
      node {
        id
        title
        description
        img
        portfolioURL
        skills
        userId
        specSheetId
      }
    }
  }
`;

//ユーザ情報:制作物削除
gql`
  mutation RemovePortfolio($portfolioId: String!) {
    removePortfolio(portfolioId: $portfolioId) {
      status
      msg
    }
  }
`;

//ユーザ情報:スペックシート基本情報更新
gql`
  mutation UpdateSpecUserInfo($specUserInfo: SpecUserInfoUpdateInput!) {
    updateSpecUserInfo(specUserInfo: $specUserInfo) {
      status
      msg
    }
  }
`;

//ユーザ情報:スペックシート開発経験更新
gql`
  mutation UpdateSpecProject($specProject: SpecProjectUpdateInput!) {
    updateSpecProject(specProject: $specProject) {
      status
      msg
    }
  }
`;

//ユーザ情報:URL編集用取得
gql`
  query GetUserUrlById($id: String!) {
    urls: getUserById(_id: $id) {
      node {
        userUrls {
          user_urls {
            urlName
            url
            id
          }
          id
        }
      }
    }
  }
`;

//ユーザ情報:スペックシートスキル要約更新
gql`
  mutation UpdateSpecTechInfo($specTechInfo: SpecTechInfoUpdateInput!) {
    updateSpecTechInfo(specTechInfo: $specTechInfo) {
      status
      msg
    }
  }
`;

//ユーザ情報:URL追加
gql`
  mutation AddUserUrls($urlData: UserUrlsAddInput!) {
    addUserUrls(urlData: $urlData) {
      status
      msg
    }
  }
`;

//セレクトボックス用
gql`
  query GetAllSkill {
    skills: getAllSkill {
      id
      name
      data
    }
  }
`;

//ユーザ情報:URL削除
gql`
  mutation RemoveUserUrls($urlData: UserUrlsRemoveInput!) {
    removeUserUrls(urlData: $urlData) {
      status
      msg
    }
  }
`;

//ユーザ情報:スプレッドシートに全情報出力
gql`
  mutation UpdateSpreadSheet($userId: String!) {
    updateSpreadUserInfo(userId: $userId) {
      status
      msg
    }
    updateSpeadSelfPR(userId: $userId) {
      status
      msg
    }
    updateSpreadPortfolioUrl(userId: $userId) {
      status
      msg
    }
    updateSpreadTechInfo(userId: $userId) {
      status
      msg
    }
    pj1: updateSpreadProject(userId: $userId, projectIndex: 0) {
      status
      msg
    }
    pj2: updateSpreadProject(userId: $userId, projectIndex: 1) {
      status
      msg
    }
    pj3: updateSpreadProject(userId: $userId, projectIndex: 2) {
      status
      msg
    }
  }
`;

//ユーザ情報:スプレッドシートに基本情報書き出し
gql`
  mutation UpdateSpreadUserInfo($userId: String!) {
    updateSpreadUserInfo(userId: $userId) {
      status
      msg
    }
  }
`;

//ユーザ情報:スプレッドシートに自己PR書き出し
gql`
  mutation UpdateSpeadSelfPR($userId: String!) {
    updateSpeadSelfPR(userId: $userId) {
      status
      msg
    }
  }
`;

//ユーザ情報:スプレッドシートにURL書き出し
gql`
  mutation UpdateSpreadPortfolioUrl($userId: String!) {
    updateSpreadPortfolioUrl(userId: $userId) {
      status
      msg
    }
  }
`;

//ユーザ情報:スプレッドシートにスキル要約書き出し
gql`
  mutation UpdateSpreadTechInfo($userId: String!) {
    updateSpreadTechInfo(userId: $userId) {
      status
      msg
    }
  }
`;

//ユーザ情報:スプレッドシートに開発経験書き出し
gql`
  mutation UpdateSpreadProject($userId: String!, $projectIndex: Int!) {
    updateSpreadProject(userId: $userId, projectIndex: $projectIndex) {
      status
      msg
    }
  }
`;

// 手動ログイン処理
gql`
  mutation UserLogin($user: UserLoginInput!) {
    userLogin(user: $user) {
      status
      msg
      node {
        token
      }
    }
  }
`;

// 自動ログイン処理
gql`
  mutation userAutoLogin($userToken: String!) {
    userAutoLogin(userToken: $userToken) {
      status
      msg
    }
  }
`;

// 技術エリアを全件取得
gql`
  query GetAllTechArea {
    getAllTechArea {
      id
      name
    }
  }
`;

// 特定のユーザーが保持している技術を全件取得
gql`
  query GetUserLeafsById($userToken: String!) {
    getUserLeafsById(userToken: $userToken) {
      status
      msg
      node {
        id
        userId
        myForest {
          id
          treeId
          areaId
          treeName
          achievementRate
          color
          branches {
            id
            name
            leafs {
              id
              name
              techBranch_id
              techTree_id
              isStatus
            }
          }
        }
      }
    }
  }
`;

// 技術ツリーのステータスを変更
gql`
  mutation ChangeLeafStatus($techLeafInfo: UserTechLeafUpdateInput!) {
    changeLeafStatus(techLeafInfo: $techLeafInfo) {
      status
      msg
    }
  }
`;

// エンジニアリスト全件表示
gql`
  query GetAllUser {
    getAllUser {
      id
      name
      jobType
      email
      password
      spreadSheetID
      githubURL
      token
    }
  }
`;

//学習リスト全件表示
gql`
  query GetAllStudyStack($userId: String!) {
    getAllStudyStack(userId: $userId) {
      status
      node {
        id
        content
        timeStack
        createdAt
        skillTagId
        userId
      }
      msg
    }
  }
`;

//学習リスト１件取得
gql`
  query GetStudyStackById($studyStackId: String!) {
    getStudyStackById(studyStackId: $studyStackId) {
      status
      node {
        id
        content
        timeStack
        createdAt
        skillTagId
        userId
      }
    }
  }
`;
//学習を記録する
gql`
  mutation AddStudyStack($stack: StudyStackAddInput!) {
    addStudyStack(stack: $stack) {
      status
      node {
        id
        content
        timeStack
        createdAt
        skillTagId
        userId
      }
    }
  }
`;

//学習記録を編集する
gql`
  mutation UpdateStudyStack($stack: StudyStackUpdateInput!) {
    updateStudyStack(stack: $stack) {
      status
      node {
        id
        content
        timeStack
        createdAt
        skillTagId
        userId
      }
    }
  }
`;

//学習記録を削除する
gql`
  mutation RemoveStudyStack($studyStackId: String!) {
    removeStudyStack(studyStackId: $studyStackId) {
      status
    }
  }
`;

// Todoリストの取得
gql`
  query GetAllTodoByUser($userToken: String!) {
    todos: getAllTodoByUser(userToken: $userToken) {
      node {
        id
        title
        description
        startedAt
        finishedAt
        isStatus
      }
    }
  }
`;

// Todo一件取得
gql`
  query GetTodoById($todoId: String!) {
    todo: getTodoById(todoId: $todoId) {
      node {
        id
        title
        description
        startedAt
        finishedAt
        isStatus
      }
    }
  }
`;

// Todoを更新する
gql`
  mutation updateTodo($todo: TodoUpdateInput!) {
    updateTodo(todo: $todo) {
      status
      node {
        id
        title
        description
        startedAt
        finishedAt
        isStatus
      }
    }
  }
`;

// Todoのステータスを変更する
gql`
  mutation ChangeTodoStatus($todoId: String!) {
    changeTodoStatus(todoId: $todoId) {
      status
      node {
        isStatus
        title
      }
    }
  }
`;

// Todoを追加する
gql`
  mutation AddTodo($todo: TodoAddInput!) {
    addTodo(todo: $todo) {
      status
      node {
        id
        title
        description
        startedAt
        finishedAt
        isStatus
      }
    }
  }
`;

// Todoを削除する
gql`
  mutation RemoveTodo($todoId: String!) {
    removeTodo(todoId: $todoId) {
      status
    }
  }
`;
