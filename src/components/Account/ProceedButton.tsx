import { Pressable, StyleSheet, Text } from 'react-native';
import colors from '../../utils/colors';

export default function ProceedButton({ text }: { text: string }) {
	return (
		<Pressable style={styles.proceedButton} android_ripple={{ color: colors.rippleColor }}>
			<Text style={styles.buttonText}>{text}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	proceedButton: {
		width: '100%',
		padding: 10,
		marginTop: 10,
		backgroundColor: colors.mainColor,
		borderRadius: 5,
	},

	buttonText: {
		textAlign: 'center',
		color: '#fff',
		fontWeight: '500',
	},
});
