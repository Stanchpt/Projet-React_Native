import React, { useState } from 'react';
import { View, TextInput, Switch, StyleSheet, TouchableOpacity, Text, Linking } from 'react-native';
import { contacts } from '../data/contacts';
import ContactList from '../components/ContactList';
import AddContactModal from '../components/AddContactModal';

const ContactsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sorted, setSorted] = useState(false);
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [isModalVisible, setIsModalVisible] = useState(false); // Ajout de l'état pour la visibilité de la modale

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const filtered = contacts.filter(
      (contact) =>
        contact.first_name.toLowerCase().includes(text.toLowerCase()) ||
        contact.last_name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const handleSort = (value: boolean) => {
    setSorted(value);
    const sortedContacts = [...filteredContacts].sort((a, b) =>
      value ? a.first_name.localeCompare(b.first_name) : -1
    );
    setFilteredContacts(sortedContacts);
  };

  // Les boutons Appeler et Email
  const handleCall = (phoneNumber: string) => {
    // Code pour ouvrir l'application d'appel
  };

  const handleEmail = (emailAddress: string) => {
    // Code pour ouvrir l'application de messagerie avec l'email
  };

  const handleDelete = (contactId: number) => {
    const deleteContact = filteredContacts.filter((contact) => contact.id !== contactId);
    setFilteredContacts(deleteContact);
    console.log(`Contact avec l'ID ${contactId} supprimé`);
  };

  const handleModify = (modifiedContact: any) => {
    const updatedContacts = filteredContacts.map((contact) =>
      contact.id === modifiedContact.id ? modifiedContact : contact
    );
    setFilteredContacts(updatedContacts);
    console.log('Contact modifié : ', modifiedContact);
  };
  
  const handleAddContact = (newContact: any) => {
    const updatedContacts = [...filteredContacts, newContact];
    setFilteredContacts(updatedContacts);
    setIsModalVisible(false);
    console.log('Nouveau contact ajouté');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <Switch value={sorted} onValueChange={handleSort} />
      <ContactList
        contacts={filteredContacts}
        onPressCall={handleCall}
        onPressEmail={handleEmail}
        onPressDelete={handleDelete}
        onPressModify={handleModify}
      />
      
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>

      <AddContactModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSubmit={handleAddContact}
      />
    </View>
  );
};

export default ContactsScreen;

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
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButtonText: {
    color: 'white',
    fontSize: 30,
    lineHeight: 30,
  },
});
