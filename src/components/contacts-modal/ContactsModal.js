import React, { useState } from 'react';

import { Modal } from 'react-bootstrap';

import contactModes from 'constants/contact-modes';

import ContactsModalHeader from './contacts-modal-header/ContactsModalHeader';
import ContactsSearchControl from './contacts-search-control/ContactsSearchControl';

import styles from './ContactsModal.module.scss';

function ContactsModal(props) {

  const { mode } = props;

  const [onlyEven, setOnlyEven] = useState(false);

  function renderContactsModalLabel() {

    let label = 'All Contacts';

    if (mode === contactModes.US_CONTACTS) {
      label = 'US Contacts';
    }

    return <h3 className={styles.modalLabel}>{label}</h3>;
  }

  function renderContactModalBody() {
    return (
      <div className={styles.contactModalBody}>
        {renderContactsModalLabel()}
        <ContactsSearchControl onSearch={handleContactsSearch} />
      </div>
    );
  }

  function renderContactModalFooter() {

    const onlyEvenInputControlAttributes = {
      type: 'checkbox',
      className: styles.onlyEvenInputControl,
      value: onlyEven,
      onChange() {
        setOnlyEven((_onlyEven) => !_onlyEven);
      }
    };

    return (
      <div className={styles.contactModalFooter}>
        <input {...onlyEvenInputControlAttributes} />
        <label className={styles.onlyEvenLabel}>Only even</label>
      </div>
    );
  }

  function handleContactsSearch(searchText) {
    // console.log(searchText);
  }

  const contactModalProperties = {
    show: true,
    size: 'lg',
    centered: true,
    backdrop: 'static',
    keyboard: false,
    contentClassName: styles.contactModalMain
  };

  return (
    <Modal {...contactModalProperties}>

      <ContactsModalHeader />

      {renderContactModalBody()}

      {renderContactModalFooter()}

    </Modal>
  );
}

export default ContactsModal;