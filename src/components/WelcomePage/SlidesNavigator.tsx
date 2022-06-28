import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface ISlidesNavigator {
	currentPageIndex: number;
}

export default function SlidesNavigator({ currentPageIndex }: ISlidesNavigator) {
	const borderWith = 3;

	/*
	 todo: todo: make a function that calculates the percentage of the index
	  from the length of the welcomeData list instead of hard coding them (in lines 20 -> 26)
	 */

	return (
		<View
			style={[
				styles.container,
				currentPageIndex == 1 && { borderTopWidth: borderWith, borderRightWidth: borderWith },
				currentPageIndex == 2 && {
					borderTopWidth: borderWith,
					borderRightWidth: borderWith,
					borderBottomWidth: borderWith,
				},
				currentPageIndex == 3 && { borderWidth: borderWith },
			]}
		>
			<Feather name="arrow-right" size={24} color="#509ce4" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 50,
		marginTop: 35,
		padding: 10,
		borderStyle: 'solid',
		borderRadius: 25,
		borderColor: '#509ce4',
	},
});
