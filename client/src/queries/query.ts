import { gql } from "@apollo/client";

//ユーザ情報取得.
gql`
  query GetUserById($id: String!) {
    user: getUserById(_id: $id) {
      id
      name
      jobType
      githubURL
      userUrls {
        user_urls {
          urlName
          url
        }
      }
    }
  }
`;

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
