import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "@react-navigation/compat";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../types/navigation";
import { business } from "../interfaces/business";

import ResultsDetail from "./ResultsDetail";

const ResultsList: FC<Props> = ({ title, results, navigation }) => {
	const navigateToDetail = (businessId: string) => {
		navigation.navigate("Detail", {
			businessId,
		});
	};

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
					<TouchableOpacity onPress={() => navigateToDetail(item.id)}>
						<ResultsDetail business={item} />
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
