import welcomeScreenData from '../welcomeData';
import { View, FlatList, Text } from 'react-native';
import { IHomeScreenData } from '../types';
import WelcomeListItem from './WelcomeListItem';
import DotsSlider from './dotsSlider';
import { useState, useRef, useEffect } from 'react';
import { ViewToken } from 'react-native';

export default function WelcomePage() {
	const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

	const _renderItem = ({ item }: { item: IHomeScreenData }) => (
		<WelcomeListItem data={item} currentPageIndex={currentPageIndex} />
	);

	const _keyExtractor = (item: IHomeScreenData): string => item.id.toString();

	const _onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
		/**
		 * the following line will set the state to the current item's index if it's not nullish (null / indefined)
		 * otherwise it will set it to 0
		 */
		setCurrentPageIndex(viewableItems[0].index ?? 0);
	});

	return (
		<View>
			<View style={{ flex: 6 }}>
				<FlatList
					data={welcomeScreenData}
					renderItem={_renderItem}
					keyExtractor={_keyExtractor}
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
					onViewableItemsChanged={_onViewableItemsChanged.current}
				/>
			</View>
			<View style={{ flex: 1 }}>
				<DotsSlider selectedIndex={currentPageIndex} />
			</View>
		</View>
	);
}
