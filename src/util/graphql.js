import gql from "graphql-tag";

//Quereis

<<<<<<< HEAD
export const GET_ORDER_QUERY = gql`
  query getOrder($orderId: ID!) {
    getOrder(orderId: $orderId) {
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
  {
    getOeders {
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

=======
>>>>>>> 8afad4c7bdae8f19a965980e003bde751923118a
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
<<<<<<< HEAD
      email
      gender
      phone
      brithDate
      Preference_categorie
      address
      createdAt
    }
  }
`;
export const GET_ORDER_QUERY = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      id
      username
      email
      gender
      phone
      brithDate
      Preference_categorie
      address
=======
      userImgUrl
      phone
>>>>>>> 8afad4c7bdae8f19a965980e003bde751923118a
      createdAt
    }
  }
`;

//Mutations

export const UPDATE_USER = gql`
  mutation updateUser(
<<<<<<< HEAD
    $username: String
    $email: String
    $gender: String
    $phone: String
    $brithDate: String
    $Preference_categorie: [String]
    $address: [AddressInput]
  ) {
    updateUser(
      username: $username
      email: $email
      gender: $gender
      phone: $phone
      brithDate: $brithDate
      Preference_categorie: $Preference_categorie
      address: $address
    ) {
      username
      email
      gender
      phone
      brithDate
      Preference_categorie
      address
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation createOrder(
    $category: String!
    $subcategory: String!
    $name: String!
    $raw_price: String!
    $current_price: String!
    $currency: String!
    $discount: String!
    $FirstName: String!
    $LastName: String!
    $State: String!
    $City: String!
    $Address: String!
    $Address_2: String!
    $postal_code: String!
    $Phone: String!
  ) {
    updatePlayGround(
      orderInput: {
        items: [
          {
            category: $category
            subcategory: $subcategory
            name: $name
            raw_price: $raw_price
            current_price: $current_price
            currency: $currency
            discount: $discount
          }
        ]
        address: {
          FirstName: $FirstName
          LastName: $LastName
          State: $State
          City: $City
          Address: $Address
          Address_2: $Address_2
          postal_code: $postal_code
          Phone: $Phone
        }
      }

      playgroundId: $playgroundId
    ) {
      id
      owner
      ownerId
      ownerPhone
      ownerImgUrl
      ownerCreatedAt
      name
      city
      location
      price
      contactNumber
      amenities
      avaliable_hours_start
      avaliable_hours_end
      playground_Images
=======
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
>>>>>>> 8afad4c7bdae8f19a965980e003bde751923118a
      createdAt
    }
  }
`;
