import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons';

const InputBox = () => {
    //state Data
    const [newMessage,setNewMessage]= useState('');
    //
    const onSend =()=>{
        console.warn('Sending a new message: ', newMessage)
        setNewMessage('')
    }
  return (

    <View style={styles.container}>
        {/* Icon */}
        <TextInput 
            value={newMessage}
            onChangeText={setNewMessage}
            placeholder='type your message'
            style={styles.input}
        />
        <Ionicons
            onPress={onSend}
            style={styles.send}
            name="md-send-outline" size={24} color="#5B78C7" />
    </View>
  )
}

styles = StyleSheet.create({
    container:{
        flexDirection:'row',    
        backgroundColor:'whitesmoke',
        borderRadius:30,
        borderWidth:1.5  ,  // Ancho del borde
        borderColor:'#5B78C7',
        marginHorizontal:5,
        marginVertical:3,
        height:40,
        //shadows--
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        //
    },
    input:{
        flex:1,
        marginStart:10
    },
    send:{
        alignSelf:"center",
        paddingEnd:5
    }
})
export default InputBox