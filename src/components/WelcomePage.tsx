import welcomeScreenData from '../welcomeData';
import { View, FlatList, Text } from 'react-native';
import { IHomeScreenData } from '../types';
import WelcomeListItem from './WelcomeListItem';

export default function WelcomePage() {
	const renderItemFunc = ({ item }: { item: IHomeScreenData }) => <WelcomeListItem data={item} />;

	const keyExtractorFunc = (item: IHomeScreenData): string => item.id.toString();

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<FlatList
				data={welcomeScreenData}
				renderItem={renderItemFunc}
				keyExtractor={keyExtractorFunc}
				horizontal
				pagingEnabled
				bounces={false}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
}
