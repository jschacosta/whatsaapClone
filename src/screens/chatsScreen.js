import { View, Text, FlatList, Button } from 'react-native'
import chats from '../../assets/data/chats.json'
import ChatListItem from '../components/chatListItem'
import LogoutButton from '../components/logoutButton';



const ChatsScreens = () => {
 
  return (
    <View>
      {/* <LogoutButton></LogoutButton> */}
      <FlatList
        data={chats}
        renderItem={({item})=><ChatListItem chat={item}/>}
      />

    </View>
  )
}

export default ChatsScreens