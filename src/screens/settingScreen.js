import { View, Text ,StyleSheet} from 'react-native'
import LogoutButton from '../components/logoutButton'
const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <LogoutButton></LogoutButton>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
    },

  });
export default SettingScreen