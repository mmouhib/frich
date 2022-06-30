import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Welcome from './src/views/Welcome';
import { ScaledSize } from 'react-native';

export default function App() {
	const { height, width }: ScaledSize = useWindowDimensions();

	return (
		<View style={[styles.container, { width: width, height: height }]}>
			<Welcome />
			<StatusBar style="auto" />
		</View>
	);
}

//style={[styles.welcomeItemContainer, { width: width, height: height / 1.2 }]}>

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});
