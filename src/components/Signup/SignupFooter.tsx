import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import colors from '../../utils/colors';

export default function SignupFooter() {
	return (
		<View style={{ flex: 1, width: '85%' }}>
			<Pressable style={styles.mainButton} android_ripple={{ color: colors.rippleColor }}>
				<Text style={styles.mainButtonText}>Log in</Text>
			</Pressable>
			<View style={styles.separator}>
				<View style={styles.lineSeparator}></View>
				<Text style={{ color: '#a0a0a0' }}>OR</Text>
				<View style={styles.lineSeparator}></View>
			</View>
			<Pressable style={styles.button} android_ripple={{ color: colors.rippleColor }}>
				<Text style={styles.buttonText}>Create an account</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	mainButton: {
		width: '100%',
		height: 40,
		backgroundColor: colors.mainColor,
		borderRadius: 7,
		alignItems: 'center',
		justifyContent: 'center',
	},

	button: {
		width: '100%',
		height: 40,
		backgroundColor: '#fff',
		borderRadius: 7,
		alignItems: 'center',
		justifyContent: 'center',
	},

	mainButtonText: {
		color: '#fff',
		fontFamily: 'Roboto_700Bold',
	},

	buttonText: {
		color: colors.mainColor,
		fontFamily: 'Roboto_700Bold',
	},

	lineSeparator: {
		width: '42%',
		height: 1,
		backgroundColor: 'lightgrey',
		borderRadius: 5,
		margin: 7,
	},

	separator: {
		marginVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
