import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../utils/colors';
import CustomInput from '../components/Account/CustomInput';
import { useState } from 'react';
import useDimentions from '../hooks/useDimensions';

export default function Signup() {
	const width: number = useDimentions().exactWidth;
	const height: number = useDimentions().exactHeight;

	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	return (
		<View style={[styles.container, { height: height, width: width }]}>
			{/* Header section */}
			<View style={{ flex: 1 }}>
				<Text style={styles.accountTitleText}>Let's get started</Text>
				<Image
					style={{ width: '100%', height: '100%' }}
					source={require('../../assets/Account/signup.png')}
					resizeMode="contain"
				/>
			</View>

			{/* Footer section */}
			<View style={styles.footerContainer}>
				<View style={{ flex: 1, width: '85%' }}>
					<CustomInput
						value={name}
						setValue={setName}
						placeholder="name"
						styleOverride={{
							backgroundColor: '#fff',
						}}
					/>
					<CustomInput
						value={name}
						setValue={setName}
						placeholder="name"
						styleOverride={{
							backgroundColor: '#fff',
						}}
					/>
					<CustomInput
						value={name}
						setValue={setName}
						placeholder="name"
						styleOverride={{
							backgroundColor: '#fff',
						}}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 60,
	},

	footerContainer: {
		flex: 1,
		backgroundColor: colors.lightGlass,
		borderTopRightRadius: 50,
		borderTopLeftRadius: 50,
		alignItems: 'center',
		paddingTop: 30,
	},

	accountTitleText: {
		fontWeight: 'bold',
		fontSize: 30,
		marginLeft: 20,
	},
});
