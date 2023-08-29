import  {Text, View, Image, StyleSheet, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react'

import { API, graphqlOperation, Auth } from 'aws-amplify'
import { onUpdateChatroom } from '../../graphql/subscriptions';

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);

const ChatListItem = ({chat}) =>{
    const navigation = useNavigation();
    console.log("la data", chat.users.items)
    const [user, setUser]=useState([]) 
    const [chatRoom, setChatRoom]=useState(chat) 

    
    useEffect(()=>{
        const fetchAuth = async () => {
            const authUser = await Auth.currentAuthenticatedUser();
            let idUser = authUser.attributes.sub
            console.log("la iddd", idUser)
            //loop through chat.users.items and find a user is not us (Authenticaded user)
            for (let item of chatRoom.users.items){
                console.log(item)
                console.log(item.user.id)
                console.log(idUser)
                item.user.id!=idUser?setUser(item.user):""

            }
        }
        fetchAuth()

        
      
    },[])

    useEffect(() => {
        // Subscribe to onUpdateChatRoom
        const subscription = API.graphql(
          graphqlOperation(onUpdateChatroom, {
            filter: { id: { eq: chat.id } },
          })
        ).subscribe({
          next: ({ value }) => {
            setChatRoom((cr) => ({
              ...(cr || {}),
              ...value.data.onUpdateChatroom,
            }));
          },
          error: (error) => console.warn(error),
        });
      
        // Stop receiving data updates from the subscription
        return () => subscription.unsubscribe();
      }, [chat.id]);
    const goChat = () =>{
        navigation.navigate('Chat',{id:chatRoom.id,name:user.name})  
    }
    return (
        <Pressable onPress={goChat} style={styles.container}>
            <Image  
                source={{uri:user?.image}} 
                style={styles.image}
            />
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text  style={styles.name} numberOfLines={1}>{user?.name} </Text>
                    {chatRoom.LastMessage &&
                    <Text  style={styles.subTitle}>{dayjs(chatRoom.LastMessage?.createdAt).fromNow()}</Text>
                    }
                </View>
                <Text  style={styles.name} numberOfLines={2}>{chatRoom.LastMessage?.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal:10,
        marginVertical:5,
        height:70
    },
    image:{
        width:60,
        height:60,
        borderRadius:30,
        marginRight:10
    },
    content:{
        flex:1,
        //backgroundColor:'red',
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'lightgray'
    },
    row:{
        flexDirection:'row',
        marginBottom:5,
    },
    name:{ 
        flex:1
    },
    subTitle:{
        color:'grey'
    }
})

export default ChatListItem;