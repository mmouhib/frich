import { View, StyleSheet } from 'react-native';
import welcomeScreenData from '../../constants/welcomeData';
import colors from '../../utils/colors';

export default function DotsSlider({ selectedIndex }: { selectedIndex: number }) {
	return (
		<View style={styles.container}>
			{welcomeScreenData.map((_, index) => {
				return (
					<View
						key={index}
						style={[styles.dot, selectedIndex == index && styles.selectedDot]}
					></View>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 50,
		flexDirection: 'row',
		justifyContent: 'center',
	},

	dot: {
		height: 6,
		width: 17,
		borderRadius: 6 / 2,
		marginHorizontal: 4,
		backgroundColor: '#aaa',
	},

	selectedDot: {
		width: 30,
		backgroundColor: colors.mainColor,
	},
});
