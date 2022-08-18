import React, { useState, useEffect } from 'react';

import ContactsModal from 'components/contacts-modal/ContactsModal';

import contactModes from 'constants/contact-modes';

import { getUSContacts } from 'services/contact.services';

function USContacts() {

  const [rootState, setRootState] = useState({
    loading: false,
    page: 0,
    data: []
  });

  useEffect(() => {

    fetchContacts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchContacts() {

    try {

      setRootState((_rootState) => {
        return {
          ...rootState,
          loading: true
        };
      });

      const response = await getUSContacts(rootState.page + 1);

      setRootState((_rootState) => {
        return {
          ...rootState,
          loading: false,
          page: rootState.page + 1,
          data: [...rootState.data, ...response.data]
        };
      });

    } catch (exception) {

      alert(JSON.stringify(exception));

      setRootState((_rootState) => {
        return {
          ...rootState,
          loading: false
        };
      });

    }

  }

  const contactModelProperties = {
    mode: contactModes.US_CONTACTS,
    data: rootState.data,
    page: rootState.page,
    onLoadMore: fetchContacts
  };

  return <ContactsModal {...contactModelProperties} />;

}

export default USContacts;