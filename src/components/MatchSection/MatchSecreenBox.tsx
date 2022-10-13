import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface MatchScreenBoxProps {
	matchType: string;
	matchDate: string;
	duration: string;
	won: boolean;
	score: number;
}

export default function MatchScreenBox(props: MatchScreenBoxProps) {
	return (
		<TouchableOpacity activeOpacity={0.7} style={styles.container}>
			<View style={[styles.MatchType, { backgroundColor: props.won ? 'blue' : '#ff0000' }]}>
				<Text style={styles.matchTypeText}>{props.matchType}</Text>
			</View>
			<View style={styles.matchDate}>
				<Text style={styles.detailName}>Date: </Text>
				<Text style={{ fontSize: 16 }}>{props.matchDate}</Text>
			</View>
			<View>
				<Text>
					<Text style={styles.detailName}>Duration: </Text>
					<Text style={{ fontSize: 16 }}>{props.duration}</Text>
				</Text>
			</View>
			<View style={styles.seeDetailsContainer}>
				<Text style={[styles.seeDetailsText, { color: props.won ? 'blue' : '#ff0000' }]}>
					See details
				</Text>

				<AntDesign name="rightcircle" size={20} color={props.won ? 'blue' : '#ff0000'} />
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '86%',
		borderRadius: 8,
		backgroundColor: '#ececec',
		elevation: 13,
		padding: 25,
		marginBottom: 25,
	},

	MatchType: {
		padding: 7,
		width: 60,
		borderRadius: 3,
		alignItems: 'center',
	},

	matchTypeText: {
		fontSize: 16,
		color: '#fff',
		fontWeight: '800',
	},

	matchDate: {
		justifyContent: 'flex-end',
		flexDirection: 'row',
	},

	seeDetailsContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		borderBottomRightRadius: 7,
		borderBottomLeftRadius: 7,
	},

	seeDetailsText: {
		fontSize: 16,
		fontWeight: 'bold',
		marginRight: 12,
	},

	detailName: {
		color: '#7f7e7e',
		fontSize: 16,
		fontWeight: '600',
	},
});
