import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "@react-navigation/compat";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../types/navigation";
import { business } from "../interfaces/business";

import ResultsCard from "./ResultsCard";

const ResultsList: FC<Props> = ({ title, results, navigation }) => {
	const navigateToDetail = (business: business) => {
		const { id: businessId } = business;
		navigation.navigate("Detail", { businessId });
	};

	if (!results.length) {
		return null;
	}

	return (
		<View style={styles.view}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				data={results}
				keyExtractor={(result) => result.id}
				snapToAlignment={"start"}
				snapToInterval={260}
				decelerationRate={"fast"}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => navigateToDetail(item)}>
						<ResultsCard business={item} />
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

type ResultsListNavigationProp = StackNavigationProp<
	RootStackParamList,
	"Search"
>;

interface Props {
	title: string;
	results: business[];
	navigation: ResultsListNavigationProp;
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

export default withNavigation(ResultsList);
