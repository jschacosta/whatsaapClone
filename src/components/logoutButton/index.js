import { View, Text, Button, StyleSheet, Pressable } from 'react-native'
import { Auth } from 'aws-amplify';





const LogoutButton = () => {
  const login = async() =>{
    console.log("empezo login")
    try {
      const { user } = await Auth.signUp({
        username:"johann@unabase.com",
        password:"123132131",
        attributes: {
          email:"johann@unabase.com",          // optional
         // phone_number:1231313,   // optional - E.164 number convention
          // other custom attributes 
        },
        autoSignIn: { // optional - enables auto sign in after user is confirmed
          enabled: true,
        }
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }
  const logOut= async() =>{
    let resultado= Auth.signOut()
    console.log(resultado)
  }
  return (
    <Pressable style={styles.button}  onPress={logOut}>
    <Text style={styles.text}>Log out</Text>
  </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    maxWidth:200,
    maxHeight:40,
    alignSelf:'flex-center',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default LogoutButton