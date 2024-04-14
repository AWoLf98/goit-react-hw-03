import 'modern-normalize';
import './App.css';

import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import contactData from './data/contacts.json';

// console.log(contactsData);

export default function App() {
  const initialValues = {
    name: "",
    number: ""
  };

  const [filter, setFilter] = useState('');

  const contacts = contactData.filter(el =>
    el.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  function handleChange(evt) {
    setFilter(evt.target.value.trim())
  }

  function handleSubmit({ name, number }, actions) {
    const id = nanoid();
    contacts.push({id, name, number});
    console.log(contacts);
    actions.resetForm();
  }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm initialValues={initialValues} onSubmit={handleSubmit}/>
      <SearchBox value={filter} onChange={handleChange} />
      <ContactList contacts={contacts} />
    </>
  );
}
