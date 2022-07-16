import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import TypeSelection from '../../components/CustomComponents/TypeSelection';
import colors from '../../utils/colors';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { alterPlayersCount } from '../../redux/features/matchSettingsSlice';
import { NavigationPropTypes } from '../../types/types';

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
		//set the playersCount redux value to the correct index of selected option
		dispatch(alterPlayersCount(selections.indexOf(true) + 1));
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

				<Pressable
					pointerEvents={buttonDisabled ? 'none' : 'auto'}
					style={[
						styles.button,
						{ backgroundColor: buttonDisabled ? '#bbbbbb' : colors.mainColor },
					]}
					android_ripple={{ color: colors.rippleColor }}
					onPress={() => {
						navigation.navigate('MatchType');
					}}
				>
					<Text style={{ color: '#fff', fontFamily: 'Roboto_700Bold', marginRight: 10 }}>
						Proceed
					</Text>
					<AntDesign name="arrowright" size={20} color="#fff" />
				</Pressable>
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

	button: {
		marginTop: 10,
		width: '85%',
		height: 45,
		borderRadius: 7,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
