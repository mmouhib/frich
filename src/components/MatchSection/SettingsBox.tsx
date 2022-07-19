import { TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../utils/colors';

interface ISettingsBox {
	label: string;
	settingValue: number;
	setValue: (arg: number) => void;
	increaseBy: number;
}

export default function SettingsBox({
	label,
	settingValue,
	setValue,
	increaseBy,
}: ISettingsBox): JSX.Element {
	const digitsOnlyRegEx = new RegExp('^[0-9]+$');

	const increase = (): void => {
		setValue(settingValue + increaseBy);
	};

	const decrease = (): void => {
		settingValue - increaseBy >= 0 ? setValue(settingValue - increaseBy) : setValue(0);
	};

	return (
		<View style={styles.SettingsBoxContainer}>
			<View style={styles.SettingsBox}>
				<TouchableOpacity style={styles.iconContainer} onPress={decrease}>
					<AntDesign name="minus" size={24} color={colors.mainColor} />
				</TouchableOpacity>
				<View style={styles.valueContainer}>
					<TextInput
						value={settingValue.toString()}
						keyboardType="number-pad"
						onChangeText={(newValue: string) => {
							digitsOnlyRegEx.test(newValue) ? setValue(parseInt(newValue)) : setValue(0);
						}}
					/>
					<Text style={{ fontWeight: '600' }}>{label}</Text>
				</View>
				<TouchableOpacity style={styles.iconContainer} onPress={increase}>
					<AntDesign name="plus" size={24} color={colors.mainColor} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	SettingsBoxContainer: {
		width: '100%',
		backgroundColor: '#fff',
		height: 60,
		marginTop: 60,
		borderRadius: 7,
		alignItems: 'center',
		justifyContent: 'center',
	},

	SettingsBox: {
		width: '80%',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},

	iconContainer: {
		height: 35,
		width: 35,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#e7e7e7ba',
		borderRadius: 100,
	},

	valueContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});
