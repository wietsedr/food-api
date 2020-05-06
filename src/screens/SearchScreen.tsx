import React, { useState, FC } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

import { SearchBar } from "../components/SearchBar";
import { ResultsList } from "../components/ResultsList";

import { useSearch } from "../hooks/useSearch";

import { business } from "../interfaces/business";

const SearchScreen: FC = () => {
	const [term, setTerm] = useState<string>("");
	const [onSearch, results, errorMessage] = useSearch();

	const filterResultsByPrice = (price: string): business[] =>
		results.filter((result) => result.price === price);

	return (
		<>
			<SearchBar
				term={term}
				onTermChange={(newTerm) => setTerm(newTerm)}
				onTermSubmit={() => onSearch(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text style={styles.txtResults}>We found {results.length} results</Text>
			<ScrollView style={styles.scrollView}>
				<ResultsList
					title='Cost effective'
					results={filterResultsByPrice("$")}
				/>
				<ResultsList
					title='Bit pricier'
					results={filterResultsByPrice("$$")}
				/>
				<ResultsList
					title='Expensive'
					results={filterResultsByPrice("$$$")}
				/>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	txtResults: {
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	scrollView: {
		marginBottom: 35,
		paddingHorizontal: 5,
	}
});

export default SearchScreen;
