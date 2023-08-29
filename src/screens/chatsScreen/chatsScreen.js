import { View, Text, FlatList, Button,useE } from 'react-native'
import { useEffect, useState } from 'react'
//import chats from '../../../assets/data/chats.json'
import ChatListItem from '../../components/chatListItem'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { listChatRooms } from './queries'

 

const ChatsScreens = () => {
  console.log("chatsScreen")   
  const [chatRoom, setChatRooms]=useState([]);  
  const [loading, setLoading] = useState(false);
  const fetchChatRooms = async () => { 
    setLoading(true)
    const authUser = await Auth.currentAuthenticatedUser();
    const response = await API.graphql(graphqlOperation(listChatRooms,{id:authUser.attributes.sub}))
    console.log('la respuesta3',response.data.getUser.Chatrooms.items[0].chatroom.users.items)

    const rooms = response.data.getUser.Chatrooms.items;
    const sortedRooms = rooms.sort(
      (r1, r2) =>
        new Date(r2.chatroom.updatedAt) - new Date(r1.chatroom.updatedAt)
    );

    setChatRooms(sortedRooms);
    setLoading(false)

  };
  useEffect(()=>{    
    fetchChatRooms()
  },[])
 
  return ( 
    <View>
      <FlatList
        data={chatRoom}
        renderItem={({item})=><ChatListItem chat={item.chatroom}/>}
        refreshing={loading}
        onRefresh={fetchChatRooms}
      />

    </View>
  )
}

export default ChatsScreens