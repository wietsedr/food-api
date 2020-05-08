import React, { FC, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { useBusiness } from "../hooks/useBusiness";

import { RootStackParamList } from "../types/navigation";

const DetailScreen: FC<Props> = ({ route, navigation: { setParams } }) => {
	const [fetch, business, errorMessage] = useBusiness();
	const { businessId, businessName } = route.params;

	useEffect(() => {
		fetch(businessId);
		setParams({ title: businessName });
	}, [businessId]);

	if (!business) return null;

	return (
		<View style={styles.view}>
			<Text style={styles.title}>{business.name}</Text>
			<FlatList
				data={business.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => (
					<Image source={{ uri: item }} style={styles.image} />
				)}
			/>
			{errorMessage !== "" && <Text>{errorMessage}</Text>}
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
	view: {
		margin: 10,
	},
	title: {
		marginBottom: 15,
		fontSize: 18,
		fontWeight: "bold",
	},
	image: {
		width: 300,
		height: 200,
	},
});

export default DetailScreen;
