//this file contains all type definitions for the whole app

import { ImageSourcePropType } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface IHomeScreenData {
	id: number;
	title: string;
	description: string;
	image: ImageSourcePropType;
}

export interface IUseDimensions {
	exactWidth: number;
	exactHeight: number;
}

export type IStackParamList = {
	Welcome: undefined;
	Login: undefined;
	Signup: undefined;
	ForgotPassword: undefined;
	ForgotPasswordEmailSent: undefined;
	MatchType: undefined;
	PlayersNumber: undefined;
	MatchSettings: undefined;
};

export type NavigationPropTypes = NativeStackScreenProps<IStackParamList, any>;
