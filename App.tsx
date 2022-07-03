import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Welcome from './src/views/Welcome';
import { ScaledSize } from 'react-native';
import Signup from './src/views/SignUp';
import colors from './src/utils/colors';
import useDimentions from './src/hooks/useDimensions';

export default function App() {
	// const { height, width }: ScaledSize = useWindowDimensions();

	//import useDimentions from './src/hooks/useDimensions';
	const width = useDimentions().exactWidth;
	const height = useDimentions().exactHeight;

	return (
		<View style={[styles.container, { width: width, height: height }]}>
			<StatusBar style="auto" />
			<Welcome />
			{/* <Signup /> */}
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
