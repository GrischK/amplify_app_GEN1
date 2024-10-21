/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getDog = /* GraphQL */ `query GetDog($id: ID!) {
  getDog(id: $id) {
    id
    name
    representative
    picture
    friends {
      items {
        id
        friendId
      }
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetDogQueryVariables, APITypes.GetDogQuery>;
export const listDogs = /* GraphQL */ `query ListDogs($filter: ModelDogFilterInput, $limit: Int, $nextToken: String) {
  listDogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      representative
      picture
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListDogsQueryVariables, APITypes.ListDogsQuery>;
export const getDogFriend = /* GraphQL */ `query GetDogFriend($id: ID!) {
  getDogFriend(id: $id) {
    id
    dogId
    friendId
    dog {
      id
      name
      representative
      picture
      createdAt
      updatedAt
      __typename
    }
    friend {
      id
      name
      representative
      picture
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDogFriendQueryVariables,
  APITypes.GetDogFriendQuery
>;
export const listDogFriends = /* GraphQL */ `query ListDogFriends(
  $filter: ModelDogFriendFilterInput
  $limit: Int
  $nextToken: String
) {
  listDogFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      dogId
      friendId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDogFriendsQueryVariables,
  APITypes.ListDogFriendsQuery
>;
export const dogFriendsByDogIdAndFriendId = /* GraphQL */ `query DogFriendsByDogIdAndFriendId(
  $dogId: ID!
  $friendId: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelDogFriendFilterInput
  $limit: Int
  $nextToken: String
) {
  dogFriendsByDogIdAndFriendId(
    dogId: $dogId
    friendId: $friendId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      dogId
      friendId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.DogFriendsByDogIdAndFriendIdQueryVariables,
  APITypes.DogFriendsByDogIdAndFriendIdQuery
>;
export const dogFriendsByFriendIdAndDogId = /* GraphQL */ `query DogFriendsByFriendIdAndDogId(
  $friendId: ID!
  $dogId: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelDogFriendFilterInput
  $limit: Int
  $nextToken: String
) {
  dogFriendsByFriendIdAndDogId(
    friendId: $friendId
    dogId: $dogId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      dogId
      friendId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.DogFriendsByFriendIdAndDogIdQueryVariables,
  APITypes.DogFriendsByFriendIdAndDogIdQuery
>;
