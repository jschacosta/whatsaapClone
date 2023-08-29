import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly userID: string;
  readonly chatroomID: string;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly userID: string;
  readonly chatroomID: string;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerChatroom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chatroom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Messages?: (Message | null)[] | null;
  readonly users?: (UserChatroom | null)[] | null;
  readonly LastMessage?: Message | null;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatroomLastMessageId?: string | null;
}

type LazyChatroom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chatroom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Messages: AsyncCollection<Message>;
  readonly users: AsyncCollection<UserChatroom>;
  readonly LastMessage: AsyncItem<Message | undefined>;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatroomLastMessageId?: string | null;
}

export declare type Chatroom = LazyLoading extends LazyLoadingDisabled ? EagerChatroom : LazyChatroom

export declare const Chatroom: (new (init: ModelInit<Chatroom>) => Chatroom) & {
  copyOf(source: Chatroom, mutator: (draft: MutableModel<Chatroom>) => MutableModel<Chatroom> | void): Chatroom;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly status?: string | null;
  readonly image?: string | null;
  readonly Messages?: (Message | null)[] | null;
  readonly Chatrooms?: (UserChatroom | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly status?: string | null;
  readonly image?: string | null;
  readonly Messages: AsyncCollection<Message>;
  readonly Chatrooms: AsyncCollection<UserChatroom>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerUserChatroom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserChatroom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly chatroomId?: string | null;
  readonly userId?: string | null;
  readonly chatroom: Chatroom;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserChatroom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserChatroom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly chatroomId?: string | null;
  readonly userId?: string | null;
  readonly chatroom: AsyncItem<Chatroom>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserChatroom = LazyLoading extends LazyLoadingDisabled ? EagerUserChatroom : LazyUserChatroom

export declare const UserChatroom: (new (init: ModelInit<UserChatroom>) => UserChatroom) & {
  copyOf(source: UserChatroom, mutator: (draft: MutableModel<UserChatroom>) => MutableModel<UserChatroom> | void): UserChatroom;
}