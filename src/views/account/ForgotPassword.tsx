import { StyleSheet, KeyboardAvoidingView, Image, View, Text } from 'react-native';
import CustomInput from '../../components/CustomComponents/CustomInput';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import AccountFooter from '../../components/Account/AccountFooter';

export default function ForgotPassword({ navigation }: any) {
	const [email, setEmail] = useState<string>('');

	return (
		<View style={{ flex: 1, alignItems: 'center' }}>
			<View style={{ flex: 2, width: '100%' }}>
				<Image
					style={{ width: '100%', height: '100%' }}
					source={require('../../../assets/passwordReset/forgotPassword.png')}
					resizeMode="contain"
				/>
			</View>

			<View style={{ flex: 1.5, width: '100%', alignItems: 'center' }}>
				<View>
					<Text style={styles.headingText}>Forgot password?</Text>
					<Text style={styles.text}>No worries, we'll get it back</Text>
				</View>

				<CustomInput
					value={email}
					setValue={setEmail}
					placeholder={'your email'}
					styleOverride={{ width: '85%' }}
				>
					<MaterialCommunityIcons name="email-multiple" size={20} color="black" />
				</CustomInput>
			</View>

			<AccountFooter
				mainButtonText="Reset password"
				secondaryButtonText="Remember password? Login"
				mainButtonFunction={() => {
					navigation.navigate('ForgotPasswordEmailSent');
				}}
				navigationFunction={() => {
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
