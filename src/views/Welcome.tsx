import welcomeScreenData from '../constants/welcomeData';
import { View, FlatList, ViewToken, Text, StyleSheet } from 'react-native';
import { IHomeScreenData } from '../types/types';
import WelcomeListItem from '../components/WelcomePage/WelcomeListItem';
import { useState, useRef } from 'react';
import DotsSlider from '../components/WelcomePage/DotsSlider';
import SlidesNavigator from '../components/WelcomePage/SlidesNavigator';

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
			<View style={{ height: '70%' }}>
				<FlatList
					ref={flatListRef}
					data={welcomeScreenData}
					renderItem={_renderItem}
					keyExtractor={_keyExtractor}
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					viewabilityConfig={{ itemVisiblePercentThreshold: 10 }}
					onViewableItemsChanged={_onViewableItemsChanged}
				/>
			</View>

			<View style={styles.footerContainer}>
				<DotsSlider selectedIndex={currentPageIndex} />
				<SlidesNavigator currentPageIndex={currentPageIndex} scrollToIndex={_scrollToIndex} />
				<Text>Skip</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	footerContainer: {
		height: '30%',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: '10%',
	},
});
