// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, Chatroom, User, UserChatroom } = initSchema(schema);

export {
  Message,
  Chatroom,
  User,
  UserChatroom
};