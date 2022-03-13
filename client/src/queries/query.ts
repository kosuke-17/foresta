import { gql } from "@apollo/client";

//ユーザ情報取得.
gql`
  query GetUserById($id: String!) {
    user: getUserById(_id: $id) {
      node {
        name
        jobType
        spreadSheetID
        githubURL
        portfolio {
          title
          description
          img
          portfolioURL
        }
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

// DBに保存されている技術を全件取得
gql`
  query GetAllTechArea {
    getAllTechArea {
      id
      name
      techTrees {
        id
        name
        techArea_id
        techBranches {
          id
          name
          techTree_id
          techLeafs {
            id
            name
            techBranch_id
          }
        }
      }
    }
  }
`;

// 特定のユーザーが保持している技術を全件取得
gql`
  query GetUserLeafsById($userId: String!, $areaId: String!) {
    getUserLeafsById(userId: $userId, areaId: $areaId) {
      status
      node {
        id
        myForest {
          areaId
          treeId
          treeName
          achievementRate
          branches {
            name
            leafs {
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
