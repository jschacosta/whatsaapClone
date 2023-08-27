import { View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native'
import bg from '../../assets/images/BG.png'
import Message from '../components/message'
import messages from '../../assets/data/messages.json'

const ChatScreen = () => {
  return (
 <ImageBackground source={bg} style={styles.bg}>
  <FlatList
    data={messages} 
    renderItem={({item})=> <Message message={item}/>}
    style={styles.list}
    //inverted
  />
 </ImageBackground>
  )
}
const styles = StyleSheet.create({
  bg:{
    flex:1
  },
  list:{

  }
})

export default ChatScreen