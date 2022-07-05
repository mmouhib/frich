import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Welcome from './src/views/Welcome';
import Signup from './src/views/SignUp';
import Login from './src/views/Login';
import colors from './src/utils/colors';
import useDimentions from './src/hooks/useDimensions';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import Constants from 'expo-constants';

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

	if (!isReady) {
		return null;
	}

	return (
		<View
			style={{
				width: exactWidth,
				height: exactHeight,
				backgroundColor: colors.lightGlass,
				marginTop: Constants.statusBarHeight,
			}}
			onLayout={() => {
				if (isReady) SplashScreen.hideAsync();
			}}
		>
			<StatusBar style="dark" backgroundColor={colors.lightGlass} />
			{/* <Welcome /> */}
			<Signup />
			{/*<Login />*/}
		</View>
	);
}
