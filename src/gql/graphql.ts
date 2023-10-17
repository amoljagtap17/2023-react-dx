/* eslint-disable */
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  _Any: { input: any; output: any; }
  federation__FieldSet: { input: any; output: any; }
  link__Import: { input: any; output: any; }
};

/** create user input */
export type CreateUserInput = {
  /** email of user */
  email: Scalars['String']['input'];
  /** password of user */
  password: Scalars['String']['input'];
};

/** Login object */
export type Login = {
  __typename?: 'Login';
  /** jwt token */
  accessToken: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  login: Login;
  register: Register;
  removeUser: User;
  updateUser: User;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  signInInput: SignInInput;
};


export type MutationRegisterArgs = {
  signUpInput: SignUpInput;
};


export type MutationRemoveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  user: User;
  users: Array<User>;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

/** Register object */
export type Register = {
  __typename?: 'Register';
  /** email of user */
  email: Scalars['String']['output'];
};

export type SignInInput = {
  /** email of user */
  email: Scalars['String']['input'];
  /** password of user */
  password: Scalars['String']['input'];
};

export type SignUpInput = {
  /** email of user */
  email: Scalars['String']['input'];
  /** password of user */
  password: Scalars['String']['input'];
};

export type UpdateUserInput = {
  /** email of user */
  email?: InputMaybe<Scalars['String']['input']>;
  /** password of user */
  password?: InputMaybe<Scalars['String']['input']>;
};

/** User object */
export type User = {
  __typename?: 'User';
  /** Date and time when the object was created */
  createdAt: Scalars['DateTime']['output'];
  /** email of user */
  email: Scalars['String']['output'];
  /** ID of model */
  id: Scalars['ID']['output'];
  /** password of user */
  password: Scalars['String']['output'];
  /** role of user */
  role: UserRole;
  /** Date and time when the object was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

/** allowed roles for user */
export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type _Entity = User;

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
};

export enum Link__Purpose {
  /** `EXECUTION` features provide metadata necessary for operation execution. */
  Execution = 'EXECUTION',
  /** `SECURITY` features provide metadata necessary to securely resolve fields. */
  Security = 'SECURITY'
}

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  _Any: { input: any; output: any; }
  federation__FieldSet: { input: any; output: any; }
  link__Import: { input: any; output: any; }
};

/** create user input */
export type CreateUserInput = {
  /** email of user */
  email: Scalars['String']['input'];
  /** password of user */
  password: Scalars['String']['input'];
};

/** Login object */
export type Login = {
  __typename?: 'Login';
  /** jwt token */
  accessToken: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  login: Login;
  register: Register;
  removeUser: User;
  updateUser: User;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  signInInput: SignInInput;
};


export type MutationRegisterArgs = {
  signUpInput: SignUpInput;
};


export type MutationRemoveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  user: User;
  users: Array<User>;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

/** Register object */
export type Register = {
  __typename?: 'Register';
  /** email of user */
  email: Scalars['String']['output'];
};

export type SignInInput = {
  /** email of user */
  email: Scalars['String']['input'];
  /** password of user */
  password: Scalars['String']['input'];
};

export type SignUpInput = {
  /** email of user */
  email: Scalars['String']['input'];
  /** password of user */
  password: Scalars['String']['input'];
};

export type UpdateUserInput = {
  /** email of user */
  email?: InputMaybe<Scalars['String']['input']>;
  /** password of user */
  password?: InputMaybe<Scalars['String']['input']>;
};

/** User object */
export type User = {
  __typename?: 'User';
  /** Date and time when the object was created */
  createdAt: Scalars['DateTime']['output'];
  /** email of user */
  email: Scalars['String']['output'];
  /** ID of model */
  id: Scalars['ID']['output'];
  /** password of user */
  password: Scalars['String']['output'];
  /** role of user */
  role: UserRole;
  /** Date and time when the object was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

/** allowed roles for user */
export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type _Entity = User;

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
};

export enum Link__Purpose {
  /** `EXECUTION` features provide metadata necessary for operation execution. */
  Execution = 'EXECUTION',
  /** `SECURITY` features provide metadata necessary to securely resolve fields. */
  Security = 'SECURITY'
}



export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;