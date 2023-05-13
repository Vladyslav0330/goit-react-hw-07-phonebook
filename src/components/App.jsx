import Section from './Section';
import FormComponent from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/contactsSlice';

const App = () => {
  const stateContacts = useSelector(getContacts);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingLeft: 200,
        paddingRight: 200,
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <h1>Phonebook</h1>
      <Section title="Add a contact">
        <FormComponent />
      </Section>
      {stateContacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      )}
    </div>
  );
};

export { App };
