import React from 'react';
import { Text, StyleSheet, Pressable, PressableProps } from 'react-native';

interface Props {
	onPress: () => void;
	title: string;
	style:
		| 'primary'
		| 'success'
		| 'info'
		| 'warning'
		| 'danger'
		| 'link'
		| 'ghost';
}

export default function Button(props: Props) {
	const { onPress, title = 'Save', style } = props;

	return (
		<Pressable
			style={[
				styles.button,
				{
					backgroundColor:
						style === 'primary'
							? '#500591'
							: style === 'success'
							? '#1ccaa4'
							: style === 'info'
							? '#73ade8'
							: style === 'warning'
							? '#dcb909'
							: style === 'danger'
							? '#e44e5a'
							: style === 'link'
							? '#1ccaa4'
							: 'transparent',
				},
			]}
			onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 10,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		textTransform: 'capitalize',
		marginVertical:5
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},
});

//  "primary": "#500591",

//  "secondary": "#b5bff2",

//  "accent": "#b663ed",

//  "neutral": "#15181e",

//  "base-100": "#f5f3f6",

//  "info": "#73ade8",

//  "success": "#1ccaa4",

//  "warning": "#dcb909",

//  "error": "#e44e5a",
