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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDogMutationVariables,
  APITypes.DeleteDogMutation
>;
