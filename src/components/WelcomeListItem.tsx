import { IHomeScreenData } from '../../types';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
// @ts-ignore
import Friends from '../../assets/WelcomePage/save.svg';

export default function WelcomeListItem({ data }: { data: IHomeScreenData }) {
	return (
		<View style={styles.itemContainer}>
			<View style={{ flex: 0.2 }}>
				<Text style={styles.title}>{data.title}</Text>
			</View>

			<View style={{ flex: 0.6 }}>
				<Friends />
			</View>

			<View style={{ flex: 0.2 }}>
				<Text style={styles.description}>{data.description}</Text>
			</View>
		</View>
	);
}

interface IStyles {
	imageContainer: ViewStyle;
	itemContainer: ViewStyle;
	title: TextStyle;
	description: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
	itemContainer: {
		// padding: 60,
		flex: 1,
		// width: '100%',
		// height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},

	imageContainer: {
		flex: 0.6,
		// borderWidth: 3,
		// borderStyle: 'solid',
		// borderColor: 'blue',
	},

	title: {
		flex: 0.2,
		// paddingBottom: 30,
		fontWeight: 'bold',
		fontSize: 30,
	},

	description: {
		flex: 0.2,
		// paddingTop: 20,
		textAlign: 'center',
		fontSize: 15,
		fontWeight: '400',
		color: 'darkgrey',
	},
});
