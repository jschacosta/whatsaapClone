// rnfe
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigator from './src/navigation';

import {withAuthenticator} from 'aws-amplify-react-native'

import {Amplify,Auth,API, graphqlOperation } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { useEffect } from 'react';
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';


Amplify.configure({...awsconfig, Analitycs:{disabled:true}})

function App() {

    useEffect(()=>{
      const syncUser = async () => {
        console.log("entrando")
        //get Auth user
        const authUser = await Auth.currentAuthenticatedUser({
          bypassCache: true
        });
        console.log('authUser->',authUser)
        //query the dataBase using Auth user id (sub)
        const userData = await API.graphql(graphqlOperation(getUser, {id:authUser.attributes.sub}))
        console.log('getUser->',userData)
        if (userData.data.getUser){
          console.log("User already exist in db")
          return
        }
        //if there is no user in db, create one
        const newUser ={
          id:authUser.attributes.sub,
          name:authUser.attributes.phone_number,
          status:'Hey im using secret whatsaap',
        }
        await API.graphql(graphqlOperation(createUser,{input:newUser}))
      }
      syncUser()
    },[])

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