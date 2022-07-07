import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AccountFooter from '../components/Account/AccountFooter';
import * as Linking from 'expo-linking';
import colors from '../utils/colors';

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
			<View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
				<AccountFooter
					mainButtonText="Open mail app"
					secondaryButtonText="Resend Email"
					navigationFunction={() => {}}
					mainButtonFunction={() => {
						Linking.openURL('mailto:');
					}}
				/>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Login');
					}}
				>
					<Text style={styles.rememberPasswordText}>Remember password? Login</Text>
				</TouchableOpacity>
			</View>
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

	rememberPasswordText: {
		marginBottom: 20,
		fontWeight: '500',
		color: colors.mainColor,
	},
});
