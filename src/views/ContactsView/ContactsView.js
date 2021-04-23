import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import { getLoading } from '../../redux/contact/contact-selectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import * as contactOperations from '../../redux/contact/contact-operations';

const ContactsView = () => {
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactOperations.fetchContacts()), [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>

      {loading && <h1>Загружаем ...</h1>}
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsView;
