import React, { useState } from 'react';

import { Modal } from 'react-bootstrap';
import { BounceLoader } from 'react-spinners';
import InfiniteScroll from 'react-infinite-scroll-component';

import contactModes from 'constants/contact-modes';

import ContactsModalHeader from './contacts-modal-header/ContactsModalHeader';
import ContactsSearchControl from './contacts-search-control/ContactsSearchControl';
import ContactItemModal from './contact-item-modal/ContactItemModal';
import { parseEvenIdContacts } from './utilities';

import styles from './ContactsModal.module.scss';

function ContactsModal(props) {

  const { mode, data, onLoadMore } = props;

  const [onlyEven, setOnlyEven] = useState(false);
  const [displayContactItemModal, setDisplayContactItemModal] = useState(false);
  const [contactInfo, setContactInfo] = useState(null);

  function handleContactsSearch(searchText) {
    // console.log(searchText);
  }

  function renderContactsModalLabel() {

    let label = 'All Contacts';

    if (mode === contactModes.US_CONTACTS) {
      label = 'US Contacts';
    }

    return <h3 className={styles.modalLabel}>{label}</h3>;
  }

  function renderSpinner() {

    const spinnerProperties = {
      color: '#ff7f50',
      loading: true,
      size: 40
    };

    return (
      <div className={styles.loadingContainer}>
        <BounceLoader {...spinnerProperties} />
      </div>
    );
  }

  function renderContactItem(contact) {

    const contactItemAttributes = {
      className: styles.contactItem,
      key: contact.id,
      onClick() {
        setDisplayContactItemModal(true);
        setContactInfo(contact);
      }
    };

    let contactText = contact.name;

    if (mode === contactModes.US_CONTACTS) {
      contactText = contact.title;
    }

    return (
      <div {...contactItemAttributes}>
        <div className={styles.contactAvatar}>{contact.id}</div>
        <label className={styles.contactText}>{contactText}</label>
      </div>
    );
  }

  function renderContactsList() {

    const infiniteScrollProperties = {
      dataLength: data.length,
      next: onLoadMore,
      hasMore: true,
      loader: renderSpinner(),
      height: 300
    };

    const contacts = parseEvenIdContacts(data, onlyEven);

    return (
      <InfiniteScroll {...infiniteScrollProperties}>
        {
          contacts.map((contact) => (
            renderContactItem(contact)
          ))
        }
      </InfiniteScroll>
    );

  }

  function renderContactModalBody() {
    return (
      <div className={styles.contactModalBody}>
        {renderContactsModalLabel()}
        <ContactsSearchControl onSearch={handleContactsSearch} />
        {renderContactsList()}
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

  const contactModalProperties = {
    show: true,
    size: 'lg',
    centered: true,
    backdrop: 'static',
    keyboard: false,
    contentClassName: styles.contactModalMain
  };

  function renderContactModalContent() {

    const contactItemModalAttributes = {
      data: contactInfo,
      onBack() {
        setDisplayContactItemModal(false);
      }
    };

    if (displayContactItemModal === true) {
      return <ContactItemModal {...contactItemModalAttributes} />;
    }

    return (
      <React.Fragment>

        <ContactsModalHeader />

        {renderContactModalBody()}

        {renderContactModalFooter()}

      </React.Fragment>
    );
  }

  return (
    <Modal {...contactModalProperties}>

      {renderContactModalContent()}

    </Modal>
  );
}

export default ContactsModal;