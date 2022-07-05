import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomInput from '../../CustomComponents/CustomInput';
import { useState } from 'react';
import colors from '../../../utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SignupForm() {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [pressedTerms, setPressedTerms] = useState<boolean>(false);

	const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

	return (
		<View style={{ flex: 2, width: '85%' }}>
			<Text style={styles.leadingText}>enter your credentials</Text>

			<CustomInput value={name} setValue={setName} placeholder="Name">
				<MaterialCommunityIcons name="card-text" size={24} color="black" />
			</CustomInput>

			<CustomInput
				value={email}
				setValue={setEmail}
				placeholder="Email"
				inputPlaceholder="name@company.domain"
			>
				<MaterialCommunityIcons name="email-multiple" size={20} color="black" />
			</CustomInput>

			<CustomInput
				value={password}
				setValue={setPassword}
				placeholder="Password"
				hiddenPassword={hiddenPassword}
				setHiddenPassword={setHiddenPassword}
			>
				{hiddenPassword ? (
					<MaterialCommunityIcons name="eye-off" size={22} color="black" />
				) : (
					<MaterialCommunityIcons name="eye" size={22} color="black" />
				)}
			</CustomInput>

			<Text style={{ marginTop: 10, marginLeft: 3 }}>
				By proceeding your agree to both{' '}
				<Text
					style={[styles.pressableText, pressedTerms && { color: '#adadad' }]}
					onPress={() => {
						setPressedTerms(true);
					}}
				>
					Privacy Policy And Terms of service
				</Text>
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	leadingText: {
		textTransform: 'uppercase',
		color: '#a0a0a0',
	},

	pressableText: {
		color: '#2e2d2d',
		textDecorationLine: 'underline',
	},
});
