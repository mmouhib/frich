import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import SignupHeader from '../components/Signup/SignupHeader';
import SignupForm from '../components/Signup/SignupForm';
import SignupFooter from '../components/Signup/SignupFooter';

export default function Signup() {
	return (
		<KeyboardAvoidingView
			behavior={'position'}
			style={styles.container}
			contentContainerStyle={styles.containerStyleForPosition}
		>
			<SignupHeader />
			<SignupForm />
			<SignupFooter />
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
