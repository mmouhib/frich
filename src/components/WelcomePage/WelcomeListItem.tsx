import { IHomeScreenData } from '../../types/types';
import { View, Text, StyleSheet, Image } from 'react-native';
import useDimensions from '../../hooks/useDimensions';

export default function WelcomeListItem({ data }: { data: IHomeScreenData }) {
	const { exactWidth } = useDimensions();

	return (
		<View style={[styles.container, { width: exactWidth }]}>
			<View style={styles.textContainer}>
				<Text style={styles.titleText}>{data.title}</Text>
			</View>

			<View style={styles.imageContainer}>
				<Image
					source={data.image}
					style={{ width: '100%', height: '100%' }}
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
	container: {
		flex: 1,
		alignItems: 'center',
		height: '100%',
		paddingTop: 30,
	},

	imageContainer: {
		width: '90%',
		height: '50%',
	},

	textContainer: {
		justifyContent: 'center',
		width: '75%',
		height: '25%',
	},

	titleText: {
		color: '#3982c5',
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
