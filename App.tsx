import { useState, useEffect } from 'react';
import { View } from 'react-native';
import Welcome from './src/views/Welcome';
import Signup from './src/views/account/SignUp';
import Login from './src/views/account/Login';
import colors from './src/utils/colors';
import useDimensions from './src/hooks/useDimensions';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from './src/views/account/ForgotPassword';
import ForgotPasswordEmailSent from './src/views/account/ForgotPasswordEmailSent';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MatchType from './src/views/match/MatchType';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Mukta_500Medium, Mukta_600SemiBold } from '@expo-google-fonts/mukta';
import PlayersNumber from './src/views/match/PlayersNumber';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import PlayersNameSelection from './src/views/match/PlayersNameSelection';
import { IStackParamList } from './src/types/types';
import MatchSettings from './src/views/match/MatchSettings';

const stack = createNativeStackNavigator<IStackParamList>();

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

	const screenOptions = { headerShown: false };

	if (!isReady) return null;

	return (
		<NavigationContainer>
			<View style={containerStyle} onLayout={_onLayout}>
				<StatusBar />
				<Provider store={store}>
					<stack.Navigator screenOptions={screenOptions} initialRouteName="MatchSettings">
						{firstLaunch && <stack.Screen name="Welcome" component={Welcome} />}
						<stack.Group>
							<stack.Screen name="Login" component={Login} />
							<stack.Screen name="Signup" component={Signup} />
							<stack.Screen name="ForgotPassword" component={ForgotPassword} />
							<stack.Screen
								name="ForgotPasswordEmailSent"
								component={ForgotPasswordEmailSent}
							/>
						</stack.Group>
						<stack.Group>
							<stack.Screen name="MatchType" component={MatchType} />
							<stack.Screen name="PlayersNumber" component={PlayersNumber} />
							<stack.Screen name="PlayersNameSelection" component={PlayersNameSelection} />
							<stack.Screen name="MatchSettings" component={MatchSettings} />
						</stack.Group>
					</stack.Navigator>
				</Provider>
			</View>
		</NavigationContainer>
	);
}
