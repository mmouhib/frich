import { View, Image } from 'react-native';

export default function SignupHeader() {
	return (
		<View style={{ flex: 2, width: '100%' }}>
			<Image
				style={{ width: '100%', height: '100%' }}
				source={require('../../../../assets/Account/signup.png')}
				resizeMode="contain"
			/>
		</View>
	);
}
