import React, { useState } from 'react';
import { Button, View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import OrderItem from './OrderItem';

interface Order {
  id: number;
  date: string;
  books: string;
  quantity: number;
  status: number;
}

interface OrderListProps {
  orders: Order[];
}

const OrderList: React.FC<OrderListProps & { onOrderPress: (order: Order) => void }> = ({ orders, onOrderPress }) => {
  const [filter, setFilter] = useState<number | null>(null);
  
  const handleFilterChange = (status: number | null) => {
    setFilter(status);
  };


  const filteredOrders = filter !== null ? orders.filter(order => order.status === filter) : orders;

  const renderItem = ({ item }: { item: Order }) => {
    return (
      <TouchableOpacity onPress={() => onOrderPress(item)}>
        <OrderItem key={item.id} order={item} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={styles.buttonContainer}>
        <CustomButton title="Tous" onPress={() => handleFilterChange(null)} />
        <CustomButton title="En attente" onPress={() => handleFilterChange(1)} />
        <CustomButton title="Envoyée" onPress={() => handleFilterChange(2)} />
        <CustomButton title="Livrée" onPress={() => handleFilterChange(3)} />
        <CustomButton title="Récupérée" onPress={() => handleFilterChange(4)} />
      </View>

      <FlatList
        data={filteredOrders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => <Text>No orders found.</Text>}
      />
    </View>
  );
};


const CustomButton = ({ title, onPress }: { title: string, onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Button title={title} onPress={onPress} />
    </TouchableOpacity>
  );
};

export default OrderList;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});
