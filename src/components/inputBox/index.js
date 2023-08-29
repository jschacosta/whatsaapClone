import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createMessage, updateChatroom } from '../../graphql/mutations';

const InputBox = ({chatRoom}) => {
    //state Data
    const [text,setText]= useState('');
    console.log('chatRoom en input',chatRoom)
    const chatroomID=chatRoom?.id || null
    console.log('el chatRoomID',chatroomID)
    const onSend =async()=>{
        //console.warn('Sending a new message: ', text)
        setText('')
        const authUser = await Auth.currentAuthenticatedUser()
        const newMessage ={
            chatroomID,
            text,
            userID: authUser.attributes.sub,
        }
        console.log(newMessage)
        const newMessageData=await API.graphql(graphqlOperation(createMessage,{input:newMessage}))
        //set new message as lastMessage of the chatRoom
        console.log("la data", newMessageData.data)
        lastMessage=await API.graphql(
            graphqlOperation(updateChatroom,{
                input:{
                    _version:chatRoom._version, 
                    chatroomLastMessageId: newMessageData.data.createMessage.id,
                    id:chatRoom.id
                }
            }
        ))
        console.log("last Message",lastMessage)
    }
  return (

    <View style={styles.container}>
        {/* Icon */}
        <TextInput 
            value={text}
            onChangeText={setText}
            placeholder='type your message'
            style={styles.input}
        />
        <Ionicons
            onPress={onSend}
            style={styles.send}
            name="md-send-outline" size={24} color="#5B78C7" />
    </View>
  )
}

styles = StyleSheet.create({
    container:{
        flexDirection:'row',    
        backgroundColor:'whitesmoke',
        borderRadius:30,
        borderWidth:1.5  ,  // Ancho del borde
        borderColor:'#5B78C7',
        marginHorizontal:5,
        marginVertical:3,
        height:40,
        //shadows--
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        //
    },
    input:{
        flex:1,
        marginStart:10
    },
    send:{
        alignSelf:"center",
        paddingEnd:5
    }
})
export default InputBox