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
