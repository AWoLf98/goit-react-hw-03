import 'modern-normalize';
import './App.css';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export default function App() {
  const initialValues = {
    name: '',
    number: '',
  };

  const [contacts, setContacts] = useState(() =>
    localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function handleSubmit({ name, number }, actions) {
    setContacts(prevContacts => [...prevContacts, { id: nanoid(), name, number }]);
    actions.resetForm();
  }

  function handleDelete(id) {
    setContacts(prevContacts => prevContacts.filter(el => el.id !== id));
  }

  const contactsVisible = contacts.filter(el =>
    el.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm initialValues={initialValues} onSubmit={handleSubmit} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={contactsVisible} onDelete={handleDelete} />
    </>
  );
}
