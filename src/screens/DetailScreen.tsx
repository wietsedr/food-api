import React, { FC, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../types/navigation";

import { useBusinessById } from "../hooks/useBusinessById";

const DetailScreen: FC<Props> = ({ route }) => {
	const [fetch, business, errorMessage] = useBusinessById();
	const { businessId } = route.params;

	useEffect(() => {
		fetch(businessId);

		if (business) {
			console.log("business", business);
		}
	}, [businessId]);

	return (
		<View style={styles.viewStyles}>
			<Text>Results Show</Text>
			<Text>{errorMessage}</Text>
		</View>
	);
};

type DetailRouteProp = RouteProp<RootStackParamList, "Detail">;
type DetailNavigationProp = StackNavigationProp<RootStackParamList, "Detail">;

interface Props {
	route: DetailRouteProp;
	navigation: DetailNavigationProp;
}

const styles = StyleSheet.create({
	viewStyles: {
		margin: 10,
	},
});

export default DetailScreen;
