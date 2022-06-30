import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CustomInput from './CustomInput';

export default function SignupForm() {
	const [userName, setUserName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	return (
		<View>
			<CustomInput value={userName} setValue={setUserName} placeholder={'name'} />
			<CustomInput value={email} setValue={setEmail} placeholder={'email'} />
			<CustomInput value={password} setValue={setPassword} placeholder={'password'} />
		</View>
	);
}
