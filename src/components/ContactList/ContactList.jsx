import React from 'react';
import { ListOfContacts } from './ContactList.styled';
import Contact from '../Contact';
import { useSelector } from 'react-redux';
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
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} id={id} />
      ))}
    </ListOfContacts>
  );
};

export default ContactList;

