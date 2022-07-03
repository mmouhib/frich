import { IHomeScreenData } from '../../types/types';
import { View, Text, StyleSheet, useWindowDimensions, Image, ScaledSize } from 'react-native';
import useDimentions from '../../hooks/useDimensions';

export default function WelcomeListItem({ data }: { data: IHomeScreenData }) {
	const { exactWidth } = useDimentions();

	return (
		<View style={[styles.container, { width: exactWidth }]}>
			<View style={styles.textContainer}>
				<Text style={styles.titleText}>{data.title}</Text>
			</View>

			<View
				style={{
					width: '90%',
					height: '50%',
				}}
			>
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
