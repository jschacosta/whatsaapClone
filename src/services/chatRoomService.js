import { API, Auth, graphqlOperation } from "aws-amplify";
export const getCommonChatRoomWithUser = async (userID) => {
  const authUser = await Auth.currentAuthenticatedUser();
  //get all chatRooms user1Id
  const response = await API.graphql(
    graphqlOperation(listChatRooms, { id: authUser.attributes.sub })
  );
  const chatRooms = response.data?.getUser?.Chatrooms?.items || [] ;
  console.log('elChat',chatRooms)
  const chatRoom=chatRooms.find((chatRoomItem) =>{
    console.log('item',chatRoomItem)
      return chatRoomItem.chatroom.users.items.some(
          (userItem) => userItem.user.id == userID
          )
    });
return chatRoom
  //get all chatRooms user2Id
  //remove chat with more than 2 users
  //get the common chat rooms
};

export const listChatRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      Chatrooms {
        items {
          chatroom {
            id
            users {
              items {
                user {
                  id
                  name
                  image
                }
              }
            }
          }
        }
      }
    }
  }
`;
