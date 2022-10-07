import { View, StyleSheet, Text } from 'react-native';
import MatchScreenBox from '../../components/MatchSection/MatchSecreenBox';
import colors from '../../utils/colors';

export default function MatchesList() {
	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>match history</Text>
			<MatchScreenBox matchType="Zwez" matchDate="11/3/2022" duration="24 minutes" won={true} />
			<MatchScreenBox matchType="Zwez" matchDate="11/3/2022" duration="24 minutes" won={false} />
			<MatchScreenBox matchType="Zwez" matchDate="11/3/2022" duration="1 Hour" won={true} />
			<MatchScreenBox matchType="Zwez" matchDate="11/3/2022" duration="24 minutes" won={true} />
			<MatchScreenBox matchType="Zwez" matchDate="11/3/2022" duration="24 minutes" won={false} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ffffff',
		flex: 1,
		alignItems: 'center',
		paddingTop: 25,
	},

	titleText: {
		fontWeight: 'bold',
		color: colors.mainColor,
		fontSize: 22,
		textTransform: 'uppercase',
	},
});
