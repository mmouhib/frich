import { Image, View, Text, StyleSheet } from 'react-native';
import AccountFooter from '../components/Account/AccountFooter';

export default function ForgotPasswordEmailSent({ navigation }: any) {
	return (
		<View style={{ flex: 1, alignItems: 'center' }}>
			<View style={{ flex: 2, width: '100%' }}>
				<Image
					style={{ width: '100%', height: '100%' }}
					source={require('../../assets/passwordReset/mailSent.png')}
					resizeMode="contain"
				/>
			</View>
			<View style={{ flex: 1, width: '85%' }}>
				<Text style={styles.headingText}>Email has been sent!</Text>
				<Text style={styles.text}>
					Please check your inbox and follow the instructions in order to reset your password
				</Text>
			</View>
			<AccountFooter
				mainButtonText="Go back to Login"
				secondaryButtonText="Resend Email"
				navigationFunction={() => {}}
				mainButtonFunction={() => {
					navigation.navigate('Login');
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	headingText: {
		fontFamily: 'Roboto_700Bold',
		fontSize: 25,
		textAlign: 'center',
	},

	text: {
		color: '#868686',
		textAlign: 'center',
	},
});
