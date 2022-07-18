import { View, StyleSheet, Text, Pressable } from 'react-native';
import colors from '../../utils/colors';
import TypeSelection from '../../components/CustomComponents/TypeSelection';
import { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { alterMatchType } from '../../redux/features/matchSettingsSlice';
import { NavigationPropTypes } from '../../types/types';
import ProceedButton from '../../components/Account/ProceedButton';

export default function MatchType({
	navigation,
}: {
	navigation: NavigationPropTypes['navigation'];
}) {
	//const matchSettings = useSelector((state: any) => state.matchSettings.value);
	const dispatch = useDispatch();

	const [selections, setSelections] = useState<boolean[]>([false, false]);
	const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

	useEffect(() => {
		//set the value of the matchType redux value to the index+1 of selected option
		dispatch(alterMatchType(selections.indexOf(true) + 1));
		//make button active after selecting an option
		selections.includes(true) ? setButtonDisabled(false) : setButtonDisabled(true);
	}, [selections]);

	return (
		<View style={styles.container}>
			<View style={{ width: '80%' }}>
				<Text style={styles.headingText}>Match type</Text>
				<Text style={styles.text}>Choose the type of the match that you'd like to play.</Text>
			</View>

			<View style={{ width: '100%', alignItems: 'center' }}>
				<TypeSelection
					title="Adwez"
					description="Play a match with the rules of 'Adwez'"
					selected={selections[0]}
					_onPress={() => {
						setSelections([true, false]);
					}}
				/>
				<TypeSelection
					title="Kbabet"
					description="Play a match with the rules of 'Kbabet'"
					selected={selections[1]}
					_onPress={() => {
						setSelections([false, true]);
					}}
				/>

				<View style={{ width: '85%' }}>
					<ProceedButton
						buttonDisabled={buttonDisabled}
						onPress={() => {
							navigation.navigate('PlayersNumber');
						}}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},

	headingText: {
		fontFamily: 'Mukta_600SemiBold',
		color: colors.mainColor,
		fontSize: 30,
	},

	text: {
		color: '#a1a1a1',
		fontFamily: 'Mukta_500Medium',
	},
});
