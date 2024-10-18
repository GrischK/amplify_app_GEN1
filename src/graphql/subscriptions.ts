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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDogSubscriptionVariables,
  APITypes.OnDeleteDogSubscription
>;
