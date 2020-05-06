import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { business } from "../interfaces/business";
import { ResultsDetail } from "./ResultsDetail";

export const ResultsList: FC<Props> = ({ title, results }) => (
	<View style={styles.view}>
		<Text style={styles.title}>{title}</Text>
		<FlatList
			horizontal
			data={results}
			keyExtractor={(result) => result.id}
			renderItem={({ item }) => <ResultsDetail business={item} />}
			snapToAlignment={"start"}
			snapToInterval={260}
			decelerationRate={"fast"}
			showsHorizontalScrollIndicator={false}
		/>
	</View>
);

interface Props {
	title: string;
	results: business[];
}

const styles = StyleSheet.create({
	view: {
		marginVertical: 5,
	},
	title: {
		paddingHorizontal: 5,
		fontSize: 18,
		fontWeight: "bold",
	},
});
