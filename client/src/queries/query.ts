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
  query GetAllStudyStackByUserId($userId: String) {
    getAllStudyStackByUserId(userId: $userId) {
      content
      timeStack
      createdAt
      skillTagId
      userId
    }
  }
`;

//学習リスト１件取得
gql`
  query GetStudyStackByStudyStackId($studyStackId: String) {
    getStudyStackByStudyStackId(studyStackId: $studyStackId) {
      content
      timeStack
      createdAt
      skillTagId
      userId
    }
  }
`;
