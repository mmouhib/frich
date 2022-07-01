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
			<View style={{ flex: 1 }}>
				<Text style={styles.accountTitleText}>Let's get started</Text>
				<Image
					style={{ width: '100%', height: '100%' }}
					source={require('../../assets/Account/login.jpg')}
					resizeMode="contain"
				/>
			</View>

			<View style={[{ flex: 1 }, styles.formSection]}>
				<Text style={styles.accountInformationText}>Account Informations</Text>
				{isLoginSelected ? <LoginForm /> : <SignupForm />}
			</View>

			<View style={{ flex: 0.3 }}>
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

	accountInformationText: {
		marginBottom: 8,
		color: '#aaa',
		textTransform: 'uppercase',
		alignSelf: 'flex-start',
	},

	formSection: {
		marginTop: 20,
		width: '80%',
		alignItems: 'center',
		alignSelf: 'center',
	},
});
