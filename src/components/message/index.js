import { View, Text, StyleSheet } from 'react-native'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Auth } from 'aws-amplify'
import { useState } from 'react';
dayjs.extend(relativeTime);

const Message = ({message}) => {
  const [isMe,setIsMe] = useState(false)
  const isMyMessage = async() =>{
        const authUser = await Auth.currentAuthenticatedUser();
        setIsMe( message.userID ==authUser.attributes.sub)
    }
  isMyMessage()

  return (
    <View 
        style={[
            styles.container,
            {backgroundColor: isMe? 'white': '#A4BAF6'},
            {alignSelf:isMe?'flex-end':'flex-start'},
        ]}
        >
      <Text
        style={[
            {color: isMe? 'black': 'black'},
        ]}
      >
        {message.text}
      </Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin:5,
        padding:10,
        borderRadius:10,
        maxWidth:'80%',
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
    time:{
        color:'grey',
        alignSelf:'flex-end'
    }
});

export default Message