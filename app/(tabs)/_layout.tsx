import Feather from '@expo/vector-icons/Feather';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
}) {
  return <Feather size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
			}}>
		
			<Tabs.Screen
				name='index'
				options={{
					title: 'Feed',
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='home' color={color} />
					),
					headerRight: () => (
						<Link href='/modal' asChild>
							<Pressable>
								{({ pressed }) => (
									<Feather
										name='bell'
										size={20}
										color={
											Colors[
												colorScheme ??
													'light'
											].text
										}
										style={{
											marginRight: 15,
											opacity: pressed
												? 0.5
												: 1,
										}}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name='chat'
				options={{
					title: 'box',
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='box' color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{headerShown:false,
					title: 'profile',
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='user' color={color} />
					),
				}}
			/>
		
		</Tabs>
  );
}
