import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { alterscoringRules } from '../../redux/features/matchSettingsSlice';
import colors from '../../utils/colors';
import { useState } from 'react';
import SettingsBox from '../../components/MatchSection/SettingsBox';
import { IScoring, IStackParamList } from '../../types/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type navigationType = NativeStackScreenProps<IStackParamList, 'MatchSettings'>['navigation'];

export default function MatchSettings(): JSX.Element {
	const scoringRules = useSelector((state: any) => state.matchSettings.value.scoringRules);
	const dispatch = useDispatch();
	const navigation = useNavigation<navigationType>();

	const [kabbout, setKabbout] = useState<number>(scoringRules.kabbout);
	const [jokeFiyeddek, setJokeFiyeddek] = useState<number>(scoringRules.jokerFiYeddek);
	const [jokeMfadhel, setJokeMfadhel] = useState<number>(scoringRules.jokerMfadhel);
	const [place, setPlace] = useState<number>(scoringRules.place);

	const matchSettingsSync = (): void => {
		dispatch(
			alterscoringRules({
				kabbout: kabbout,
				jokerFiYeddek: jokeFiyeddek,
				jokerMfadhel: jokeMfadhel,
				place: place,
			} as IScoring)
		);

		navigation.navigate('Login');
	};

	return (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
			<View style={styles.container}>
				<View>
					<View style={{ marginLeft: 10, width: '85%' }}>
						<Text style={styles.headingTextTitle}>Change match scoring</Text>
					</View>
					<View style={{ marginLeft: 10, width: '85%' }}>
						<Text style={styles.headingTextContent}>
							Edit how you want the score to be calculated in order to fit your pereferences.
						</Text>
					</View>
				</View>

				<View>
					<SettingsBox
						label="Kabbout"
						settingValue={kabbout}
						setValue={setKabbout}
						increaseBy={50}
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
					<SettingsBox label="Place" settingValue={place} setValue={setPlace} increaseBy={5} />
				</View>

				<TouchableOpacity style={styles.matchSettingsFooter} onPress={matchSettingsSync}>
					<View style={styles.saveButton}>
						<Text style={styles.buttonText}>Save</Text>
					</View>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
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

	matchSettingsFooter: {
		marginTop: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},

	saveButton: {
		padding: 10,
		width: '100%',
		borderRadius: 5,
		alignItems: 'center',
		backgroundColor: colors.mainColor,
	},

	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 15,
	},
});
