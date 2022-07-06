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
import ForgotPassword from './src/views/ForgotPassword';
import ForgotPasswordEmailSent from './src/views/ForgotPasswordEmailSent';
import { StatusBar } from 'react-native';

/*
 * import Constants from 'expo-constants';
 * import { StatusBar } from 'expo-status-bar';
 * <StatusBar style="dark" backgroundColor={colors.lightGlass} />
 * */

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

	const hideHeader = {
		headerShown: false,
	};

	return (
		<NavigationContainer>
			<View style={styles.container} onLayout={_onLayout}>
				<StatusBar />
				<stack.Navigator initialRouteName="ForgotPassword">
					<stack.Screen name="Welcome" component={Welcome} options={hideHeader} />
					<stack.Screen name="Login" component={Login} options={hideHeader} />
					<stack.Screen name="Signup" component={Signup} options={hideHeader} />

					<stack.Screen
						name="ForgotPassword"
						component={ForgotPassword}
						options={hideHeader}
					/>

					<stack.Screen
						name="ForgotPasswordEmailSent"
						component={ForgotPasswordEmailSent}
						options={hideHeader}
					/>
				</stack.Navigator>
			</View>
		</NavigationContainer>
	);
}
