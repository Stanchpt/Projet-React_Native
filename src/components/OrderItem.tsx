import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Order {
  id: number;
  date: string;
  books: string;
  quantity: number;
  status: number;
}

interface OrderItemsProps {
  order: Order;
}

const OrderItem: React.FC<OrderItemsProps> = ({ order }) => {
  const { id, date, books, quantity, status } = order;

  const getStatusLabel = (status: number): string => {
    switch (status) {
      case 1:
        return 'En attente';
      case 2:
        return 'Envoyée';
      case 3:
        return 'Livrée';
      case 4:
        return 'Récupérée';
      default:
        return 'Tous';
    }
  };

  return (
    <View style={styles.card}>
      <Text style={[styles.row, styles.borderBottom]}>Commande n°{id}</Text>
      <Text style={[styles.row, styles.borderBottom]}>Titre des livres: {books} - Quantité: {quantity}</Text>
      <View style={styles.infocom}>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>{getStatusLabel(status)}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>Modifiée le :</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    padding: 4,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  infocom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  statusContainer: {
    backgroundColor: '#ffff66', // couleur de surlignement
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  status: {
    fontWeight: 'bold',
  },
  dateContainer: {
    flexDirection: 'row',
  },
  dateLabel: {
    marginRight: 5,
  },
  date: {
    fontStyle: 'italic',
  },
});
