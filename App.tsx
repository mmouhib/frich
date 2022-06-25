import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View, useWindowDimensions } from 'react-native';
import WelcomePage from './src/components/WelcomePage';
import { ScaledSize } from 'react-native';

export default function App() {
	const { height, width }: ScaledSize = useWindowDimensions();

	return (
		<View style={[styles.container, { width: width, height: height }]}>
			<WelcomePage />
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
