import { View, StyleSheet } from 'react-native';
import welcomeScreenData from '../../constants/welcomeData';

export default function DotsSlider({ selectedIndex }: { selectedIndex: number }) {
	return (
		<View style={styles.container}>
			{welcomeScreenData.map((_, index) => {
				return (
					<View
						key={index} // index as a key because the list is static
						style={[
							styles.dot,
							selectedIndex == index && {
								backgroundColor: '#509ce4',
								width: 17,
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
		height: 5,
		width: 12,
		borderRadius: 12 / 2,
		marginHorizontal: 4,
		backgroundColor: '#aaa',
	},
});
