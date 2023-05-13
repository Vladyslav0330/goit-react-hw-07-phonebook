import Section from './Section';
import FormComponent from './ContactForm/Form';
import ContactList from './ContactList';
import Filter from './Filter';
import Loader from './Loader';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getIsLoading, getError } from '../redux/contactsSlice';
import { fetchContacts } from '../redux/operations';
import { useEffect } from 'react';

const App = () => {
  const stateContacts = useSelector(getContacts);
  const stateIsLoading = useSelector(getIsLoading);
  const stateError = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      {stateIsLoading && !stateError && <Loader />}
      {stateError && <p>Something went wrong. {stateError}</p>}
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
