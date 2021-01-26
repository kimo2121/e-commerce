import gql from "graphql-tag";

//Quereis

export const GET_ORDER_QUERY = gql`
  query getOrder($orderId: ID!, $userId: ID!) {
    getOrder(orderId: $orderId, userId: $userId) {
      id
      items {
        category
        subcategory
        name
        current_price
        raw_price
        currency
        discount
        likes_count
        is_new
        brand
        brand_url
        codCountry
        variation_0_color
        variation_1_color
        variation_0_thumbnail
        variation_0_image
        variation_1_thumbnail
        variation_1_image
        image_url
        url
        id
        model
        quantity
      }
      address {
        FirstName
        LastName
        State
        City
        Address
        Address_2
        postal_code
        Phone
      }
      createdAt
    }
  }
`;

export const GET_ORDERS_QUERY = gql`
  query getOrders($userId: ID!) {
    getOrders(userId: $userId) {
      id
      items {
        category
        subcategory
        name
        current_price
        raw_price
        currency
        discount
        likes_count
        is_new
        brand
        brand_url
        codCountry
        variation_0_color
        variation_1_color
        variation_0_thumbnail
        variation_0_image
        variation_1_thumbnail
        variation_1_image
        image_url
        url
        id
        model
        quantity
      }
      address {
        FirstName
        LastName
        State
        Country
        City
        Address
        Address_2
        postal_code
        Phone
        defaultAddrses
      }
      total
      createdAt
    }
  }
`;

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
      email
      gender
      phone
      birthDate
      Preference_categorie {
        women
        bags
        beauty
        accessories
        kids
        men
        shoes
        jewelry
        home
      }
      address {
        FirstName
        LastName
        Country
        State
        City
        Address
        Address_2
        postal_code
        Phone
        defaultAddrses
      }
      createdAt
    }
  }
`;

//Mutations

export const UPDATE_USER = gql`
  mutation updateUser(
    $username: String
    $email: String
    $gender: String
    $phone: String
    $birthDate: String
    $Preference_categorie: Preference_categorieInput
    $address: AddressInput
  ) {
    updateUser(
      username: $username
      email: $email
      gender: $gender
      phone: $phone
      birthDate: $birthDate
      Preference_categorie: $Preference_categorie
      address: $address
    ) {
      username
      email
      gender
      phone
      birthDate
      address {
        FirstName
        LastName
        State
        Country
        City
        Address
        Address_2
        postal_code
        Phone
        defaultAddrses
      }
      Preference_categorie {
        women
        bags
        beauty
        accessories
        kids
        men
        shoes
        jewelry
        home
      }
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation createOrder(
    $items: [ProductInput!]!
    $address: AddressInput!
    $total: Int!
  ) {
    createOrder(
      orderInput: { items: $items, address: $address, total: $total }
    ) {
      id
      items {
        category
        subcategory
        name
        current_price
        raw_price
        currency
        discount
        likes_count
        is_new
        brand
        brand_url
        codCountry
        variation_0_color
        variation_1_color
        variation_0_thumbnail
        variation_0_image
        variation_1_thumbnail
        variation_1_image
        image_url
        url
        id
        model
        quantity
      }
      address {
        FirstName
        LastName
        State
        Country
        City
        Address
        Address_2
        postal_code
        Phone
        defaultAddrses
      }
      total
      createdAt
    }
  }
`;

export const CREATE_PAYMENT = gql`
  mutation createPayment($tokenId: ID!, $amount: Int!) {
    createPayment(tokenId: $tokenId, amount: $amount)
  }
`;
