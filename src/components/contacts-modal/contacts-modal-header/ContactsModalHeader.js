import React from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './ContactsModalHeader.module.scss';

function ContactsModalHeader() {

  const navigate = useNavigate();

  const allContactsControlAttributes = {
    className: `application-themed-button ${styles.allContactsControl}`,
    onClick() {
      navigate('/all-contacts');
    }
  };

  const usContactsControlAttributes = {
    className: `application-themed-button ${styles.usContactsControl}`,
    onClick() {
      navigate('/us-contacts');
    }
  };

  const closeControlAttributes = {
    className: `application-themed-button ${styles.closeControl}`,
    onClick() {
      navigate('/');
    }
  };

  return (
    <div className={styles.contactsModalHeaderMain}>
      <button {...allContactsControlAttributes}>All Contacts</button>
      <button {...usContactsControlAttributes}>US Contacts</button>
      <button {...closeControlAttributes}>Close</button>
    </div>
  );
}

export default ContactsModalHeader;