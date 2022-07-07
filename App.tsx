import { useState, useEffect } from 'react';
import { View } from 'react-native';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import MatchType from './src/views/MatchType';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Mukta_500Medium, Mukta_600SemiBold } from '@expo-google-fonts/mukta';

/*
 * import Constants from 'expo-constants';
 * import { StatusBar } from 'expo-status-bar';
 * <StatusBar style="dark" backgroundColor={colors.lightGlass} />
 * marginTop: Constants.statusBarHeight - Constants.statusBarHeight * 0.2,
 * */

const stack = createNativeStackNavigator();

export default function App() {
	const { exactHeight, exactWidth } = useDimensions();

	const [isReady, setIsReady] = useState<boolean>(false);
	const [firstLaunch, setFirstLaunch] = useState<boolean>(true);

	useEffect(() => {
		(async () => {
			try {
				await SplashScreen.preventAutoHideAsync();
				await Font.loadAsync({
					Roboto_700Bold,
					Poppins_400Regular,
					Poppins_600SemiBold,
					Mukta_500Medium,
					Mukta_600SemiBold,
				});
			} catch (e) {
				console.error(e);
			} finally {
				setIsReady(true);
			}
		})();

		(async () => {
			const isFirstLaunched = await AsyncStorage.getItem('firstLaunch');
			if (null == isFirstLaunched) {
				setFirstLaunch(true);
				AsyncStorage.setItem('firstLaunch', 'false');
			} else {
				setFirstLaunch(false);
			}
		})();
	}, []);

	const containerStyle = {
		width: exactWidth,
		height: exactHeight,
		backgroundColor: colors.lightGlass,
	};

	const _onLayout = () => {
		if (isReady) SplashScreen.hideAsync();
	};

	if (!isReady) return null;

	return (
		<NavigationContainer>
			<View style={containerStyle} onLayout={_onLayout}>
				<StatusBar />
				<stack.Navigator screenOptions={{ headerShown: false }}>
					{firstLaunch && <stack.Screen name="Welcome" component={Welcome} />}
					<stack.Screen name="Login" component={Login} />
					<stack.Screen name="Signup" component={Signup} />
					<stack.Screen name="ForgotPassword" component={ForgotPassword} />
					<stack.Screen name="ForgotPasswordEmailSent" component={ForgotPasswordEmailSent} />
					<stack.Screen name="MatchType" component={MatchType} />
				</stack.Navigator>
			</View>
		</NavigationContainer>
	);
}
