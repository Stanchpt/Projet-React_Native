import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabsNavigator from "./BottomTabs/BottomTabs";
import PublicationsScreen from "../screens/PublicationsScreen";
import DetailsCommandesScreen from "../screens/DetailsCommandesScreen";
import ContactsScreen from "../screens/ContactsScreen";

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      tabBarActiveTintColor: 'blue',
      headerTintColor: 'blue',
    }}>
      <Stack.Screen
        component={BottomTabsNavigator}
        name="Commandes"
        options={{headerShown : false}}
      />
      <Stack.Screen
        component={DetailsCommandesScreen}
        name="DetailsCommandes" 
        options={{ headerTintColor: 'blue' }}
      />
      <Stack.Screen component={PublicationsScreen} name="Publication" options={{headerTintColor: 'blue'}} />
      <Stack.Screen component={ContactsScreen} name="Répertoire" options={{headerTintColor: 'blue'}} />
    </Stack.Navigator>
  );
}
