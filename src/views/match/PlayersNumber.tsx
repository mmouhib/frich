import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import TypeSelection from '../../components/CustomComponents/TypeSelection';
import colors from '../../utils/colors';
import { useDispatch, useSelector } from 'react-redux';
import { alterPlayersCount } from '../../redux/features/matchSettingsSlice';
import { NavigationPropTypes } from '../../types/types';
import ProceedButton from '../../components/Account/ProceedButton';

export default function PlayersNumber({
	navigation,
}: {
	navigation: NavigationPropTypes['navigation'];
}) {
	const [selections, setSelections] = useState<boolean[]>([false, false, false]);
	const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

	//const matchSettings = useSelector((state: any) => state.matchSettings.value);
	const dispatch = useDispatch();

	useEffect(() => {
		/**
		 * set the playersCount redux value to the correct index of selected option:
		 * here we add 2 to the value because:
		 * 1 for because the array index starts with 0
		 * and the other 1 is because the player count starts with 1 not 0
		 * because we took consideration of the host who is the first player
		 * */
		dispatch(alterPlayersCount(selections.indexOf(true) + 2));
		//make button active after selecting an option
		selections.includes(true) ? setButtonDisabled(false) : setButtonDisabled(true);
	}, [selections]);

	return (
		<View style={styles.container}>
			<View style={{ width: '80%' }}>
				<Text style={styles.headingText}>Number of players</Text>
				<Text style={styles.text}>
					Choose the number of players participating in this match.
				</Text>
			</View>

			<View style={{ width: '100%', alignItems: 'center' }}>
				<TypeSelection
					title="Two players"
					description="Play a match against another player"
					selected={selections[0]}
					_onPress={() => {
						setSelections([true, false, false]);
					}}
				/>
				<TypeSelection
					title="Three players"
					description="Play a match against 2 other players"
					selected={selections[1]}
					_onPress={() => {
						setSelections([false, true, false]);
					}}
				/>
				<TypeSelection
					title="Four players"
					description="Play a match against 3 other players"
					selected={selections[2]}
					_onPress={() => {
						setSelections([false, false, true]);
					}}
				/>
				<View style={{ width: '85%' }}>
					<ProceedButton
						buttonDisabled={buttonDisabled}
						onPress={() => {
							navigation.navigate('PlayersNameSelection');
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
