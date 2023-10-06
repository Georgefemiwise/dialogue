import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { FIREBASE_APP, FIREBASE_AUTH } from '../../core/api/firebase/config';
import {

	createUserWithEmailAndPassword,
} from '@firebase/auth';

interface RgistrationForm {}

interface RgistrationFormtate {
	email: string;
	password: string;
}

export default function RgistrationForm(props: RgistrationForm) {
	const [state, setState] = useState<RgistrationFormtate>({
		email: '',
		password: '',
	});

	const handleEmailChange = (text: string) => {
		setState({ ...state, email: text });
	};

	const handlePasswordChange = (text: string) => {
		setState({ ...state, password: text });
	};

	const handleSubmit = async () => {
		const { email, password } = state;
		const auth = FIREBASE_AUTH;

		try {
			const response = await createUserWithEmailAndPassword(
				auth,
				email,
				password,
			);
			console.log(response);
		} catch (error) {
			console.log(error);
		}

		// Clear the form after submission
		setState({ email: '', password: '' });
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>LoginForm</Text>

			<TextInput
				style={styles.input}
				placeholder='Email'
				value={state.email}
				onChangeText={handleEmailChange}
			/>
			<TextInput
				style={styles.input}
				placeholder='Password'
				secureTextEntry={true}
				value={state.password}
				onChangeText={handlePasswordChange}
			/>

			<Button title='Submit' onPress={handleSubmit} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 20,
	},
	header: {
		fontSize: 24,
		marginBottom: 20,
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		padding: 10,
	},
});
