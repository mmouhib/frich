import welcomeScreenData from '../../welcomeScreen';
import { View, FlatList, Text } from 'react-native';
import { IHomeScreenData } from '../../types';
import WelcomeListItem from './WelcomeListItem';

export default function WelcomePage() {
	const renderItemFunc = ({ item }: { item: IHomeScreenData }) => <WelcomeListItem data={item} />;

	const keyExtractorFunc = (item: IHomeScreenData): string => item.id.toString();

	return (
		<View>
			<FlatList
				data={welcomeScreenData}
				renderItem={renderItemFunc}
				keyExtractor={keyExtractorFunc}
				// horizontal
				pagingEnabled
			/>
		</View>
	);
}
