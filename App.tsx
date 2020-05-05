import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./src/screens/SearchScreen";

const { Navigator, Screen } = createStackNavigator();

const App: React.FC = () => (
	<NavigationContainer>
		<Navigator
			initialRouteName='Search'
			screenOptions={{
				title: "Business Search",
				gestureEnabled: true,
			}}
		>
			<Screen name='Search' component={SearchScreen} />
		</Navigator>
	</NavigationContainer>
);

export default App;
