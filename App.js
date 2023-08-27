// rnfe
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigator from './src/navigation';

import {withAuthenticator} from 'aws-amplify-react-native'

import {Amplify} from 'aws-amplify'
import awsconfig from './src/aws-exports'


Amplify.configure({...awsconfig, Analitycs:{disabled:true}})

function App() {
  return (
    <View style={styles.container}>
      <Navigator/>
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
    paddingBottom:0,
    paddingTop:35
  },
});

export default withAuthenticator(App)