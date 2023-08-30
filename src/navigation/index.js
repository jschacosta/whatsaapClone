import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatsScreen from '../screens/chatsScreen/chatsScreen'
import ChatScreen from '../screens/chatScreen.js'
import ContactsScreen from "../screens/contactsScreen";
import MainTabNavigator from "./mainTabNavigator";
import {AntDesign, MaterialIcons, Ionicons, Entypo,MaterialCommunityIcons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator()
const Navigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator 
      initial 
      screenOptions={{headerStyle: { backgroundColor: "whitesmoke" },}}
    >
        <Stack.Screen name='Home' component={MainTabNavigator} options={{headerShown:false}}/>
        <Stack.Screen name='Chats' component={ChatsScreen} 
         
        />
        
        <Stack.Screen name='Chat'
        component={ChatScreen}     
        options={({ navigation }) => ({
          headerLeft: () => (
            <Ionicons
              name="chevron-back"
              size={24}
              color="black"
              onPress={() => {
                navigation.navigate('Home'); // Redirige a la pantalla de Chats
              }}
              style={{ marginLeft: -5,marginRight: 10 }}
            />
          ),
        })}
        
        />
        <Stack.Screen name='Contacts' component={ContactsScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigator