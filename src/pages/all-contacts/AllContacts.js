import React from 'react';

import ContactsModal from 'components/contacts-modal/ContactsModal';

import contactModes from 'constants/contact-modes';

function AllContacts() {

  const contactModelProperties = {
    mode: contactModes.ALL_CONTACTS
  };

  return <ContactsModal {...contactModelProperties} />;

}

export default AllContacts;