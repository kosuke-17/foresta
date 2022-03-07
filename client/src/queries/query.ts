import { gql } from "@apollo/client";

/**
 * 見本.
 */
// gql`
//   query todos {
//     getAllTodo {
//       id
//       title
//       finish
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
      id
      name
      jobType
    }
  }
`;

//学習リスト全件表示
gql`
  query GetAllStudyStack($userId: String) {
    getAllStudyStack(userId: $userId) {
      id
      timeStack
      content
      createdAt
      skillTagId
      userId
    }
  }
`;

//学習リスト１件取得
gql`
  query GetStudyStackById($studyStackId: String) {
    getStudyStackById(studyStackId: $studyStackId) {
      id
      content
      timeStack
      createdAt
      skillTagId
      userId
    }
  }
`;

gql`
  query GetAllTodoByUser($userId: String) {
    todos: getAllTodoByUser(userId: $userId) {
      id
      title
      startedAt
      finishedAt
      isStatus
    }
  }
`;
