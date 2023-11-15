import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Contact {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  id: number;
}

interface ContactItemProps {
  contact: Contact;
  onPressCall: (phoneNumber: string) => void;
  onPressEmail: (emailAddress: string) => void;
  onPressDelete: (contactId: number) => void;
  onPressModify: (contact: Contact) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({
    contact,
    onPressCall,
    onPressEmail,
    onPressDelete,
    onPressModify,
  }) => {
    const { first_name, last_name, email, phone, id } = contact;
  
    return (
      <View style={styles.card}>
        <Text>{`${first_name} ${last_name}`}</Text>
        <Text>{phone}</Text>
        <Text>{email}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => onPressCall(phone)}>
            <Text style={styles.icon}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressEmail(email)}>
            <Text style={styles.icon}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressDelete(id)}>
            <Text style={styles.icon}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressModify(contact)}>
            <Text style={styles.icon}>Modify</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#f9f9f9',
      padding: 15,
      marginBottom: 10,
      borderRadius: 10,
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
    },
    icon: {
      fontWeight: 'bold',
      color: 'blue',
    },
  });
  
  export default ContactItem;
