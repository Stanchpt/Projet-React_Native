import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Book {
  title: string;
  reference: string;
}

interface BookItemProps {
  book: Book;
  onDelete: (reference: string) => void;
  onEdit: (book: Book) => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, onDelete, onEdit }) => {
  return (
    <View style={styles.bookItem}>
      <Text>{book.title}</Text>
      <Text>{book.reference}</Text>
      <View style={styles.infocom}>
        <View style={styles.UpContainer}>
            <TouchableOpacity onPress={() => onEdit(book)}>
                <Text style={styles.buttonModifier}>Modifier</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.SupContainer}>
            <TouchableOpacity onPress={() => onDelete(book.reference)}>
                <Text style={styles.buttonSupprimer}>Supprimer</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookItem: {
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
  infocom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  UpContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  SupContainer: {
    flexDirection: 'row',
  },
  buttonSupprimer: {
    color: 'red',
  },
  buttonModifier: {
    color: 'green',
  },
});

export default BookItem;
