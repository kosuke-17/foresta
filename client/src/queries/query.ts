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
/**
 * ユーザ情報取得.
 */
gql`
  query GetUserById($id: String!) {
    getUserById(_id: $id) {
      id
      name
      jobType
      email
      password
      githubURL
    }
  }
`;
