import MaterialIcon from '@expo/vector-icons/MaterialIcons'
import { Link, Tabs } from 'expo-router'
import { Pressable, useColorScheme } from 'react-native'

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof MaterialIcon>['name']
    color: string
}) {
    return <MaterialIcon size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Feeds',
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="home" color={color} />
                    ),
                    headerRight: () => (
                        <Link href="/(tabs)/user" asChild>
                            <Pressable>
                                {({ pressed }) => (
                                    <MaterialIcon
                                        name="menu"
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
                    headerShown: false,
                    title: 'chat',
                    tabBarLabel: '',

                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="chat" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="tasks"
                options={{
                    headerShown: false,

                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="flag" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="user"
                options={{
                    href: '/(tabs)/user',
                    headerShown: false,

                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="person" color={color} />
                    ),
                }}
            />
            {/* 
            <Tabs.Screen
                // Name of the route to hide.
                name="tasks"
                options={{
                    // This tab will no longer show up in the tab bar.
                    href: null,
                }}
            /> */}
        </Tabs>
    )
}
