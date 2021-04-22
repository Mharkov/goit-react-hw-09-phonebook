import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { connect } from 'react-redux';
import * as contactOperations from '../../redux/contact/contact-operations';
import * as contactSelectors from '../../redux/contact/contact-selectors';

const ContactForm = () => {
  const items = useSelector(contactSelectors.getContacts);
  const dispatch = useDispatch();

  const onSubmit = (name, number) =>
    dispatch(contactOperations.contactAdd(name, number));

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const contactValidation = () => {
    if (items.find((contact) => name === contact.name)) {
      alert(`${name} is already in contacts`);
      return true;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (contactValidation()) {
      return;
    }

    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={styles.TaskEditor} onSubmit={handleSubmit}>
        <label className={styles.TaskEditor_label}>
          Name
          <input
            className={styles.TaskEditor_input}
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            required
          />
        </label>
        <label className={styles.TaskEditor_label}>
          Number
          <input
            className={styles.TaskEditor_input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChangeNumber}
            required
          />
        </label>
        <button className={styles.TaskEditor_button}> Add contact</button>
      </form>
    </>
  );
};

export default ContactForm;

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => {
//   return {
//     items: contactSelectors.getContacts(state),
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSubmit: (name, number) =>
//       dispatch(contactOperations.contactAdd(name, number)),
//   };
// };

// export default connect(null, mapDispatchToProps)(ContactForm);
