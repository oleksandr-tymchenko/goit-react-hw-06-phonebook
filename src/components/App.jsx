import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';

import { useLocalStorage } from './hooks/useLocalStorage';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title1, Title2 } from './App.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlise';
import { useSelector } from 'react-redux';

import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  // const dispatch = useDispatch();

  // const [contacts, setContacts] = useLocalStorage('contacts', []);

  const [filter, setFilter] = useState('');
  // const existedContact = (contacts, values) => {
  //   contacts.find(contact => contact.name === values.name);
  // };

  // const handleSubmit = (values, { resetForm }) => {
  //   values.id = nanoid();
  //   if (existedContact(contacts, values)) {
  //     alert(`${values.name} is already in contacts`);
  //     return;
  //   }
  //   // setContacts(prevConacts => [...prevConacts, values]);
  //   dispatch(addContact(values));
  //   resetForm();
  // };

  const onSearchValue = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    if (!contacts) return;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <Title1>Phonebook</Title1>
      <ContactForm />
      <Title2>Contacts</Title2>
      <Filter value={filter} onSearch={onSearchValue} />
      <ContactList contacts={getVisibleContacts()} />
    </Container>
  );
};
