import { IHomeScreenData } from '../../types/types';
import { View, Text, StyleSheet, useWindowDimensions, Image, ScaledSize } from 'react-native';

interface IWelcomeListItem {
	data: IHomeScreenData;
	currentPageIndex: number;
}

export default function WelcomeListItem({ data, currentPageIndex }: IWelcomeListItem) {
	const { height, width }: ScaledSize = useWindowDimensions();
	return (
		<View style={[styles.welcomeItemContainer, { width: width, height: height / 1.2 }]}>
			<View style={styles.titleContainer}>
				<Text style={styles.titleText}>{data.title}</Text>
			</View>

			<View style={{ flex: 2 }}>
				<Image
					source={data.image}
					style={{ width: width - width / 7, flex: 1 }}
					resizeMode="contain"
				/>
			</View>

			<View style={styles.descriptionContainer}>
				<Text style={styles.decriptionText}>{data.description}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	welcomeItemContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	titleContainer: {
		flex: 1,
		justifyContent: 'center',
		width: '90%',
	},

	descriptionContainer: {
		flex: 1,
		justifyContent: 'center',
		width: '80%',
	},

	titleText: {
		color: '#3982c5',
		paddingTop: 30,
		fontSize: 23,
		fontWeight: '900',
		textTransform: 'uppercase',
		textAlign: 'center',
	},

	decriptionText: {
		fontSize: 16,
		textAlign: 'center',
		color: '#9b9b9b',
	},
});
