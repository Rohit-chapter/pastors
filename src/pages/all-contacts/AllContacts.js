import React from 'react';

import ContactsModal from 'components/contacts-modal/ContactsModal';

import styles from './AllContacts.module.scss';

function AllContacts() {

  return (
    <div id={styles.allContactsMain}>
      <ContactsModal />
    </div>
  );
}

export default AllContacts;