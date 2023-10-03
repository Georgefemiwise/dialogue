import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default () => {
	return (
		<Tabs>
			<Tabs.Screen
				name='home'
				options={{
					tabBarLabel: 'Home',
					headerTitle: 'home screen',
					tabBarIcon: ({ color, size }) => (
						<Feather name='home' />
					),
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					tabBarLabel: 'Account',
					headerTitle: 'my Account',
					tabBarIcon: ({ color, size }) => (
						<Feather name='user' />
					),
				}}
			/>
			<Tabs.Screen
				name='list'
				options={{
					tabBarLabel: 'feed',
					headerTitle: 'feed',
					// headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Feather name='message-square' />
					),
				}}
			/>
		</Tabs>
	);
};
