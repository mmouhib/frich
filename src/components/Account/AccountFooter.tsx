import { View, Text, StyleSheet, Pressable } from 'react-native';
import colors from '../../utils/colors';

interface IAccountFooter {
	isLoginSelected: boolean;
	setIsLoginSelected: (arg: boolean) => void;
}

export default function AccountFooter({ isLoginSelected, setIsLoginSelected }: IAccountFooter) {
	return (
		<View style={styles.container}>
			<Pressable
				onPress={() => {
					!isLoginSelected && setIsLoginSelected(true);
				}}
				android_ripple={{ color: 'rgba(155,213,236,0.04)' }}
				style={isLoginSelected ? styles.SelectedButton : styles.button}
			>
				<Text style={isLoginSelected ? styles.SelectedButtonText : styles.buttonText}>
					Log In
				</Text>
			</Pressable>
			<Pressable
				onPress={() => {
					isLoginSelected && setIsLoginSelected(false);
				}}
				android_ripple={{ color: 'rgba(155,213,236,0.04)' }}
				style={isLoginSelected ? styles.button : styles.SelectedButton}
			>
				<Text style={isLoginSelected ? styles.buttonText : styles.SelectedButtonText}>
					Sign Up
				</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},

	SelectedButton: {
		backgroundColor: colors.mainColor,
		borderWidth: 3,
		borderColor: colors.mainColor,
		width: '40%',
		padding: 10,
		alignItems: 'center',
		borderRadius: 7,
		marginRight: 5,
	},

	SelectedButtonText: {
		fontSize: 15,
		fontWeight: '600',
		color: '#fff',
	},

	button: {
		backgroundColor: 'transparent',
		borderWidth: 3,
		borderColor: colors.mainColor,
		width: '40%',
		padding: 10,
		alignItems: 'center',
		borderRadius: 7,
		marginRight: 5,
	},

	buttonText: {
		fontSize: 15,
		fontWeight: '600',
		color: colors.mainColor,
	},
});
