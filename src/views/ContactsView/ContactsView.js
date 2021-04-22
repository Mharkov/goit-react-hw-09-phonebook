import React from 'react';
import { useSelector } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import { getLoading } from '../../redux/contact/contact-selectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';

const ContactsView = () => {
  const loading = useSelector(getLoading);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {loading && <h1>Загружаем ...</h1>}
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsView;
