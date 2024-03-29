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
	PasswordResetEmail: undefined;
	MatchType: undefined;
	PlayersNumber: undefined;
	PlayersNameSelection: undefined;
	MatchSettings: undefined;
	MatchesList: undefined;
};

export type NavigationPropTypes = NativeStackScreenProps<IStackParamList, any>;

export interface IPlayerNameStruct {
	key: number;
	value: string;
}

export interface IScoring {
	kabbout: number;
	jokerFiYeddek: number;
	jokerMfadhel: number;
	place: number;
}
