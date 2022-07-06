import { View, Text, StyleSheet, Pressable } from 'react-native';
import colors from '../../utils/colors';

interface IFormFooter {
	mainButtonText: string;
	secondaryButtonText: string;
	navigationFunction: () => void;
	mainButtonFunction?: () => void;
}

export default function AccountFooter({
	mainButtonText,
	secondaryButtonText,
	navigationFunction,
	mainButtonFunction,
}: IFormFooter) {
	return (
		<View style={{ flex: 1, width: '85%' }}>
			<Pressable
				style={[styles.button, { backgroundColor: colors.mainColor }]}
				android_ripple={{ color: colors.rippleColor }}
				onPress={mainButtonFunction}
			>
				<Text style={{ color: '#fff', fontFamily: 'Roboto_700Bold' }}>{mainButtonText}</Text>
			</Pressable>
			<View style={styles.separator}>
				<View style={styles.lineSeparator}></View>
				<Text style={{ color: '#a0a0a0' }}>OR</Text>
				<View style={styles.lineSeparator}></View>
			</View>
			<Pressable
				style={[styles.button, { backgroundColor: '#fff' }]}
				android_ripple={{ color: colors.rippleColor }}
				onPress={navigationFunction}
			>
				<Text style={{ color: colors.mainColor, fontFamily: 'Roboto_700Bold' }}>
					{secondaryButtonText}
				</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		width: '100%',
		height: 40,
		borderRadius: 7,
		alignItems: 'center',
		justifyContent: 'center',
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
