import  {Text, View, Image, StyleSheet} from 'react-native'

const ChatListItem = () =>{
    return (
        <View style={styles.container}>
            <Image 
                source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg'}}
                style={styles.image}
            />
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text  style={styles.name} numberOfLines={1}>Johann </Text>
                    <Text  style={styles.subTitle}>18:00</Text>
                </View>
                <Text  style={styles.name} numberOfLines={2}>Como estas</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal:10,
        marginVertical:5,
        height:70
    },
    image:{
        width:60,
        height:60,
        borderRadius:30,
        marginRight:10
    },
    content:{
        flex:1,
        //backgroundColor:'red',
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'lightgray'
    },
    row:{
        flexDirection:'row',
        marginBottom:5,
    },
    name:{ 
        flex:1
    },
    subTitle:{
        color:'grey'
    }
})

export default ChatListItem;