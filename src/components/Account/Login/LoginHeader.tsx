import { Image, View } from 'react-native';

export default function LoginHeader() {
	return (
		<View style={{ flex: 2, width: '100%' }}>
			<Image
				style={{ width: '100%', height: '100%' }}
				source={require('../../../../assets/Account/login.png')}
				resizeMode="contain"
			/>
		</View>
	);
}
