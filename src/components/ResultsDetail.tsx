import React, { FC } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import { business } from "../interfaces/business";

export const ResultsDetail: FC<Props> = ({ business }) => (
	<View style={styles.view}>
		<Image source={{ uri: business.image_url }} style={styles.image} />
		<Text style={styles.title}>{business.name}</Text>
		<Text>
			{business.rating} Stars, {business.review_count} Reviews
		</Text>
	</View>
);

interface Props {
	business: business;
}

const styles = StyleSheet.create({
	view: {
		marginHorizontal: 5,
		marginVertical: 10,
	},
	image: {
		width: 250,
		height: 150,
		borderRadius: 18,
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
		marginVertical: 5,
	},
});
