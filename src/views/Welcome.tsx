import welcomeScreenData from '../constants/welcomeData';
import { View, FlatList } from 'react-native';
import { IHomeScreenData } from '../types/types';
import WelcomeListItem from '../components/WelcomePage/WelcomeListItem';
import { useState, useRef } from 'react';
import DotsSlider from '../components/WelcomePage/DotsSlider';
import SlidesNavigator from '../components/WelcomePage/SlidesNavigator';

export default function Welcome() {
	const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

	const _renderItem = ({ item }: { item: IHomeScreenData }) => <WelcomeListItem data={item} />;

	const _keyExtractor = (item: IHomeScreenData): string => item.id.toString();

	const [_onViewableItemsChanged] = useState(() => ({ viewableItems }: any) => {
		setCurrentPageIndex(viewableItems[0].index);
	});

	/*
	const _onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
		setCurrentPageIndex(viewableItems[0].index);
	}).current;
	 */

	const flatListRef = useRef<FlatList>(null);

	const _scrollToIndex = (index: number) => {
		if (flatListRef.current) flatListRef.current.scrollToIndex({ index: index });
	};

	return (
		<View>
			<View style={{ flex: 6 }}>
				<FlatList
					ref={flatListRef}
					data={welcomeScreenData}
					renderItem={_renderItem}
					keyExtractor={_keyExtractor}
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					viewabilityConfig={{ itemVisiblePercentThreshold: 40 }}
					onViewableItemsChanged={_onViewableItemsChanged}
					// ListFooterComponent={}
				/>
			</View>
			<View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
				<DotsSlider selectedIndex={currentPageIndex} />
				<SlidesNavigator currentPageIndex={currentPageIndex} scrollToIndex={_scrollToIndex} />
			</View>
		</View>
	);
}
