/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDogInput = {
  id?: string | null,
  name: string,
  representative?: string | null,
  file?: string | null,
};

export type ModelDogConditionInput = {
  name?: ModelStringInput | null,
  representative?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  and?: Array< ModelDogConditionInput | null > | null,
  or?: Array< ModelDogConditionInput | null > | null,
  not?: ModelDogConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Dog = {
  __typename: "Dog",
  id: string,
  name: string,
  representative?: string | null,
  picture?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDogInput = {
  id: string,
  name?: string | null,
  representative?: string | null,
  picture?: string | null,
};

export type DeleteDogInput = {
  id: string,
};

export type ModelDogFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  representative?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDogFilterInput | null > | null,
  or?: Array< ModelDogFilterInput | null > | null,
  not?: ModelDogFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelDogConnection = {
  __typename: "ModelDogConnection",
  items:  Array<Dog | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionDogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  representative?: ModelSubscriptionStringInput | null,
  picture?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDogFilterInput | null > | null,
  or?: Array< ModelSubscriptionDogFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateDogMutationVariables = {
  input: CreateDogInput,
  condition?: ModelDogConditionInput | null,
};

export type CreateDogMutation = {
  createDog?:  {
    __typename: "Dog",
    id: string,
    name: string,
    representative?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDogMutationVariables = {
  input: UpdateDogInput,
  condition?: ModelDogConditionInput | null,
};

export type UpdateDogMutation = {
  updateDog?:  {
    __typename: "Dog",
    id: string,
    name: string,
    representative?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDogMutationVariables = {
  input: DeleteDogInput,
  condition?: ModelDogConditionInput | null,
};

export type DeleteDogMutation = {
  deleteDog?:  {
    __typename: "Dog",
    id: string,
    name: string,
    representative?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetDogQueryVariables = {
  id: string,
};

export type GetDogQuery = {
  getDog?:  {
    __typename: "Dog",
    id: string,
    name: string,
    representative?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDogsQueryVariables = {
  filter?: ModelDogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDogsQuery = {
  listDogs?:  {
    __typename: "ModelDogConnection",
    items:  Array< {
      __typename: "Dog",
      id: string,
      name: string,
      representative?: string | null,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDogSubscriptionVariables = {
  filter?: ModelSubscriptionDogFilterInput | null,
};

export type OnCreateDogSubscription = {
  onCreateDog?:  {
    __typename: "Dog",
    id: string,
    name: string,
    representative?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDogSubscriptionVariables = {
  filter?: ModelSubscriptionDogFilterInput | null,
};

export type OnUpdateDogSubscription = {
  onUpdateDog?:  {
    __typename: "Dog",
    id: string,
    name: string,
    representative?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDogSubscriptionVariables = {
  filter?: ModelSubscriptionDogFilterInput | null,
};

export type OnDeleteDogSubscription = {
  onDeleteDog?:  {
    __typename: "Dog",
    id: string,
    name: string,
    representative?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
