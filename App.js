import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ChatScreen from './src/screens/chatScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <ChatScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:50
  },
});
