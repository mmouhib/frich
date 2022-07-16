import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import CustomInput from '../../CustomComponents/CustomInput';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../utils/colors';
import { useState } from 'react';
import { NavigationPropTypes } from '../../../types/types';
import { useNavigation } from '@react-navigation/native';

export default function LoginForm() {
	const navigation = useNavigation<NavigationPropTypes['navigation']>();

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

	return (
		<View style={{ flex: 1.5, width: '85%' }}>
			<Text style={styles.leadingText}>enter your credentials</Text>

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

			<TouchableOpacity
				onPress={() => {
					navigation.navigate('ForgotPassword');
				}}
			>
				<Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	leadingText: {
		textTransform: 'uppercase',
		color: '#a0a0a0',
	},

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
