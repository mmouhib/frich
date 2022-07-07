import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import LoginHeader from '../../components/Account/Login/LoginHeader';
import AccountFooter from '../../components/Account/AccountFooter';
import LoginForm from '../../components/Account/Login/LoginForm';

export default function Login({ navigation }: any) {
	return (
		<KeyboardAvoidingView
			behavior={'position'}
			style={styles.container}
			contentContainerStyle={styles.containerStyleForPosition}
		>
			<LoginHeader />
			<LoginForm navigation={navigation} />
			<AccountFooter
				mainButtonText="Log In"
				secondaryButtonText="Dont have an account ? Create one"
				navigationFunction={() => {
					navigation.navigate('Signup');
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
