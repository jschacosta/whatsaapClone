import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatsScreen from "../screens/chatsScreen/chatsScreen";
import NotImplementedScreen from "../screens/notImplementedScreen";
import SettingScreen from "../screens/settingScreen";
import {AntDesign, MaterialIcons, Ionicons, Entypo,MaterialCommunityIcons} from '@expo/vector-icons';
import { Auth } from 'aws-amplify';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    const logOut= async() =>{
        let resultado= Auth.signOut()
        console.log(resultado)
      }


  return (
    <Tab.Navigator 
    
    initialRouteName="Chats"
    screenOptions={{
        tabBarStyle: { backgroundColor: "whitesmoke" },
        headerStyle: { backgroundColor: "whitesmoke" },
      }}
    
    >
      <Tab.Screen
        name="Status"
        component={NotImplementedScreen}
        options={{
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-whatsapp" size={size} color={color} />
            ),
        }}
    />
    <Tab.Screen
        name="Calls"
        component={NotImplementedScreen}
        options={{
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
            ),
        }}
    />
    <Tab.Screen
        name="Camera"
        component={NotImplementedScreen}
        options={{
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera-outline" size={size} color={color} />
            ),
        }}
    />
    <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={({navigation})=>({
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />
            ),
            headerRight: () => (
                <Entypo
                    name="new-message"
                    onPress={()=>navigation.navigate('Contacts')}
                    size={25}
                    color={"black"}
                    style={{ marginRight: 15 }}
                />
            ),
            headerLeft: () => (
                <MaterialCommunityIcons
                    name="logout"
                    size={30}
                    color={"black"}
                    style={{ marginLeft: 15 }}
                />
            ),
            
        })
    }
    />
    <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
            ),
        }}
    />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;