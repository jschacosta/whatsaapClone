import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatsScreen from '../screens/chatsScreen'
import ChatScreen from '../screens/chatScreen'
import ContactsScreen from "../screens/contacts";

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initial>
        <Stack.Screen name='Chats' component={ChatsScreen} />
        <Stack.Screen name='Chat' component={ChatScreen} />
        <Stack.Screen name='Contacts' component={ContactsScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigator