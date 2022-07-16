import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IStackParamList } from '../../types/types';

type PropTypes = NativeStackScreenProps<IStackParamList, 'Welcome'>;

export default function FinalSliderFooter() {
	const navigation = useNavigation<PropTypes['navigation']>();

	const _onPress = (): void => {
		navigation.navigate('Login');
	};

	return (
		<View>
			<TouchableOpacity onPress={_onPress} style={styles.button}>
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
