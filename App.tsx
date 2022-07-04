import { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Welcome from './src/views/Welcome';
import Signup from './src/views/SignUp';
import colors from './src/utils/colors';
import useDimentions from './src/hooks/useDimensions';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
	const { exactHeight, exactWidth } = useDimentions();

	const [isReady, setIsReady] = useState<boolean>(false);

	useEffect(() => {
		(async () => {
			try {
				await SplashScreen.preventAutoHideAsync();
				await Font.loadAsync({ Roboto_700Bold });
			} catch (e) {
				console.log(e);
			} finally {
				setIsReady(true);
			}
		})();
	}, []);

	const _onLayout = useCallback(() => {
		if (isReady) {
			SplashScreen.hideAsync();
		}
	}, [isReady]);

	if (!isReady) {
		return null;
	}

	return (
		<View
			style={[styles.container, { width: exactWidth, height: exactHeight }]}
			onLayout={_onLayout}
		>
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
