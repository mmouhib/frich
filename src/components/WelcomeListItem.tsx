import { IHomeScreenData } from '../types';
import { View, Text, StyleSheet, useWindowDimensions, Image, ScaledSize } from 'react-native';

export default function WelcomeListItem({ data }: { data: IHomeScreenData }) {
	const { height, width }: ScaledSize = useWindowDimensions();
	return (
		<View style={[styles.welcomeItemContainer, { width: width, height: height / 1.2 }]}>
			<View style={styles.titleContainer}>
				<Text style={styles.titleText}>{data.title}</Text>
			</View>

			<View style={{ flex: 2 }}>
				<Image source={data.image} style={{ width: width - width / 7, flex: 1 }} />
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
	},

	descriptionContainer: {
		flex: 1,
		justifyContent: 'center',
		width: '80%',
	},

	titleText: {
		paddingTop: 30,
		fontSize: 26,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		textAlign: 'center',
	},

	decriptionText: {
		fontSize: 15,
		textAlign: 'center',
		color: 'lightgrey',
	},
});
