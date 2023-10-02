import { StyleSheet } from 'react-native';
import React from 'react';
import { View, Text } from '../components/Themed';
import { Feather } from '@expo/vector-icons';
import Button from '../components/Button';

export default function welcomePage() {
	return (
		<View style={styles.container}>
			<Feather name='user' size={80} color='inherit' />
			<Text style={styles.heading}>Welcome to dialogue</Text>
			<Text style={styles.subheading}>
				Student go to app for academic performance.
			</Text>

			<View style={styles.btnGroup}>
				<Button
					style='primary'
					title='login'
					onPress={() => {
						console.log('login');
					}}
				/>
				<Button
					style='info'
					title='register'
					onPress={() => {
						console.log('redister');
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		color: 'white',
	},
	heading: { fontSize: 30, fontWeight: '600' },
	subheading: { fontSize: 10 },
	btn: {
		textTransform: 'capitalize',
		justifyContent: 'center',
		paddingHorizontal: 10,
		padding: 5,
	},
	btnGroup: {
		display: 'flex',
		width: '40%',
		justifyContent: 'space-evenly',
		marginTop: 15,
	},
});
