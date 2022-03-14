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
  query GetPortfolioById($id: String!) {
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

//ユーザ情報(public基本情報)編集
gql`
  mutation UpdateUser($user: UserUpdateInput!) {
    updateUser(user: $user) {
      status
      msg
    }
  }
`;

//言語情報取得
// gql`
//   query GetLanguages {
//     getLanguages(name: "languages") {
//       name
//       data
//     }
//   }
// `;

// ログイン処理
export const LOGIN_QUERY = gql`
  mutation UserLogin($user: UserLoginInput!) {
    userLogin(user: $user) {
      status
      node {
        id
        name
        jobType
        email
        password
        githubURL
      }
    }
  }
`;

// エンジニアリスト全件表示
gql`
  query GetAllUser {
    getAllUser {
      name
      jobType
      email
      password
      githubURL
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
  query GetAllTodoByUser($userId: String!) {
    todos: getAllTodoByUser(userId: $userId) {
      node {
        id
        title
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
