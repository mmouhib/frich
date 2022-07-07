import { View, StyleSheet, Text, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../utils/colors';

interface ITypeSelection {
	title: string;
	description: string;
	selected: boolean;
	_onPress: () => void;
}

export default function TypeSelection({ title, description, selected, _onPress }: ITypeSelection) {
	return (
		<Pressable
			style={[styles.content, selected && styles.selectedContent]}
			onPress={_onPress}
			android_ripple={{ color: '#aaa' }}
		>
			<View>
				<Text style={[styles.headingText, !selected && { color: '#8c8c8c' }]}>{title}</Text>
				<Text style={{ color: '#8c8c8c' }}>{description}</Text>
			</View>

			<View>
				<Text>
					{selected ? (
						<FontAwesome5 name="check-circle" size={20} color={colors.mainColor} />
					) : (
						<View style={styles.circle}></View>
					)}
				</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	content: {
		marginVertical: 15,
		width: '85%',
		borderWidth: 1,
		borderRadius: 15,
		height: 80,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderColor: '#aaa',
	},

	selectedContent: {
		borderColor: colors.mainColor,
		backgroundColor: colors.lightGlass,
		borderWidth: 2,
	},

	headingText: {
		fontWeight: 'bold',
		fontSize: 15,
	},

	circle: {
		width: 20,
		height: 20,
		backgroundColor: '#d0d0d0',
		borderRadius: 10,
	},
});
