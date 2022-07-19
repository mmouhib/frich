import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../utils/colors';
import { useState } from 'react';
import SettingsBox from '../../components/MatchSection/SettingsBox';

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
