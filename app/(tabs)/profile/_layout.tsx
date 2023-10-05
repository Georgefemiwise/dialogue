import { View, Text } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';

export default function AuthLayout() {
	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{
					title: 'Profile',
					headerRight: () => (
						<Link href='/profile/settings'>
							<Text>register</Text>
						</Link>
					),
				}}
			/>
			<Stack.Screen
				name='settings'
				options={{
					title: 'Settings',
				}}
			/>
		</Stack>
	);
}
