import { View, Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native'
import {useRoute, useNavigation} from '@react-navigation/native'
import { useEffect,useState } from 'react'

import bg from '../../assets/images/BG.png'
import bg2 from '../../assets/images/BG2.jpeg'
import bg3 from '../../assets/images/BG3.jpeg'
import bg4 from '../../assets/images/BG4.jpeg'
import bg5 from '../../assets/images/BG5.jpeg'
import Message from '../components/message' 
import messages from '../../assets/data/messages.json'
import InputBox from '../components/inputBox'  
import { API,graphqlOperation } from 'aws-amplify'
import {getChatroom, listMessagesByChatRoom} from '../graphql/queries'
 
const ChatScreen = () => {
  console.log("----------------------------------------------------------------")
  const route = useRoute()
  const navigation =useNavigation() 
  console.log("CHAT-SCREEN->",route)
  const [chatRoom,setChatRoom] = useState(null)
  const [messages,setMessages] = useState([])
  const chatroomID = route.params.id
  console.log('idRoom',chatroomID)
  //fetch Chat room
  useEffect(() => { 
    // Agrega un arreglo de dependencias vacío para ejecutar esto solo una vez
    navigation.setOptions({ title: route.params.name });
    
    API.graphql(graphqlOperation(getChatroom,{id:chatroomID})).then(
      result=>{
        setChatRoom(result.data?.getChatroom) 
        //delete this after querying messages directly
        setMessages(result.data?.getChatroom?.Messages?.items) 
      } 
    )
  }, []); 

  console.log('chatRoom',chatRoom) 
  //fetch for messages
  useEffect(() => { 
    API.graphql(
      graphqlOperation(listMessagesByChatRoom, {
        chatroomID,
        sortDirection: "DESC",
      })
    ).then((result) => {
      setMessages(result.data?.listMessagesByChatRoom?.items);
    });
  }, []); 

  return (
      <ImageBackground source={bg3} style={styles.bg}>
        <FlatList
          data={messages} 
          renderItem={({item})=> <Message message={item}/>}
          style={styles.list}
          inverted
        />
      <InputBox chatRoom={chatRoom}/>
      </ImageBackground>
  )
}
const styles = StyleSheet.create({
  bg:{
    flex:1,
    //backgroundColor:'#d9d9d9'
  },
  list:{

  }
})

export default ChatScreen