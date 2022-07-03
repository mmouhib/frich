import { View, StyleSheet } from 'react-native';
import welcomeScreenData from '../../constants/welcomeData';

export default function DotsSlider({ selectedIndex }: { selectedIndex: number }) {
	return (
		<View style={styles.container}>
			{welcomeScreenData.map((_, index) => {
				return (
					<View
						key={index}
						style={[
							styles.dot,
							selectedIndex == index && {
								backgroundColor: '#509ce4',
								width: 30,
							},
						]}
					></View>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
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
});
