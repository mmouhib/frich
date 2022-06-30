import { IHomeScreenData } from '../types/types';

const welcomeScreenData: IHomeScreenData[] = [
	{
		id: 1,
		title: 'Full data storage',
		description: 'Keep track of your score on a regular basis, and try to enhance your skills',
		image: require('../../assets/WelcomePage/save.png'),
	},

	{
		id: 2,
		title: 'Revisit matches',
		description: 'Come back any time to see your previous match logs whenever you want',
		image: require('../../assets/WelcomePage/revisit.png'),
	},

	{
		id: 3,
		title: 'Register friends',
		description:
			"In each match, you have the ability to register your friends that you've played with",
		image: require('../../assets/WelcomePage/friends.png'),
	},

	{
		id: 4,
		title: 'Visual charts',
		description: 'View your stats in a modern and beautiful form',
		image: require('../../assets/WelcomePage/stats.png'),
	},
];

export default welcomeScreenData;
