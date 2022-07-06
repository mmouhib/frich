import { View, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import WelcomeData from '../../constants/welcomeData';

interface ISlidesNavigator {
	currentPageIndex: number;
	scrollToIndex: (arg: number) => void;
	navigation: any;
}

/**
 * the following fn calculates the needed border width
 * for the arrow navigator to match the current page
 */
function borderStyleShorthand(pageIndex: number, borderWidth: number): object {
	switch (pageIndex) {
		case 1:
			return {
				borderTopWidth: borderWidth,
				borderRightWidth: borderWidth,
			};
		case 2:
			return {
				borderTopWidth: borderWidth,
				borderRightWidth: borderWidth,
				borderBottomWidth: borderWidth,
			};
		case 3:
			return { borderWidth: borderWidth };
		default:
			return {};
	}
}

export default function SlidesNavigator({
	currentPageIndex,
	scrollToIndex,
	navigation,
}: ISlidesNavigator) {
	const BORDER_WIDTH = 3;

	const WELCOME_DATA_LENGTH: number = WelcomeData.length;

	/*
	 todo: make a function that calculates the percentage of the index
	  from the length of the welcomeData list instead of hard coding them (in lines 20 -> 26)
	 */

	const _onPress = () => {
		currentPageIndex == WELCOME_DATA_LENGTH - 1 && navigation.navigate('Login');
		currentPageIndex < WELCOME_DATA_LENGTH - 1 && scrollToIndex(currentPageIndex + 1);
	};

	return (
		<Pressable style={styles.container} onPress={_onPress}>
			<View style={[styles.iconContainer, borderStyleShorthand(currentPageIndex, BORDER_WIDTH)]}>
				<Feather borderRadius={50} name="arrow-right" size={24} color="#509ce4" />
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	iconContainer: {
		marginBottom: 13,
		width: 50,
		marginTop: 25,
		padding: 10,
		borderRadius: 25,
		borderColor: '#509ce4',
	},
});
