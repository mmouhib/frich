import { useState } from 'react';
import { View, StyleSheet, useWindowDimensions, ScaledSize, Image, Text } from 'react-native';
import LoginForm from '../components/Account/LoginForm';
import SignupForm from '../components/Account/SignupForm';
import AccountFooter from '../components/Account/AccountFooter';

export default function Account() {
	const { height, width }: ScaledSize = useWindowDimensions();

	const [isLoginSelected, setIsLoginSelected] = useState<boolean>(true);

	return (
		<View style={{ paddingTop: 30, width: width, height: height }}>
			<View style={{ flex: 3 }}>
				<Text style={styles.accountTitleText}>Let's get started</Text>
				<Image
					style={{ width: '100%', height: '80%' }}
					source={require('../../assets/Account/account.png')}
					resizeMode="contain"
				/>
			</View>

			<View style={{ flex: 4 }}>{isLoginSelected ? <LoginForm /> : <SignupForm />}</View>

			<View style={{ flex: 1 }}>
				<AccountFooter
					isLoginSelected={isLoginSelected}
					setIsLoginSelected={setIsLoginSelected}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	accountTitleText: {
		fontWeight: 'bold',
		fontSize: 30,
		marginLeft: 20,
	},
});
