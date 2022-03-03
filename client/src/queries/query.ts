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
