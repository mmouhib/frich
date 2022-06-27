import { View, StyleSheet } from 'react-native';
import welcomeScreenData from '../welcomeData';

export default function DotsSlider({ selectedIndex }: { selectedIndex: number }) {
	return (
		<View style={styles.container}>
			{welcomeScreenData.map((_, index) => {
				//the list is static so using the index as a key is harmless.
				return (
					<View
						style={[
							styles.dot,
							{ backgroundColor: selectedIndex == index ? '#509ce4' : '#aaa' },
						]}
						key={index}></View>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},

	dot: {
		height: 12,
		width: 12,
		borderRadius: 12 / 2,
		marginHorizontal: 4,
	},
});
