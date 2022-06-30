import { IHomeScreenData } from '../../types/types';
import { View, Text, StyleSheet, useWindowDimensions, Image, ScaledSize } from 'react-native';

interface IWelcomeListItem {
	data: IHomeScreenData;
}

export default function WelcomeListItem({ data }: IWelcomeListItem) {
	const { height, width }: ScaledSize = useWindowDimensions();
	return (
		<View style={[styles.welcomeItemContainer, { width: width, height: height / 1.2 }]}>
			<View style={styles.textContainer}>
				<Text style={styles.titleText}>{data.title}</Text>
			</View>

			<View style={{ flex: 2 }}>
				<Image
					source={data.image}
					style={{ width: width - width / 7, flex: 1 }}
					resizeMode="contain"
				/>
			</View>

			<View style={styles.textContainer}>
				<Text style={styles.descriptionText}>{data.description}</Text>
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

	textContainer: {
		flex: 1,
		justifyContent: 'center',
		width: '75%',
	},

	titleText: {
		color: '#3982c5',
		paddingTop: 30,
		fontSize: 30,
		fontWeight: '600',
		textAlign: 'center',
	},

	descriptionText: {
		fontSize: 17,
		textAlign: 'center',
		color: '#8a8888',
	},
});
