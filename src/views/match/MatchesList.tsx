import { View, StyleSheet } from 'react-native';
import MatchScreenBox from '../../components/MatchSection/MatchSecreenBox';

export interface MatchScreenProps {
	matchType: string;
	matchDate: string;
	duration: string;
	won: boolean;
}

export default function MatchesList() {
	let matchBoxProps = {
		matchType: 'Zwez',
		matchDate: '11/3/2022',
		duration: '24 minutes',
		won: true,
	} as MatchScreenProps;

	return (
		<View style={styles.container}>
			<MatchScreenBox data={matchBoxProps} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
});
