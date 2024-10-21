/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDogInput = {
  id?: string | null,
  name: string,
  representative?: string | null,
  picture?: string | null,
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
  friends?: ModelDogFriendConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDogFriendConnection = {
  __typename: "ModelDogFriendConnection",
  items:  Array<DogFriend | null >,
  nextToken?: string | null,
};

export type DogFriend = {
  __typename: "DogFriend",
  id: string,
  dogId: string,
  friendId: string,
  dog: Dog,
  friend: Dog,
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

export type CreateDogFriendInput = {
  id?: string | null,
  dogId: string,
  friendId: string,
};

export type ModelDogFriendConditionInput = {
  dogId?: ModelIDInput | null,
  friendId?: ModelIDInput | null,
  and?: Array< ModelDogFriendConditionInput | null > | null,
  or?: Array< ModelDogFriendConditionInput | null > | null,
  not?: ModelDogFriendConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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

export type UpdateDogFriendInput = {
  id: string,
  dogId?: string | null,
  friendId?: string | null,
};

export type DeleteDogFriendInput = {
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

export type ModelDogConnection = {
  __typename: "ModelDogConnection",
  items:  Array<Dog | null >,
  nextToken?: string | null,
};

export type ModelDogFriendFilterInput = {
  id?: ModelIDInput | null,
  dogId?: ModelIDInput | null,
  friendId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDogFriendFilterInput | null > | null,
  or?: Array< ModelDogFriendFilterInput | null > | null,
  not?: ModelDogFriendFilterInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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

export type ModelSubscriptionDogFriendFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  dogId?: ModelSubscriptionIDInput | null,
  friendId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDogFriendFilterInput | null > | null,
  or?: Array< ModelSubscriptionDogFriendFilterInput | null > | null,
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
    friends?:  {
      __typename: "ModelDogFriendConnection",
      nextToken?: string | null,
    } | null,
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
    friends?:  {
      __typename: "ModelDogFriendConnection",
      nextToken?: string | null,
    } | null,
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
    friends?:  {
      __typename: "ModelDogFriendConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDogFriendMutationVariables = {
  input: CreateDogFriendInput,
  condition?: ModelDogFriendConditionInput | null,
};

export type CreateDogFriendMutation = {
  createDogFriend?:  {
    __typename: "DogFriend",
    id: string,
    dogId: string,
    friendId: string,
    dog:  {
      __typename: "Dog",
      id: string,
      name: string,
      representative?: string | null,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    friend:  {
      __typename: "Dog",
      id: string,
      name: string,
      representative?: string | null,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDogFriendMutationVariables = {
  input: UpdateDogFriendInput,
  condition?: ModelDogFriendConditionInput | null,
};

export type UpdateDogFriendMutation = {
  updateDogFriend?:  {
    __typename: "DogFriend",
    id: string,
    dogId: string,
    friendId: string,
    dog:  {
      __typename: "Dog",
      id: string,
      name: string,
      representative?: string | null,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    friend:  {
      __typename: "Dog",
      id: string,
      name: string,
      representative?: string | null,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDogFriendMutationVariables = {
  input: DeleteDogFriendInput,
  condition?: ModelDogFriendConditionInput | null,
};

export type DeleteDogFriendMutation = {
  deleteDogFriend?:  {
    __typename: "DogFriend",
    id: string,
    dogId: string,
    friendId: string,
    dog:  {
      __typename: "Dog",
      id: string,
      name: string,
      representative?: string | null,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    friend:  {
      __typename: "Dog",
      id: string,
      name: string,
      representative?: string | null,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
    },
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
    friends?:  {
      __typename: "ModelDogFriendConnection",
      nextToken?: string | null,
    } | null,
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

export type GetDogFriendQueryVariables = {
  id: string,
};

export type GetDogFriendQuery = {
  getDogFriend?:  {
    __typename: "DogFriend",
    id: string,
    dogId: string,
    friendId: string,
    dog:  {
      __typename: "Dog",
      id: string,
      name: string,
      representative?: string | null,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    friend:  {
      __typename: "Dog",
      id: string,
      name: string,
      representative?: string | null,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDogFriendsQueryVariables = {
  filter?: ModelDogFriendFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDogFriendsQuery = {
  listDogFriends?:  {
    __typename: "ModelDogFriendConnection",
    items:  Array< {
      __typename: "DogFriend",
      id: string,
      dogId: string,
      friendId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type DogFriendsByDogIdAndFriendIdQueryVariables = {
  dogId: string,
  friendId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDogFriendFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DogFriendsByDogIdAndFriendIdQuery = {
  dogFriendsByDogIdAndFriendId?:  {
    __typename: "ModelDogFriendConnection",
    items:  Array< {
      __typename: "DogFriend",
      id: string,
      dogId: string,
      friendId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type DogFriendsByFriendIdAndDogIdQueryVariables = {
  friendId: string,
  dogId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDogFriendFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DogFriendsByFriendIdAndDogIdQuery = {
  dogFriendsByFriendIdAndDogId?:  {
    __typename: "ModelDogFriendConnection",
    items:  Array< {
      __typename: "DogFriend",
      id: string,
      dogId: string,
      friendId: string,
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
    friends?:  {
      __typename: "ModelDogFriendConnection",
      nextToken?: string | null,
    } | null,
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
    friends?:  {
      __typename: "ModelDogFriendConnection",
      nextToken?: string | null,
    } | null,
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
    friends?:  {
      __typename: "ModelDogFriendConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDogFriendSubscriptionVariables = {
  filter?: ModelSubscriptionDogFriendFilterInput | null,
};

export type OnCreateDogFriendSubscription = {
  onCreateDogFriend?:  {
    __typename: "DogFriend",
    id: string,
    dogId: string,
    friendId: string,
    dog:  {
      __typename: "Dog",
      id: string,
      name: string,
      representative?: string | null,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    friend:  {
      __typename: "Dog",
      id: string,
      name: string,
      representative?: string | null,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDogFriendSubscriptionVariables = {
  filter?: ModelSubscriptionDogFriendFilterInput | null,
};

export type OnUpdateDogFriendSubscription = {
  onUpdateDogFriend?:  {
    __typename: "DogFriend",
    id: string,
    dogId: string,
    friendId: string,
    dog:  {
      __typename: "Dog",
      id: string,
      name: string,
      representative?: string | null,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    friend:  {
      __typename: "Dog",
      id: string,
      name: string,
      representative?: string | null,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDogFriendSubscriptionVariables = {
  filter?: ModelSubscriptionDogFriendFilterInput | null,
};

export type OnDeleteDogFriendSubscription = {
  onDeleteDogFriend?:  {
    __typename: "DogFriend",
    id: string,
    dogId: string,
    friendId: string,
    dog:  {
      __typename: "Dog",
      id: string,
      name: string,
      representative?: string | null,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    friend:  {
      __typename: "Dog",
      id: string,
      name: string,
      representative?: string | null,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
