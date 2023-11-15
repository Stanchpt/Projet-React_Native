import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const DetailsCommandesScreen= ({route}) => {
  const { order } = route.params;

  // Utilisez les données de la commande pour afficher les détails spécifiques
  const { id, date, books, quantity, status } = order;

  return (
    <View>
      <Text>Détails de la commande n°{id}</Text>
      <Text>Date : {date}</Text>
      <Text>Livres : {books}</Text>
      <Text>Quantité : {quantity}</Text>
      <Text>Status : {status}</Text>
    </View>
  );
};

export default DetailsCommandesScreen;