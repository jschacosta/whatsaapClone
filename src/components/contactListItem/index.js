import { Text, Image, StyleSheet, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API,Auth, graphqlOperation } from 'aws-amplify'; 
import { createChatroom, createUserChatroom } from '../../graphql/mutations';
import {getCommonChatRoomWithUser} from '../../services/chatRoomService'

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const ContactListItem = ({ user }) => {
  const navigation=useNavigation()
  onPress = async() =>{
    console.log("press",user.id)
    //check is already have a chatRoom with the user
    const existingChatroom = await getCommonChatRoomWithUser(user.id);
    console.log('prueba',existingChatroom)
    if(existingChatroom){
      console.log("existing",existingChatroom?.chatroom?.id)
      navigation.navigate("Chat", {id:existingChatroom.chatroom.id})
      return;
    }
    //create a new chatRoom
    const newChatRoomData = await  API.graphql(graphqlOperation(createChatroom,{input:{}}))
    console.log("newChat", newChatRoomData)
    if(!newChatRoomData.data?.createChatroom){
      console.log("error creating chatroom")
    }
    const newChatRoom=newChatRoomData.data?.createChatroom
    console.log("idChatRoom",newChatRoom.id,user.id)

    // Add the clicked user to chatRrom
    let user1=await API.graphql(graphqlOperation(createUserChatroom,{
      input:{chatroomId:newChatRoom.id, userId:user.id}
    }))
    console.log("user1", user1)
    // Add the auth to the chatRoom
    const authUser= await Auth.currentAuthenticatedUser();
    console.log("auth", authUser.attributes.sub)
    const user2=await API.graphql(
      graphqlOperation(createUserChatroom,{
        input:{chatroomId:newChatRoom.id, userId:authUser.attributes.sub}
      }))
    console.log("user2",user2)
    //navigate to de newly created chatRoom
    navigation.navigate("Chat", {id:newChatRoom.id,name:user.name})
  }  

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {user.name}
        </Text>

        <Text numberOfLines={2} style={styles.subTitle}>
          {user.status}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
  },
});

export default ContactListItem;