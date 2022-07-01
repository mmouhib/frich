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
				android_ripple={{ color: colors.rippleColor }}
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
				android_ripple={{ color: colors.rippleColor }}
				style={isLoginSelected ? styles.button : styles.SelectedButton}
			>
				<Text style={isLoginSelected ? styles.buttonText : styles.SelectedButtonText}>
					Register
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
		borderWidth: 0,
		borderColor: colors.mainColor,
		width: '40%',
		padding: 11,
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
		backgroundColor: '#f1eff9',
		// borderWidth: 1,
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
