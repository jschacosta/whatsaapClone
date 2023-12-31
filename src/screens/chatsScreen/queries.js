export const listChatRooms = /* GraphQL */ `
    query GetUser($id: ID!) {
    getUser(id: $id) {
        name
        id
        Chatrooms {
        items {
            chatroom {
            users {
                items {
                user {
                    id
                    name
                    image
                }
                }
            }
            createdAt
            updatedAt
            id
            LastMessage {
                id
                text
                createdAt
            }
            }
        }
        }
    }
}
`;
