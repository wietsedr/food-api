import React, { useState, FC } from "react";
import { View, StyleSheet, Text } from "react-native";

import { SearchBar } from "../components/SearchBar";

import { useSearch } from '../hooks/useSearch';

const SearchScreen: FC = () => {
  const [term, setTerm] = useState<string>("");
  const [onSearch, results, errorMessage] = useSearch();

	return (
		<View style={styles.viewStyles}>
			<SearchBar
				term={term}
				onTermChange={(newTerm) => setTerm(newTerm)}
				onTermSubmit={() => onSearch(term)}
			/>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We found {results.length} results</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyles: {
		width: "100%",
		height: "100%",
		padding: 15,
		backgroundColor: "#ffffff",
	},
});

export default SearchScreen;
