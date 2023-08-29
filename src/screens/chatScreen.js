import { View, Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native'
import {useRoute, useNavigation} from '@react-navigation/native'
 import { useEffect } from 'react'

import bg from '../../assets/images/BG.png'
import Message from '../components/message' 
import messages from '../../assets/data/messages.json'
import InputBox from '../components/imputBox'  
 
const ChatScreen = () => {
  const route = useRoute()
  console.log('route ',route)
  const navigation =useNavigation()   
  useEffect(() => { 
    navigation.setOptions({ title: route.params.name });
  }, []); // Agrega un arreglo de dependencias vacío para ejecutar esto solo una vez

  return (
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages} 
          renderItem={({item})=> <Message message={item}/>}
          style={styles.list}
          //inverted
        />
      <InputBox/>
      </ImageBackground>
  )
}
const styles = StyleSheet.create({
  bg:{
    flex:1,
    //backgroundColor:'#d9d9d9'
  },
  list:{

  }
})

export default ChatScreen