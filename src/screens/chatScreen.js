import { View, Text, FlatList } from 'react-native'
import chats from '../../assets/data/chats.json'
import ChatListItem from '../components/chatListItem'

const ChatScreens = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({item})=><ChatListItem chat={item}/>}
    />
  )
}

export default ChatScreens