import Entypo from '@expo/vector-icons/Entypo'
import { Link, Tabs } from 'expo-router'
import { Pressable, useColorScheme } from 'react-native'



/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof Entypo>['name']
    color: string
}) {
    return <Entypo size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerTintColor: '#888',
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Feeds',
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="home" color={color} />
                    ),
                    headerRight: () => (
                        <Link href="/profile/settings" asChild>
                            <Pressable>
                                {({ pressed }) => (
                                    <Entypo
                                        name="dots-three-vertical"
                                        size={20}
                                        style={{
                                            marginRight: 15,
                                            opacity: pressed ? 0.5 : 1,
                                        }}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: 'chat',
                    tabBarLabel: '',

                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="chat" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,

                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="user" color={color} />
                    ),
                }}
            />
        </Tabs>
    )
}
