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

import { Slot, useRouter, useSegments, SplashScreen } from 'expo-router'
import { useContext, useEffect } from 'react'
import { Text } from 'react-native'
import { AuthContext, AuthProvider } from '../core/context/Authcontext'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useFonts } from 'expo-font'





// =========================================
export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

const InitialLayout = () => {
    const { user, initialized } = useContext(AuthContext)
    const router = useRouter()
    const segments = useSegments()

    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    })

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error
    }, [error])

    
    useEffect(() => {
        if (!initialized) return

        const getInTabs = segments[0] === '(tabs)'

        if (user && !getInTabs) {
            router.replace('/(tabs)/')
        } else if (!user) {
            router.replace('/(auth)/login')
        }
    }, [user, initialized])

    // todo make better loding component
    return <>{initialized ? <Slot /> : <Text>Loading...</Text>}</>
}

const RootLayoutNav = () => {
    return (
        <AuthProvider>
            <InitialLayout />
        </AuthProvider>
    )
}

export default RootLayoutNav
