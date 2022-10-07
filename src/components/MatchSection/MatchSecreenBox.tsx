import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface MatchScreenBoxProps {
	matchType: string;
	matchDate: string;
	duration: string;
	won: boolean;
}

export default function MatchScreenBox(props: MatchScreenBoxProps) {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={[styles.container, { backgroundColor: props.won ? '#3563cd' : '#f55a70' }]}
		>
			<View style={[styles.MatchType]}>
				<Text style={{ fontWeight: 'bold' }}>{props.matchType}</Text>
			</View>
			<View style={styles.matchDate}>
				<Text style={{ color: '#fff' }}>{props.matchDate}</Text>
			</View>
			<View style={{ paddingHorizontal: 20 }}>
				<Text style={{ color: '#fff' }}>{props.duration}</Text>
			</View>
			<View style={styles.seeDetailsContainer}>
				<Text style={styles.seeDetailsText}>See details</Text>
				<AntDesign name="rightcircle" size={18} color="white" />
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		padding: 8,
		paddingBottom: 12,
		width: '80%',
		borderRadius: 5,
	},

	MatchType: {
		backgroundColor: '#fff',
		padding: 7,
		width: 60,
		borderRadius: 3,
		alignItems: 'center',
	},

	matchDate: {
		paddingHorizontal: 20,
		alignItems: 'flex-end',
	},

	seeDetailsContainer: {
		flexDirection: 'row',
		paddingHorizontal: 20,
		justifyContent: 'flex-end',
	},

	seeDetailsText: {
		color: '#fff',
		marginRight: 5,
		fontWeight: 'bold',
	},
});
