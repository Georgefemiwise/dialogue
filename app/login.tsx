import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { View, Text } from '../components/Themed';
import { TextInput } from 'react-native';
import Button from '../components/Button';

export default function login() {
	const [text, setText] = useState('');

	function handleSubmit() {
	// handle submite of form
		console.log("submtted")
	}
	function handleChange() {
		// handle input changes
		
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>login</Text>
			<View style={styles.card}>
				<TextInput
					style={styles.input}
					placeholder='Email...'
					onChangeText={handleChange}
					defaultValue={text}
					
				
				/>

				<TextInput
					style={styles.input}
					onChangeText={handleChange}
					placeholder='Password...'
					keyboardType='numeric'
					defaultValue={text}
				/>

				<Button style='primary' onPress={handleSubmit} title='Login'/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: '20%',
		alignItems: 'center',
	},
	card: {
		maxWidth: '40%',
		backgroundColor: 'pink',
		width:"100%",
		padding:25
	},
	input: {
		height: 40,
		marginVertical: 5,
		borderWidth: 1,
		padding: 10,
		width: '100%',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		textTransform: 'capitalize',
	},
});
