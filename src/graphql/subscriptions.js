/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      text
      userID
      chatroomID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      text
      userID
      chatroomID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      text
      userID
      chatroomID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateChatroom = /* GraphQL */ `
  subscription OnCreateChatroom($filter: ModelSubscriptionChatroomFilterInput) {
    onCreateChatroom(filter: $filter) {
      id
      Messages {
        items {
          id
          text
          userID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      users {
        items {
          id
          chatroomId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      LastMessage {
        id
        text
        userID
        chatroomID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatroomLastMessageId
      __typename
    }
  }
`;
export const onUpdateChatroom = /* GraphQL */ `
  subscription OnUpdateChatroom($filter: ModelSubscriptionChatroomFilterInput) {
    onUpdateChatroom(filter: $filter) {
      id
      Messages {
        items {
          id
          text
          userID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      users {
        items {
          id
          chatroomId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      LastMessage {
        id
        text
        userID
        chatroomID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatroomLastMessageId
      __typename
    }
  }
`;
export const onDeleteChatroom = /* GraphQL */ `
  subscription OnDeleteChatroom($filter: ModelSubscriptionChatroomFilterInput) {
    onDeleteChatroom(filter: $filter) {
      id
      Messages {
        items {
          id
          text
          userID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      users {
        items {
          id
          chatroomId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      LastMessage {
        id
        text
        userID
        chatroomID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatroomLastMessageId
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      status
      image
      Messages {
        items {
          id
          text
          userID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Chatrooms {
        items {
          id
          chatroomId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      status
      image
      Messages {
        items {
          id
          text
          userID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Chatrooms {
        items {
          id
          chatroomId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      status
      image
      Messages {
        items {
          id
          text
          userID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Chatrooms {
        items {
          id
          chatroomId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateUserChatroom = /* GraphQL */ `
  subscription OnCreateUserChatroom(
    $filter: ModelSubscriptionUserChatroomFilterInput
  ) {
    onCreateUserChatroom(filter: $filter) {
      id
      chatroomId
      userId
      chatroom {
        id
        Messages {
          nextToken
          startedAt
          __typename
        }
        users {
          nextToken
          startedAt
          __typename
        }
        LastMessage {
          id
          text
          userID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatroomLastMessageId
        __typename
      }
      user {
        id
        name
        status
        image
        Messages {
          nextToken
          startedAt
          __typename
        }
        Chatrooms {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateUserChatroom = /* GraphQL */ `
  subscription OnUpdateUserChatroom(
    $filter: ModelSubscriptionUserChatroomFilterInput
  ) {
    onUpdateUserChatroom(filter: $filter) {
      id
      chatroomId
      userId
      chatroom {
        id
        Messages {
          nextToken
          startedAt
          __typename
        }
        users {
          nextToken
          startedAt
          __typename
        }
        LastMessage {
          id
          text
          userID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatroomLastMessageId
        __typename
      }
      user {
        id
        name
        status
        image
        Messages {
          nextToken
          startedAt
          __typename
        }
        Chatrooms {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteUserChatroom = /* GraphQL */ `
  subscription OnDeleteUserChatroom(
    $filter: ModelSubscriptionUserChatroomFilterInput
  ) {
    onDeleteUserChatroom(filter: $filter) {
      id
      chatroomId
      userId
      chatroom {
        id
        Messages {
          nextToken
          startedAt
          __typename
        }
        users {
          nextToken
          startedAt
          __typename
        }
        LastMessage {
          id
          text
          userID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatroomLastMessageId
        __typename
      }
      user {
        id
        name
        status
        image
        Messages {
          nextToken
          startedAt
          __typename
        }
        Chatrooms {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
