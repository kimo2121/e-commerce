import gql from "graphql-tag";

//Quereis

export const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export const GET_USER_QUERY = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      id
      username
      userImgUrl
      phone
      createdAt
    }
  }
`;

//Mutations

export const UPDATE_USER = gql`
  mutation updateUser(
    $username: String!
    $phone: String!
    $bio: String
    $userImgUrl: String!
  ) {
    updateUser(
      username: $username
      phone: $phone
      bio: $bio
      userImgUrl: $userImgUrl
    ) {
      id
      username
      userImgUrl
      phone
      createdAt
    }
  }
`;
