/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateDog = /* GraphQL */ `subscription OnCreateDog($filter: ModelSubscriptionDogFilterInput) {
  onCreateDog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDogSubscriptionVariables,
  APITypes.OnCreateDogSubscription
>;
export const onUpdateDog = /* GraphQL */ `subscription OnUpdateDog($filter: ModelSubscriptionDogFilterInput) {
  onUpdateDog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDogSubscriptionVariables,
  APITypes.OnUpdateDogSubscription
>;
export const onDeleteDog = /* GraphQL */ `subscription OnDeleteDog($filter: ModelSubscriptionDogFilterInput) {
  onDeleteDog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDogSubscriptionVariables,
  APITypes.OnDeleteDogSubscription
>;
export const onCreateDogFriend = /* GraphQL */ `subscription OnCreateDogFriend($filter: ModelSubscriptionDogFriendFilterInput) {
  onCreateDogFriend(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDogFriendSubscriptionVariables,
  APITypes.OnCreateDogFriendSubscription
>;
export const onUpdateDogFriend = /* GraphQL */ `subscription OnUpdateDogFriend($filter: ModelSubscriptionDogFriendFilterInput) {
  onUpdateDogFriend(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDogFriendSubscriptionVariables,
  APITypes.OnUpdateDogFriendSubscription
>;
export const onDeleteDogFriend = /* GraphQL */ `subscription OnDeleteDogFriend($filter: ModelSubscriptionDogFriendFilterInput) {
  onDeleteDogFriend(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDogFriendSubscriptionVariables,
  APITypes.OnDeleteDogFriendSubscription
>;
