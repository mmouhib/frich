import { StyleSheet, Text, Pressable } from 'react-native';
import colors from '../../utils/colors';
import { AntDesign } from '@expo/vector-icons';

interface IProceedButton {
	buttonDisabled: boolean;
	onPress: () => void;
}

export default function ProceedButton({ buttonDisabled, onPress }: IProceedButton) {
	return (
		<Pressable
			pointerEvents={buttonDisabled ? 'none' : 'auto'}
			style={[styles.button, { backgroundColor: buttonDisabled ? '#bbbbbb' : colors.mainColor }]}
			android_ripple={{ color: colors.rippleColor }}
			onPress={onPress}
		>
			<Text style={{ color: '#fff', fontFamily: 'Roboto_700Bold', marginRight: 10 }}>
				Proceed
			</Text>
			<AntDesign name="arrowright" size={20} color="#fff" />
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		marginTop: 10,
		width: '100%',
		height: 45,
		borderRadius: 7,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
