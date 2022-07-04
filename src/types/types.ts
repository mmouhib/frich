//this file contains all type definitions for the whole app

import { ImageSourcePropType } from 'react-native';

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

export type inputTypes = 'number' | 'password' | 'email' | 'text';
