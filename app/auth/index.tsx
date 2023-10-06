import React, { useState } from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';
import { FIREBASE_AUTH } from '../../core/api/firebase/config';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from '@firebase/auth';
import { Link } from 'expo-router';
import { Text, View } from '../../components/Themed';
import { authStyles } from './style';

interface LoginFormProps {}

interface LoginFormState {
	email: string;
	password: string;
}

export default function LoginForm(props: LoginFormProps) {
	const [state, setState] = useState<LoginFormState>({
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
			const response = await signInWithEmailAndPassword(
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
		<View style={authStyles.container}>
			<Text style={authStyles.header}>LoginForm</Text>

			<TextInput
				style={authStyles.input}
				placeholder='Email'
				value={state.email}
				onChangeText={handleEmailChange}
			/>
			<TextInput
				style={authStyles.input}
				placeholder='Password'
				secureTextEntry={true}
				value={state.password}
				onChangeText={handlePasswordChange}
			/>

			<Button title='Submit' onPress={handleSubmit} />
			<Text>
				<Link href='/auth/register'>register</Link>
			</Text>
		</View>
	);
}
