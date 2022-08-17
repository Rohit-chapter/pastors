import React from 'react';

import ContactsModal from 'components/contacts-modal/ContactsModal';
// import Spinner from 'components/generics/spinner/Spinner';

import contactModes from 'constants/contact-modes';

function USContacts() {

  const usContactsProperties = {
    mode: contactModes.US_CONTACTS
  };

  return <ContactsModal {...usContactsProperties} />;

}

export default USContacts;