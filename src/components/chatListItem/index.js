import  {Text, View, Image, StyleSheet, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react'

import { API, graphqlOperation, Auth } from 'aws-amplify'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);

const ChatListItem = ({chat}) =>{
    const navigation = useNavigation();
    console.log("la data", chat.users.items)
    const [user, setUser]=useState([]) 

    
    useEffect(()=>{
        const fetchAuth = async () => {
            const authUser = await Auth.currentAuthenticatedUser();
            let idUser = authUser.attributes.sub
            console.log("la iddd", idUser)
            //loop through chat.users.items and find a user is not us (Authenticaded user)
            let user =null
            for (let item of chat.users.items){
                console.log(item)
                console.log(item.user.id)
                console.log(idUser)
                item.user.id!=idUser?setUser(item.user):""

            }
        }
        fetchAuth()
      
    },[])
    const goChat = () =>{
        navigation.navigate('Chat',{id:chat.id,name:user.name})  
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
                    {chat.LastMessage &&
                    <Text  style={styles.subTitle}>{dayjs(chat.LastMessage?.createdAt).fromNow()}</Text>
                    }
                </View>
                <Text  style={styles.name} numberOfLines={2}>{chat.LastMessage?.text}</Text>
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