import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import WelcomeData from '../../constants/welcomeData';
import colors from '../../utils/colors';

interface ISlidesNavigator {
	currentPageIndex: number;
	scrollToIndex: (arg: number) => void;
}

export default function SlidesNavigator({ currentPageIndex, scrollToIndex }: ISlidesNavigator) {
	const WELCOME_DATA_LENGTH: number = WelcomeData.length;

	const gotoNextSlide = () => {
		if (!(currentPageIndex == WELCOME_DATA_LENGTH - 1)) {
			scrollToIndex(currentPageIndex + 1);
		}
	};

	const gotoLastIndex = () => {
		scrollToIndex(WELCOME_DATA_LENGTH - 1);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={gotoLastIndex} style={[styles.button, styles.secondaryButton]}>
				<Text style={{ color: '#000', fontWeight: 'normal' }}>Skip</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={gotoNextSlide} style={[styles.button, styles.mainButton]}>
				<Text style={{ color: '#fff' }}>Next</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	button: {
		width: '30%',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 7,
	},

	mainButton: {
		backgroundColor: colors.mainColor,
		borderTopLeftRadius: 30,
		borderBottomLeftRadius: 30,
	},

	secondaryButton: {
		backgroundColor: '#e8e4ec',
		borderTopRightRadius: 30,
		borderBottomRightRadius: 30,
	},
});
