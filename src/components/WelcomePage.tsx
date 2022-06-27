import welcomeScreenData from '../welcomeData';
import { View, FlatList, Text } from 'react-native';
import { IHomeScreenData } from '../types';
import WelcomeListItem from './WelcomeListItem';
import DotsSlider from './dotsSlider';
import { useState, useRef } from 'react';

export default function WelcomePage() {
	const currentPageIndexRef = useRef<number>(2);

	const _renderItem = ({ item }: { item: IHomeScreenData }) => (
		<WelcomeListItem data={item} currentPageIndex={currentPageIndexRef.current} />
	);

	const _keyExtractor = (item: IHomeScreenData): string => item.id.toString();

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
					viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
					// onViewableItemsChanged={({ viewableItems, changed }: any) => {
					// 	// if the viewableItems array's length is > 0 the ref value will change
					// 	if (viewableItems.length) {
					// 		currentPageIndexRef.current = viewableItems[viewableItems.length - 1].index;
					// 	}
					// 	console.log(currentPageIndexRef.current);
					// }}
				/>
			</View>
			<View style={{ flex: 1 }}>
				<DotsSlider selectedIndex={currentPageIndexRef.current} />
			</View>
		</View>
	);
}
