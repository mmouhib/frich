import { View, StyleSheet, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import colors from '../../utils/colors';
import { useSelector, useDispatch } from 'react-redux';
import ProceedButton from '../../components/Account/ProceedButton';
import { useState } from 'react';
import { IPlayerNameStruct, NavigationPropTypes } from '../../types/types';
import { alterPlayersNames } from '../../redux/features/matchSettingsSlice';

/**
 * the following function checks if a given key exists on the array or not
 * for example: if given index 0, it will return if the first player's key which
 * is 0, exists or not, if it does it will replace its value, otherwise it will add it
 * @returns boolean
 */
const containsKey = (key: number, array: IPlayerNameStruct[]): boolean => {
	for (let index = 0; index < array.length; index++) {
		if (array[index].key == key) return true;
	}
	return false;
};

/**
 * the following checks if playersNames array follows the wanted form (result):
 * - contains all the players names (its length = players number chosen from the previous screen)
 * - all players names are not empty strings
 * @param playersCount number
 * @param array IPlayerNameStruct
 * @returns boolean
 */
const validArray = (playersCount: number, array: IPlayerNameStruct[]): boolean => {
	if (array.length < playersCount) {
		return false;
	}
	for (let index = 0; index < array.length; index++) {
		if (array[index].value == '') {
			return false;
		}
	}
	return true;
};

interface IPlayersNamesSelection {
	navigation: NavigationPropTypes['navigation'];
}

export default function PlayersNameSelection({ navigation }: IPlayersNamesSelection): JSX.Element {
	const playersCount = useSelector((state: any) => state.matchSettings.value.playersCount);
	const dispatch = useDispatch();

	const [playersNames, setPlayersNames] = useState<IPlayerNameStruct[]>([]);

	return (
		<KeyboardAvoidingView style={styles.container} behavior="height">
			<View style={{ width: '80%' }}>
				<View style={{ marginBottom: 15 }}>
					<Text style={styles.headingText}>Players Names</Text>
					<Text style={styles.text}>Enter the participating players' names</Text>
				</View>

				<View>
					{[...Array(playersCount)].map((element, index: number) => (
						<View key={index} style={{ marginVertical: 15 }}>
							<Text style={styles.inputLabel}>Player {index + 1}'s name</Text>
							<TextInput
								style={styles.input}
								onChangeText={(newValue: string) => {
									if (containsKey(index, playersNames)) {
										/**
										 * the following block checks if the current index of the mapped array
										 * exists or not in the playersNames array state, if it does then it will
										 * need to be replaced by the new input value, if not it will be added to
										 * the playersNames array.
										 */
										let tempArray: IPlayerNameStruct[];
										tempArray = playersNames.map(function (item) {
											return item.key == index
												? ({ key: index, value: newValue } as IPlayerNameStruct)
												: item;
										});
										setPlayersNames(tempArray);
									} else {
										setPlayersNames([{ key: index, value: newValue }, ...playersNames]);
									}
								}}
							/>
						</View>
					))}
				</View>

				<ProceedButton
					buttonDisabled={false}
					onPress={() => {
						if (validArray(playersCount, playersNames)) {
							dispatch(alterPlayersNames(playersNames));
							navigation.navigate('MatchSettings');
						}
						// todo: display error messages when the validArray is false
					}}
				/>
			</View>
		</KeyboardAvoidingView>
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

	input: {
		height: 40,
		padding: 10,
		borderWidth: 1,
		borderRadius: 4,
		borderColor: 'transparent',
		backgroundColor: colors.lightGlass,
	},

	inputLabel: {
		color: '#aaa',
		marginVertical: 3,
	},
});
