import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from 'react-native-vector-icons/Feather'
import MoviesScreen from "./Screens/MoviesScreen";
import AboutScreen from "./Screens/AboutScreen";

const moviesName = 'Movies'
const aboutName = 'About'

const Tab = createBottomTabNavigator();

export default function MainContainer({navigation}) {
  console.log(navigation);
    return (
      <NavigationContainer independent={true} style={{backgroundColor: '#ffffff'}}> 
        <Tab.Navigator
          initialRouteName={moviesName}
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor: '#adadacff',
            tabBarActiveBackgroundColor: '#05a5a6',
            tabBarInactiveBackgroundColor: '#05a5a6',
            labelStyle: { padding: 10, fontSize: 0 },
            style: { padding: 20, height: 100, backgroundColor: '#FFFFFF'},
            headerShown: false,  // hides the header as it is displayed with the Navigation
            tabBarIcon: ({ color, size }) => {
              let iconName;
              let rn = route.name;
  
              if (rn === moviesName) {  // Picks the icon depending on the tab
                iconName = 'align-justify';
  
              } else if (rn === aboutName) {
                iconName = 'book';
  
              } 
              return <Feather name={iconName} size={size} color={color} />;
            },
          })}
          >
            
          <Tab.Screen name={moviesName} component={() => <MoviesScreen stackNavigation={navigation}/>} /> 
          <Tab.Screen name={aboutName} component={AboutScreen} />
  
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  