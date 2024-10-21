/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createDog = /* GraphQL */ `mutation CreateDog(
  $input: CreateDogInput!
  $condition: ModelDogConditionInput
) {
  createDog(input: $input, condition: $condition) {
    id
    name
    representative
    picture
    friends {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDogMutationVariables,
  APITypes.CreateDogMutation
>;
export const updateDog = /* GraphQL */ `mutation UpdateDog(
  $input: UpdateDogInput!
  $condition: ModelDogConditionInput
) {
  updateDog(input: $input, condition: $condition) {
    id
    name
    representative
    picture
    friends {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDogMutationVariables,
  APITypes.UpdateDogMutation
>;
export const deleteDog = /* GraphQL */ `mutation DeleteDog(
  $input: DeleteDogInput!
  $condition: ModelDogConditionInput
) {
  deleteDog(input: $input, condition: $condition) {
    id
    name
    representative
    picture
    friends {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDogMutationVariables,
  APITypes.DeleteDogMutation
>;
export const createDogFriend = /* GraphQL */ `mutation CreateDogFriend(
  $input: CreateDogFriendInput!
  $condition: ModelDogFriendConditionInput
) {
  createDogFriend(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDogFriendMutationVariables,
  APITypes.CreateDogFriendMutation
>;
export const updateDogFriend = /* GraphQL */ `mutation UpdateDogFriend(
  $input: UpdateDogFriendInput!
  $condition: ModelDogFriendConditionInput
) {
  updateDogFriend(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDogFriendMutationVariables,
  APITypes.UpdateDogFriendMutation
>;
export const deleteDogFriend = /* GraphQL */ `mutation DeleteDogFriend(
  $input: DeleteDogFriendInput!
  $condition: ModelDogFriendConditionInput
) {
  deleteDogFriend(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDogFriendMutationVariables,
  APITypes.DeleteDogFriendMutation
>;
