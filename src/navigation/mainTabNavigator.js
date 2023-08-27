import { View, Text } from 'react-native'
import {createBottomNavigator} from '@react-navigation/bottom-tabs'
const Tab = createBottomNavigator()
const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen />
    </Tab.Navigator>
  )
}

export default MainTabNavigator