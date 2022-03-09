import { gql } from "@apollo/client";

//ユーザ情報取得.
gql`
  query GetUserById($id: String!) {
    user: getUserById(_id: $id) {
      name
      jobType
      githubURL
      userUrls {
        user_urls {
          url
          urlName
        }
      }
      portfolio {
        title
        description
        img
        portfolioURL
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
gql`
  query GetLanguages {
    getLanguages(name: "languages") {
      name
      data
    }
  }
`;

// ログイン処理
export const LOGIN_QUERY = gql`
  mutation UserLogin($user: UserLoginInput!) {
    userLogin(user: $user) {
      status
      node {
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

// Todoリストの取得
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

// Todo一件取得
gql`
  query GetTodoById($todoId: String) {
    todo: getTodoById(todoId: $todoId) {
      id
      title
      description
      startedAt
      finishedAt
      isStatus
    }
  }
`;
