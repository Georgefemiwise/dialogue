import { StyleSheet } from 'react-native';
import React from 'react';
import { Text, View } from '../../../components/Themed';
import { Link } from 'expo-router';
import { ExternalLink } from '../../../components/ExternalLink';

export default function ProflePage() {
	return (
		<View>
			<Text>ProflePage</Text>
			<Text>
				<ExternalLink href='/profile/settings' >
					settings
				</ExternalLink>
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
