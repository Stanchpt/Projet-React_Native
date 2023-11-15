import React from 'react';
import { View, Text, Modal, TextInput, Button, StyleSheet } from 'react-native';

interface AddContactModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (newContact: any) => void; // Remplacez 'any' par le type de votre contact
}

const AddContactModal: React.FC<AddContactModalProps> = ({ visible, onClose, onSubmit }) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleAddContact = () => {
    const newContact = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phoneNumber,
    };
    onSubmit(newContact);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text>Ajouter un nouvel abonné</Text>
        <TextInput
          placeholder="Prénom"
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
          style={styles.input}
        />
        <TextInput
          placeholder="Nom"
          onChangeText={(text) => setLastName(text)}
          value={lastName}
          style={styles.input}
        />
        <TextInput
          placeholder="phoneNumber"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.input}
        />
        
        <Button title="Ajouter" onPress={handleAddContact} />
        <Button title="Fermer" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },
});

export default AddContactModal;
