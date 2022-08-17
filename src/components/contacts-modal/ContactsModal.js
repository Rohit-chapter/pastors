import React from 'react';

import { Modal } from 'react-bootstrap';

import contactModes from 'constants/contact-modes';

import ContactsModalHeader from './contacts-modal-header/ContactsModalHeader';
import ContactsSearchControl from './contacts-search-control/ContactsSearchControl';

import styles from './ContactsModal.module.scss';

function ContactsModal(props) {

  const { mode } = props;

  function renderContactsModalLabel() {

    let label = 'All Contacts';

    if (mode === contactModes.US_CONTACTS) {
      label = 'US Contacts';
    }

    return <h3 className={styles.modalLabel}>{label}</h3>;
  }

  const contactModalProperties = {
    show: true,
    size: 'lg',
    centered: true,
    backdrop: 'static',
    keyboard: false,
    contentClassName: styles.contactModalMain
  };

  function handleContactsSearch(searchText) {
    console.log(searchText);
  }

  return (
    <Modal {...contactModalProperties}>
      <ContactsModalHeader />
      {renderContactsModalLabel()}
      <ContactsSearchControl onSearch={handleContactsSearch} />
    </Modal>
  );
}

export default ContactsModal;