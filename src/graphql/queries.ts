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
