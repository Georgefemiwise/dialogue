import { StyleSheet } from 'react-native';
import React from 'react';
import { View, Text } from '../components/Themed';
import { Feather } from '@expo/vector-icons';
import Button from '../components/Button';
import { Link } from 'expo-router';

export default function welcomePage() {
	return (
		<View style={styles.container}>
			<Feather name='box' size={80} color='b' />
			<Text style={styles.heading}>Welcome to dialogue</Text>
			<Text style={styles.subheading}>
				Student go to app for academic performance.
			</Text>

			<View style={styles.btnGroup}>
				<Link href='/login' asChild>
					<View style={styles.btn}>get started</View>
				</Link>
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
		paddingHorizontal: 20,
		padding: 8,
		backgroundColor: '#500591',
		color: "#fff",
		borderRadius:4
	},
	btnGroup: {
		flexDirection: 'row',
		width: '40%',
		justifyContent: 'space-evenly',
		marginTop: 15,
	},
});
