import { View, StyleSheet } from 'react-native';
import useDimentions from '../hooks/useDimensions';
import SignupHeader from '../components/Signup/SignupHeader';
import SignupForm from '../components/Signup/SignupForm';
import SignupFooter from '../components/Signup/SignupFooter';

export default function Signup() {
	const width: number = useDimentions().exactWidth;
	const height: number = useDimentions().exactHeight;

	return (
		<View
			style={{
				height: height,
				width: width,
				paddingTop: 60,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<SignupHeader />

			<SignupForm />

			<SignupFooter />
		</View>
	);
}

const styles = StyleSheet.create({});
