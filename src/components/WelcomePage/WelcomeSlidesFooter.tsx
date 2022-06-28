import { View } from 'react-native';
import DotsSlider from './dotsSlider';
import SlidesNavigator from './SlidesNavigator';

export default function WelcomeSlidesFooter({ currentPageIndex }: { currentPageIndex: number }) {
	return (
		<View style={{ alignItems: 'center', justifyContent: 'center' }}>
			<DotsSlider selectedIndex={currentPageIndex} />
			<SlidesNavigator currentPageIndex={currentPageIndex} />
		</View>
	);
}
