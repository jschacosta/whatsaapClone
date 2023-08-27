import { View, Text, StyleSheet } from 'react-native'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);

const Message = ({message}) => {

    const isMyMessage = () =>{
        return message.user.id =='u1'
    }


  return (
    <View 
        style={[
            styles.container,
            {backgroundColor: isMyMessage()? '#2F2F2F': '#A4BAF6'},
            {alignSelf:isMyMessage()?'flex-end':'flex-start'},
        ]}
        >
      <Text
        style={[
            {color: isMyMessage()? 'white': 'black'},
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
    },
    time:{
        color:'grey',
        alignSelf:'flex-end'
    }
});

export default Message