import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./src/screens/SearchScreen";
import DetailScreen from "./src/screens/DetailScreen";

import { RootStackParamList } from "./src/types/navigation";

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const App: FC = () => (
	<NavigationContainer>
		<Navigator
			initialRouteName='Search'
			screenOptions={{
				title: "Business Search",
				gestureEnabled: true,
			}}
		>
			<Screen name='Search' component={SearchScreen} />
			<Screen name='Detail' component={DetailScreen} />
		</Navigator>
	</NavigationContainer>
);

export default App;
