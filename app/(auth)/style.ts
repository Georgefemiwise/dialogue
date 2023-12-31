import { StyleSheet} from 'react-native';

export const authStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 20,
	},
	header: {
		fontSize: 40,
		marginBottom: 20,
		fontWeight: "700",
		// color:'purple',
	},
	subheader: {
		fontSize: 18,
		fontWeight:'500'
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		padding: 10,
		borderRadius: 4,
		backgroundColor:"#ccc"
	},
});
