import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { Feather } from "@expo/vector-icons";

export const SearchBar: FC<Props> = ({
	term, onTermChange, onTermSubmit,
}) => (
	<View style={styles.searchBar}>
		<Feather name='search' size={25} />
		<TextInput
			value={term}
			placeholder='Search for food'
			style={styles.textInput}
			autoCapitalize='none'
			autoCorrect={false}
			onChangeText={onTermChange}
			onEndEditing={onTermSubmit}
		/>
	</View>
);

interface Props {
	term: string;
	onTermChange(term: string): void;
	onTermSubmit(): void;
};

const styles = StyleSheet.create({
	searchBar: {
		alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
		backgroundColor: "#f0eeee",
		borderRadius: 10,
	},
	textInput: {
    width: "100%",
    paddingVertical: 12,
		fontSize: 20,
		paddingHorizontal: 10,
	},
});
