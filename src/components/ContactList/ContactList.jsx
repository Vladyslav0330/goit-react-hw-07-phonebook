import React from 'react';
import { useSelector } from 'react-redux';
import { ListOfContacts } from './ContactList.styled';
import Contact from '../Contact';
import { getContacts, getFilter } from '../../redux/contactsSlice';

const ContactList = () => {
  const stateContacts = useSelector(getContacts);
  const stateFilterValue = useSelector(getFilter);

  const showFilteredContacts = () => {
    return stateContacts.filter(contact =>
      contact.name.toLowerCase().includes(stateFilterValue.toLowerCase())
    );
  };

  const filteredContacts = showFilteredContacts();

  return (
    <ListOfContacts>
      {filteredContacts.map(({ id, name, phone }) => (
        <Contact key={id} name={name} number={phone} id={id} />
      ))}
    </ListOfContacts>
  );
};

export default ContactList;
