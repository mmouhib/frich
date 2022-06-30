import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CustomInput from './CustomInput';

export default function SignupForm() {
	const [text, setText] = useState<string>('');

	return (
		<View>
			<CustomInput value={text} setValue={setText} placeholder={'name'} />
			<CustomInput value={text} setValue={setText} placeholder={'email'} />
			<CustomInput value={text} setValue={setText} placeholder={'password'} />
		</View>
	);
}
