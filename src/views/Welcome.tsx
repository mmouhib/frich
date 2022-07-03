import welcomeScreenData from '../constants/welcomeData';
import { View, FlatList, ViewToken } from 'react-native';
import { IHomeScreenData } from '../types/types';
import WelcomeListItem from '../components/WelcomePage/WelcomeListItem';
import { useState, useRef } from 'react';
import DotsSlider from '../components/WelcomePage/DotsSlider';
import SlidesNavigator from '../components/WelcomePage/SlidesNavigator';
import Account from './Account';

export default function Welcome() {
	const WELCOME_DATA_LENGTH = welcomeScreenData.length;

	const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

	const _renderItem = ({ item }: { item: IHomeScreenData }) => <WelcomeListItem data={item} />;

	const _keyExtractor = (item: IHomeScreenData): string => item.id.toString();

	const [_onViewableItemsChanged] = useState(
		() =>
			({ viewableItems }: { viewableItems: ViewToken[] }) => {
				if (viewableItems[0] == undefined) {
					setCurrentPageIndex(WELCOME_DATA_LENGTH);
					return;
				}
				setCurrentPageIndex(viewableItems[0].index ?? 0);
			}
	);

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
					ListFooterComponent={Account}
					extraData={Account}
				/>
			</View>

			{/* 
			in the next block we check if the current index is in the range of the welcome slides
			if not, we remove the footer component so it does not render in the Account page
			that's done by checking if the currentPage state is equal to the length of the welcomeData
			array, which is changed to that in the _onViewableItemsChanged function.
			*/}

			{currentPageIndex <= WELCOME_DATA_LENGTH - 1 && (
				<View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
					<DotsSlider selectedIndex={currentPageIndex} />
					<SlidesNavigator
						currentPageIndex={currentPageIndex}
						scrollToIndex={_scrollToIndex}
						setCurrentPageIndex={setCurrentPageIndex}
					/>
				</View>
			)}
		</View>
	);
}
