import { Stack } from 'expo-router'
import { PaperProvider } from 'react-native-paper'
import { AppRegistry } from 'react-native'


// export default function StackLayout() {
//   return (
//     <PaperProvider>
//     <Stack>
//       <Stack.Screen name="(auth)/onboarding" options={{ headerShown: false }} />
//       <Stack.Screen name="(auth)/login" options={{ headerShown: false,  }} />
//       <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />
//     </Stack>
//     </PaperProvider>
//   )
// }
// AppRegistry.registerComponent(appName, () => StackLayout)

import { Slot, useRouter, useSegments } from 'expo-router'

import { useContext, useEffect } from 'react'
import { Text } from 'react-native'
import { AuthContext, AuthProvider } from '../core/context/Authcontext'

const InitialLayout = () => {
    const { user, initialized } = useContext(AuthContext)
    const router = useRouter()
    const segments = useSegments()

    useEffect(() => {
        if (!initialized) return

        const inTabsGroup = segments[0] === '(tabs)'

        if (user && !inTabsGroup) {
            router.replace('/(tabs)/chat')
        } else if (!user) {
            router.replace('/login')
        }
    }, [user, initialized])

    return <>{initialized ? <Slot /> : <Text>Loading...</Text>}</>
}

const RootLayout = () => {
    return (
        <AuthProvider>
            <InitialLayout />
        </AuthProvider>
    )
}

export default RootLayout
