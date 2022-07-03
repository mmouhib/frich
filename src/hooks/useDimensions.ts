/**
 * this hook is made to replace the native hook 'useWindowDimensions' to fix the
 * problem with the height value because of expo's 'StatusBar' component used in
 * the 'App' component by adding the with of the StatusBar to the width of the screen
 * returned from 'useWindowDimensions'
 */

import { useState, useEffect } from 'react';
import { useWindowDimensions, ScaledSize } from 'react-native';
import Constants from 'expo-constants';
import { IUseDimensions } from '../types/types';

export default function useDimentions(): IUseDimensions {
	const { height, width }: ScaledSize = useWindowDimensions();

	const [exactHeight, setExactHeight] = useState<number>(0);
	const [exactWidth, setExactWidth] = useState<number>(width);

	useEffect(() => {
		setExactHeight(height + Constants.statusBarHeight * 2);
		setExactWidth(width);
	}, []);

	return { exactWidth, exactHeight };
}
