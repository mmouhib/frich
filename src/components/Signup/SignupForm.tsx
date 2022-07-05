import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import CustomInput from '../Account/CustomInput';
import { useState } from 'react';
import colors from '../../utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SignupForm() {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

	return (
		<View style={{ flex: 2, width: '85%' }}>
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

			<Pressable>
				<Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
			</Pressable>

			<View style={{ marginTop: 15 }}>
				<Text style={{ color: '#797979' }}>
					By proceeding your agree to both:{' '}
					<Text
						style={styles.pressableText}
						onPress={() => {
							/*open navigator and redirect to terms*/
						}}
					>
						Privacy Policy
					</Text>
					<Text> And </Text>
					<Text
						style={styles.pressableText}
						onPress={() => {
							/*open navigator and redirect to terms*/
						}}
					>
						Terms of service
					</Text>
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	forgotPasswordText: {
		marginTop: 10,
		marginRight: 6,
		alignSelf: 'flex-end',
		color: colors.mainColor,
	},

	pressableText: {
		color: '#2e2d2d',
		textDecorationLine: 'underline',
	},
});
