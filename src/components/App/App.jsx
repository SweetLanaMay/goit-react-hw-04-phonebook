import { useState, useEffect } from 'react';
import PhoneBook from 'components/PhoneBook';
import Filter from 'components/Filter';
import css from './App.module.css';

const App = () => {
  const initialContacts = JSON.parse(localStorage.getItem('contacts')) || [];
  const [contacts, setContacts] = useState(initialContacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleContactAdd = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleContactDelete = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <div className={css.container}>
      <h1 className={css.phoneBookTitle}>PhoneBook</h1>
      <PhoneBook contacts={contacts} onContactAdd={handleContactAdd} />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter contacts={contacts} onDeleteContact={handleContactDelete} />
    </div>
  );
};

export default App;
