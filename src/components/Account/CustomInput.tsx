import { StyleSheet, TextInput } from 'react-native';

interface ICustomInput {
	type?: any;
	value: string;
	setValue: (arg: string) => void;
	placeholder: string;
}

export default function CustomInput({ value, setValue, placeholder }: ICustomInput) {
	//todo: add background color on focus

	return (
		<TextInput
			style={styles.input}
			value={value}
			placeholder={placeholder}
			onChangeText={(newTextValue) => {
				setValue(newTextValue);
			}}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		padding: 10,
		borderWidth: 1,
		borderRadius: 7,
		borderColor: '#b6b6b6',
		// backgroundColor: '#c4d3da',
	},
});
