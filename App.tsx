import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Welcome from './src/views/Welcome';
import { ScaledSize } from 'react-native';
import Signup from './src/views/SignUp';

export default function App() {
	const { height, width }: ScaledSize = useWindowDimensions();

	return (
		<View style={[styles.container, { width: width, height: height }]}>
			<StatusBar style="auto" />
			{/* <Welcome /> */}
			<Signup />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});
