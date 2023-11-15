import React from 'react';
import { FlatList } from 'react-native';
import ContactItem from './ContactItem';

interface Contact {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  id: number;
}

interface ContactListProps {
  contacts: Contact[];
  onPressCall: (phoneNumber: string) => void;
  onPressEmail: (emailAddress: string) => void;
  onPressDelete: (contactId: number) => void;
  onPressModify: (contact: Contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({
    contacts,
    onPressCall,
    onPressEmail,
    onPressDelete,
    onPressModify,
  }) => {
    return (
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactItem
            contact={item}
            onPressCall={onPressCall}
            onPressEmail={onPressEmail}
            onPressDelete={onPressDelete}
            onPressModify={onPressModify}
          />
        )}
      />
    );
  };
  
  export default ContactList;
