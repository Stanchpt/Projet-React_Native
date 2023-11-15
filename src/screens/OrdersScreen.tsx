import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import OrderList from '../components/OrderList';
import { orders } from '../data/order';
import { useNavigation } from '@react-navigation/native';

const OrdersScreen = () => {
  // console.log(orders.at(0))

  const navigation = useNavigation();

  const handleOrderPress = (order) => {
    navigation.navigate('DetailsCommandes', { order });
  };


  return (
    <View>
      <Text>Liste des commandes</Text>
      <OrderList orders={orders} onOrderPress={handleOrderPress} />
    </View>
  );
};

export default OrdersScreen;