import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatsScreen from '../screens/chatsScreen'
import ChatScreen from '../screens/chatScreen'

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initial>
        <Stack.Screen name='Chats' component={ChatsScreen} />
        <Stack.Screen name='Chat' component={ChatScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigator