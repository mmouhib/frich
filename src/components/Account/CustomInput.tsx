import { StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import colors from '../../utils/colors';

interface ICustomInput {
	type?: any;
	value: string;
	setValue: (arg: string) => void;
	placeholder: string;
}

export default function CustomInput({ value, setValue, placeholder }: ICustomInput) {
	const [isFocused, setIsFocused] = useState<boolean>(false);

	//todo: add background color on focus

	return (
		<TextInput
			onBlur={() => {
				setIsFocused(true);
			}}
			style={[styles.input, { borderWidth: isFocused ? 1 : 0 }]}
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
		width: '83%',
		margin: 12,
		padding: 10,
		borderRadius: 7,
		borderColor: colors.mainColor,
		backgroundColor: '#f1eff9',
		// backgroundColor: '#c4d3da',
	},

	inputPlaceholderStyle: {},
});
