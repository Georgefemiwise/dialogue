import { Stack, useRouter } from 'expo-router';
import Button from '../components/Button';

export default function Stacklayout() {
	const router = useRouter();
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: '#10101e',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}>
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen
				name='register'
				options={{
					headerTitle: 'create account',
					headerRight: () => (
						<Button
							title='model'
							style='primary'
							onPress={() => {
								router.push('/model');
							}}
						/>
					),
				}}
			/>
			<Stack.Screen name='model' options={{  presentation:'modal'}} />
			<Stack.Screen name='(tabs)' options={{ headerShown: false}} />
		</Stack>
	);
}
