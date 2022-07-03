import { StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import colors from '../../utils/colors';

interface ICustomInput {
	type?: any;
	value: string;
	setValue: (arg: string) => void;
	placeholder: string;
	styleOverride?: object;
}

export default function CustomInput({ value, setValue, placeholder, styleOverride }: ICustomInput) {
	const [isFocused, setIsFocused] = useState<boolean>(false);

	return (
		<TextInput
			onBlur={() => {
				setIsFocused(false);
			}}
			onFocus={() => {
				setIsFocused(true);
			}}
			style={[styles.input, { borderWidth: isFocused ? 2 : 0 }, styleOverride ?? null]}
			value={value}
			placeholder={placeholder}
			placeholderTextColor="lightgrey"
			onChangeText={(newTextValue) => {
				setValue(newTextValue);
			}}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		alignSelf: 'center',
		height: 40,
		width: '100%',
		margin: 12,
		padding: 10,
		borderRadius: 7,
		borderColor: colors.mainColor,
		backgroundColor: '#f1eff9',
	},

	inputPlaceholderStyle: {},
});
