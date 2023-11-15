import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import PublicationsScreen from '../../screens/PublicationsScreen';
import OrdersScreen from '../../screens/OrdersScreen';
import ContactsScreen from '../../screens/ContactsScreen';

const BottomTabNavigator = createBottomTabNavigator();

export default function BottomTabsNavigator() {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerTintColor: 'blue',
      }}
    >
      <BottomTabNavigator.Screen
        name="Commandes"
        component={OrdersScreen}
        options={{
          tabBarIcon: () => <Entypo name="home" size={30} color={'blue'} />,
        }}
      />
      <BottomTabNavigator.Screen
        name="Publications"
        component={PublicationsScreen}
        options={{
          tabBarIcon: () => <Entypo name="open-book" size={30} color={'blue'} />,
        }}
      />
      <BottomTabNavigator.Screen
        name="Répertoire"
        component={ContactsScreen}
        options={{
          tabBarIcon: () => <Entypo name="user" size={30} color={'blue'} />,
        }}
      />
    </BottomTabNavigator.Navigator>
  );
}
