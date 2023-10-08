import { Stack } from 'expo-router'
import { PaperProvider } from 'react-native-paper'
import { AppRegistry } from 'react-native'


export default function StackLayout() {
  return (
    <PaperProvider>
    <Stack>
      <Stack.Screen name="(auth)/onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/login" options={{ title: "" }} />
      <Stack.Screen name="(auth)/register" options={{ title: "" }} />
    </Stack>
    </PaperProvider>
  )
}
// AppRegistry.registerComponent(appName, () => StackLayout)

