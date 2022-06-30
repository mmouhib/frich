import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Welcome from './src/views/Welcome';
import { ScaledSize } from 'react-native';
import Account from './src/views/Account';

export default function App() {
	const { height, width }: ScaledSize = useWindowDimensions();

	return (
		<View style={[styles.container, { width: width, height: height }]}>
			<StatusBar style="auto" />
			{/*<Welcome />*/}
			<Account />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
