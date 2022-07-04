import { StyleSheet, TextInput, View, Text, Pressable } from 'react-native';
import { useState, useRef } from 'react';
import colors from '../../utils/colors';

interface ICustomInput {
	type?: any;
	value: string;
	setValue: (arg: string) => void;
	placeholder: string;
	styleOverride?: object;
	inputPlaceholder?: string;
}

export default function CustomInput({
	value,
	setValue,
	placeholder,
	styleOverride,
	inputPlaceholder,
}: ICustomInput) {
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const inputRef = useRef<TextInput>(null);

	const _onBlur = () => setIsFocused(false);
	const _onFocus = () => setIsFocused(true);
	const _onPress = () => {
		//next line check if ref is null or not, if not focus the input
		inputRef.current && inputRef.current.focus();
		setIsFocused(true);
	};

	return (
		<View style={[styles.container, { borderWidth: isFocused ? 2 : 0 }]}>
			<Pressable style={[styles.inputComponents, styles.placeholder]} onPress={_onPress}>
				<Text style={{ fontWeight: '500' }}>{placeholder}</Text>
			</Pressable>
			<TextInput
				ref={inputRef}
				onBlur={_onBlur}
				onFocus={_onFocus}
				style={[styles.inputComponents, styles.input, styleOverride ?? null]}
				value={value}
				placeholder={inputPlaceholder ?? placeholder}
				placeholderTextColor="lightgrey"
				onChangeText={(newTextValue) => {
					setValue(newTextValue);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		borderRadius: 7,
		borderColor: colors.mainColor,
		marginTop: 20,
	},

	inputComponents: {
		height: 40,
		padding: 10,
		borderRadius: 7,
		backgroundColor: '#fff',
	},

	placeholder: {
		width: '30%',
		borderRightColor: '#f1f1f1',
		borderRightWidth: 1,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
	},
	input: {
		width: '70%',
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	},
});
