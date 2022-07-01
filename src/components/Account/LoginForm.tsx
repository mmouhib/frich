import { useState } from 'react';
import { View } from 'react-native';
import CustomInput from './CustomInput';
import ProceedButton from './ProceedButton';

export default function LoginForm() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	return (
		<View style={{ width: '100%' }}>
			<CustomInput value={email} setValue={setEmail} placeholder={'email'} />
			<CustomInput value={password} setValue={setPassword} placeholder={'password'} />
			<ProceedButton text="Log In" />
		</View>
	);
}
