import { View, Text, FlatList, Button,useE } from 'react-native'
import { useEffect, useState } from 'react'
//import chats from '../../../assets/data/chats.json'
import ChatListItem from '../../components/chatListItem'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { listChatRooms } from './queries'



const ChatsScreens = () => {
  console.log("chatsScreen")
  const [chatRoom, setChatRoom]=useState([]);
  useEffect(()=>{
    
    const fetchChatRooms = async () => { 
      const authUser = await Auth.currentAuthenticatedUser();
      const response = await API.graphql(graphqlOperation(listChatRooms,{id:authUser.attributes.sub}))
      console.log('la respuesta',response.data.getUser.Chatrooms.items[0].chatroom.users.items)
      setChatRoom(response.data.getUser.Chatrooms.items)
    };
    fetchChatRooms()
  },[])
 
  return (
    <View>
      <FlatList
        data={chatRoom}
        renderItem={({item})=><ChatListItem chat={item.chatroom}/>}
      />

    </View>
  )
}

export default ChatsScreens