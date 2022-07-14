import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../utils/colors';

export default function FinalSliderFooter({ navigation }: { navigation: any }) {
	return (
		<View>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('Login');
				}}
				style={styles.button}
			>
				<Text style={{ color: '#fff' }}>Proceed to account</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		width: '60%',
		backgroundColor: colors.mainColor,
		padding: 10,
		borderRadius: 10,
	},
});
