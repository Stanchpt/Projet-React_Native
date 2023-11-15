import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Modal, Button, TouchableOpacity, Text } from 'react-native';
import { books } from '../data/pubs';
import BookList from '../components/BooksList';

interface Book {
  id: number;
  title: string;
  reference: string;
}

const PublicationsScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [bookList, setBookList] = useState(books);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookReference, setNewBookReference] = useState('');
  

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(text.toLowerCase())
    );
    setBookList(filteredBooks);
  };

  const handleDeleteBook = (id: number) => {
    const DeleteBook = bookList.filter((book) => book.id !== id);
    setBookList(DeleteBook);
    console.log('Delete :', id);
  };

  const handleEditBook = (book: Book) => {
    setSelectedBook(book);
    setIsEditModalVisible(true);
  };

  const handleSaveChanges = () => {
    if (selectedBook) {
      const updatedBookList = bookList.map((book) =>
        book.id === selectedBook.id ? selectedBook : book
      );
      setBookList(updatedBookList);
      setIsEditModalVisible(false);
      setSelectedBook(null);
    }
  };

  const handleAddBook = () => {
    const newBook: Book = {
      id: bookList.length + 1,
      title: newBookTitle,
      reference: newBookReference,
    };
    setBookList([...bookList, newBook]);
    setIsAddModalVisible(false);
    setNewBookTitle('');
    setNewBookReference('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher par titre"
        value={searchText}
        onChangeText={handleSearch}
      />
      <BookList books={bookList} onDelete={handleDeleteBook} onEdit={handleEditBook} />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => setIsAddModalVisible(true)}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        visible={isEditModalVisible}
        onRequestClose={() => setIsEditModalVisible(false)}
      >
        <View style={styles.modalContainer}>
        <TextInput
            placeholder="Nouveau titre"
            value={selectedBook?.title}
            onChangeText={(text) =>
            setSelectedBook((prevBook) => ({ ...prevBook!, title: text }))
            }
            style={styles.input}
        />
        <TextInput
            placeholder="Reference"
            value={selectedBook?.reference}
            onChangeText={(text) =>
            setSelectedBook((prevBook) => ({ ...prevBook!, reference: text }))
            }
            style={styles.input}
        />
        <Button title="Enregistrer" onPress={handleSaveChanges} />
        <Button title="Annuler" onPress={() => setIsEditModalVisible(false)} />
        </View>
      </Modal>

      <Modal
        animationType="slide"
        visible={isAddModalVisible}
        onRequestClose={() => setIsAddModalVisible(false)}
      >
        <View style={styles.modalContainer}>
        <Text>Ajouter une nouvelle publication</Text>
          <TextInput
            placeholder="Titre du livre"
            value={newBookTitle}
            onChangeText={(text) => setNewBookTitle(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Référence du livre"
            value={newBookReference}
            onChangeText={(text) => setNewBookReference(text)}
            style={styles.input}
          />
          <Button title="Ajouter" onPress={handleAddBook} />
          <Button title="Annuler" onPress={() =>  setIsAddModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default PublicationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabText: {
    fontSize: 30,
    color: 'white',
  },
});

