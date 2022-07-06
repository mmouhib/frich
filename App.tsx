//import Constants from 'expo-constants';
// import { StatusBar } from 'expo-status-bar';

import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Welcome from './src/views/Welcome';
import Signup from './src/views/SignUp';
import Login from './src/views/Login';
import colors from './src/utils/colors';
import useDimensions from './src/hooks/useDimensions';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();

export default function App() {
	const { exactHeight, exactWidth } = useDimensions();

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

	const styles = StyleSheet.create({
		container: {
			width: exactWidth,
			height: exactHeight,
			backgroundColor: colors.lightGlass,
			// marginTop: Constants.statusBarHeight - Constants.statusBarHeight * 0.2,
		},
	});

	const _onLayout = () => {
		if (isReady) SplashScreen.hideAsync();
	};

	if (!isReady) return null;

	return (
		<NavigationContainer>
			<View style={styles.container} onLayout={_onLayout}>
				{/*<StatusBar style="dark" backgroundColor={colors.lightGlass} />*/}
				<stack.Navigator initialRouteName="Welcome">
					<stack.Screen name="Welcome" component={Welcome} />
					<stack.Screen name="Login" component={Login} options={{ title: 'login' }} />
					<stack.Screen name="Signup" component={Signup} />
				</stack.Navigator>
			</View>
		</NavigationContainer>
	);
}
