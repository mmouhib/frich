import { View, StyleSheet, Text, ScrollView } from 'react-native';
import MatchScreenBox from '../../components/MatchSection/MatchSecreenBox';
import colors from '../../utils/colors';

export default function MatchesList() {
	return (
		<View style={styles.container}>
			<ScrollView
				style={styles.scrollViewContainer}
				contentContainerStyle={{ alignItems: 'center' }}
			>
				<Text style={styles.titleText}>match Log</Text>
				{[...Array(6)].map((_, index) => {
					return (
						<MatchScreenBox
							score={750}
							matchType="Zwez"
							matchDate="11/3/2022"
							duration="24 minutes"
							won={index % 2 == 0}
						/>
					);
				})}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ffffff',
		flex: 1,
		paddingTop: 25,
	},

	titleText: {
		fontWeight: 'bold',
		color: colors.mainColor,
		fontSize: 22,
		textTransform: 'uppercase',
		margin: 20,
	},
	scrollViewContainer: {
		flex: 1,
		width: '100%',
	},
});
