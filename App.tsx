import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Welcome from './src/views/Welcome';
import Signup from './src/views/SignUp';
import colors from './src/utils/colors';
import useDimentions from './src/hooks/useDimensions';

import AppLoading from 'expo-app-loading';

import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
	const { exactHeight, exactWidth } = useDimentions();

	let [fontsLoaded] = useFonts({
		Roboto_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<View style={[styles.container, { width: exactWidth, height: exactHeight }]}>
			<StatusBar style="auto" />
			{/* <Welcome /> */}
			<Signup />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.lightGlass,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
