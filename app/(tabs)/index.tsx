import { StyleSheet } from 'react-native'

import { Text, View } from '../../components/Themed'
import { Link } from 'expo-router'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>home</Text>
      <Text style={styles.title}>
        <Link href="/(auth)/logout">goto log out page</Link>
        {/* <Text>{ user.user}</Text> */}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
