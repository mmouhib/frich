import { StyleSheet, TextInput, View, Text, Pressable } from 'react-native';
import { useState, useRef } from 'react';
import colors from '../../utils/colors';

interface ICustomInput {
	value: string;
	setValue: (arg: string) => void;
	placeholder: string;
	styleOverride?: object;
	inputPlaceholder?: string;
	children: React.ReactNode;
	hiddenPassword?: boolean;
	setHiddenPassword?: (arg: boolean) => void;
}

export default function CustomInput({
	value,
	setValue,
	placeholder,
	styleOverride,
	inputPlaceholder,
	children,
	hiddenPassword,
	setHiddenPassword,
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
		<View style={[styles.container, { borderWidth: isFocused ? 2 : 0 }, styleOverride ?? null]}>
			<Pressable style={[styles.inputComponents, styles.placeholder]} onPress={_onPress}>
				<Text style={{ fontWeight: '500' }}>{placeholder}</Text>
			</Pressable>
			<TextInput
				secureTextEntry={hiddenPassword ?? false}
				ref={inputRef}
				onBlur={_onBlur}
				onFocus={_onFocus}
				style={[styles.inputComponents, styles.input]}
				value={value}
				placeholder={inputPlaceholder ?? placeholder}
				placeholderTextColor="lightgrey"
				onChangeText={(newTextValue) => {
					setValue(newTextValue);
				}}
			/>
			<Pressable
				style={[
					styles.inputComponents,
					styles.icon,
					{ padding: 0, alignItems: 'center', justifyContent: 'center' },
				]}
				onPress={() => {
					//checking if the hiddenPassword props are passed or not
					//because they are optional
					if (hiddenPassword != null) {
						if (setHiddenPassword != null) {
							setHiddenPassword(!hiddenPassword);
						}
					}
				}}
			>
				{children}
			</Pressable>
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
		width: '55%',
		borderRadius: 0,
	},

	icon: {
		width: '15%',
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	},
});
