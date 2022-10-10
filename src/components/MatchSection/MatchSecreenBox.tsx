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
		<TouchableOpacity activeOpacity={0.7} style={styles.container}>
			<View style={styles.MatchType}>
				<Text style={styles.matchTypeText}>{props.matchType}</Text>
			</View>
			<View style={styles.matchDate}>
				<Text style={{ color: '#7f7e7e' }}>Date: </Text>
				<Text>{props.matchDate}</Text>
			</View>
			<View style={{ paddingHorizontal: 20 }}>
				<Text>
					<Text style={{ color: '#7f7e7e' }}>Duration: </Text>
					<Text>{props.duration}</Text>
				</Text>
			</View>
			<View style={styles.seeDetailsContainer}>
				<Text style={styles.seeDetailsText}>See details</Text>
				<AntDesign name="rightcircle" size={18} color="red" />
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '80%',
		borderRadius: 7,
		backgroundColor: '#fff',
		elevation: 20,
		paddingTop: 10,
	},

	MatchType: {
		padding: 7,
		margin: 13,
		width: 60,
		borderRadius: 3,
		alignItems: 'center',
		backgroundColor: 'red',
	},

	matchTypeText: {
		color: '#fff',
		fontWeight: 'bold',
	},

	matchDate: {
		paddingHorizontal: 20,
		justifyContent: 'flex-end',
		flexDirection: 'row',
	},

	seeDetailsContainer: {
		backgroundColor: '#f6f6f8',
		flexDirection: 'row',
		paddingHorizontal: 20,
		justifyContent: 'flex-end',
		borderBottomRightRadius: 7,
		borderBottomLeftRadius: 7,
		padding: 7,
	},

	seeDetailsText: {
		color: '#ff0000',
		marginRight: 5,
		fontWeight: 'bold',
	},
});
