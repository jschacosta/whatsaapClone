import { View, Text, FlatList, Button } from 'react-native'
import chats from '../../assets/data/chats.json'
import ChatListItem from '../components/chatListItem'



const ChatsScreens = () => {
 
  return (
    <View>
      <FlatList
        data={chats}
        renderItem={({item})=><ChatListItem chat={item}/>}
      />

    </View>
  )
}

export default ChatsScreens