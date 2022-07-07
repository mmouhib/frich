import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import SignupHeader from '../../components/Account/Signup/SignupHeader';
import SignupForm from '../../components/Account/Signup/SignupForm';
import AccountFooter from '../../components/Account/AccountFooter';

export default function Signup({ navigation }: any) {
	return (
		<KeyboardAvoidingView
			behavior={'position'}
			style={styles.container}
			contentContainerStyle={styles.containerStyleForPosition}
		>
			<SignupHeader />
			<SignupForm />
			<AccountFooter
				mainButtonText="Sign Up"
				secondaryButtonText="Already a member ? Log in"
				navigationFunction={() => {
					navigation.navigate('Login');
				}}
			/>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	containerStyleForPosition: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
