import welcomeScreenData from '../../welcomeData';
import { View, FlatList } from 'react-native';
import { IHomeScreenData } from '../../types';
import WelcomeListItem from './WelcomeListItem';
import { useState, useRef } from 'react';
import WelcomeSlidesFooter from './WelcomeSlidesFooter';

export default function WelcomePage() {
	const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

	const _renderItem = ({ item }: { item: IHomeScreenData }) => (
		<WelcomeListItem data={item} currentPageIndex={currentPageIndex} />
	);

	const _keyExtractor = (item: IHomeScreenData): string => item.id.toString();

	const [_onViewableItemsChanged] = useState(() => ({ viewableItems }: any) => {
		setCurrentPageIndex(viewableItems[0].index);
	});

	/*
	const _onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
		setCurrentPageIndex(viewableItems[0].index);
	}).current;
	 */

	return (
		<View>
			<View style={{ flex: 5 }}>
				<FlatList
					data={welcomeScreenData}
					renderItem={_renderItem}
					keyExtractor={_keyExtractor}
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					viewabilityConfig={{ itemVisiblePercentThreshold: 40 }}
					onViewableItemsChanged={_onViewableItemsChanged}
				/>
			</View>
			<View style={{ flex: 1 }}>
				<WelcomeSlidesFooter currentPageIndex={currentPageIndex} />
			</View>
		</View>
	);
}
