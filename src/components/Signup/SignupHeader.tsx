import { View, Text, Image } from 'react-native';

export default function SignupHeader() {
	return (
		<View style={{ flex: 1.5, width: '100%' }}>
			<Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 30, marginLeft: 20 }}>
				Let's get started
			</Text>
			<Image
				style={{ width: '100%', height: '100%' }}
				source={require('../../../assets/Account/signup.png')}
				resizeMode="contain"
			/>
		</View>
	);
}
