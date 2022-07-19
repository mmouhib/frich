import {
	Text,
	View,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	KeyboardAvoidingView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../utils/colors';
import { useState } from 'react';

interface ISettingsBox {
	label: string;
	settingValue: number;
	setValue: (arg: number) => void;
	increaseBy: number;
}

function SettingsBox({ label, settingValue, setValue, increaseBy }: ISettingsBox): JSX.Element {
	const digitsOnlyRegEx = new RegExp('^[0-9]+$');

	const increase = (): void => {
		setValue(settingValue + increaseBy);
	};

	const decrease = (): void => {
		settingValue - increaseBy >= 0 ? setValue(settingValue - increaseBy) : setValue(0);
	};

	return (
		<View style={_styles.SettingsBoxContainer}>
			<View style={_styles.SettingsBox}>
				<TouchableOpacity style={_styles.iconContainer} onPress={decrease}>
					<AntDesign name="minus" size={24} color={colors.mainColor} />
				</TouchableOpacity>
				<View style={_styles.valueContainer}>
					<TextInput
						value={settingValue.toString()}
						keyboardType="number-pad"
						onChangeText={(newValue: string) => {
							digitsOnlyRegEx.test(newValue) ? setValue(parseInt(newValue)) : setValue(0);
						}}
					/>
					<Text style={{ fontWeight: '600' }}>{label}</Text>
				</View>
				<TouchableOpacity style={_styles.iconContainer} onPress={increase}>
					<AntDesign name="plus" size={24} color={colors.mainColor} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default function MatchSettings(): JSX.Element {
	const scoringRules = useSelector((state: any) => state.matchSettings.value.scoringRules);
	const dispatch = useDispatch();

	const [kabbout, setKabbout] = useState<number>(scoringRules.kabbout);
	const [jokeFiyeddek, setJokeFiyeddek] = useState<number>(scoringRules.jokerFiYeddek);
	const [jokeMfadhel, setJokeMfadhel] = useState<number>(scoringRules.jokerMfadhel);
	const [place, setPlace] = useState<number>(scoringRules.place);

	//todo: add save button and sync the values with redux when pressing it.
	//todo: fix 'KeyboardAvoidingView' layout

	return (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
			<View style={styles.container}>
				<View style={{ marginLeft: 10, width: '85%' }}>
					<Text style={styles.headingTextTitle}>Change match scoring</Text>
				</View>
				<Text style={styles.headingTextContent}>
					Edit how you want the scoring to be to fit your pereferences.
				</Text>

				<SettingsBox
					label="kabbout"
					settingValue={kabbout}
					setValue={setKabbout}
					increaseBy={5}
				/>
				<SettingsBox
					label="Joker fi yedek"
					settingValue={jokeFiyeddek}
					setValue={setJokeFiyeddek}
					increaseBy={5}
				/>
				<SettingsBox
					label="Joker mfadhel"
					settingValue={jokeMfadhel}
					setValue={setJokeMfadhel}
					increaseBy={5}
				/>
				<SettingsBox label="place" settingValue={place} setValue={setPlace} increaseBy={5} />
			</View>
		</KeyboardAvoidingView>
	);
}

// _styles is for the SettingsBox container
const _styles = StyleSheet.create({
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		justifyContent: 'center',
	},

	headingTextTitle: {
		fontWeight: '600',
		fontSize: 25,
		marginBottom: 10,
		color: colors.mainColor,
	},

	headingTextContent: {
		fontWeight: '500',
		fontSize: 14,
	},
});
