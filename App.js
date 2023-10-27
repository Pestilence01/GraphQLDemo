import React from "react";
import MainContainer from "./Navigation/MainContainer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./Navigation/Screens/DetailsScreen";

function App() {
  const Stack = createNativeStackNavigator();

  const headerOptions= {
    headerTintColor: "#ffffff",
    headerStyle: {
      backgroundColor: "#05a5a6",
    },
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MainContainer}
          options={headerOptions}
        />
        <Stack.Screen name="Details" component={DetailsScreen} options={headerOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
