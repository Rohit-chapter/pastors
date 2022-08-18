import React, { useState, useEffect } from 'react';

import ContactsModal from 'components/contacts-modal/ContactsModal';
import Spinner from 'components/generics/spinner/Spinner';

import contactModes from 'constants/contact-modes';

import { getAllContacts } from 'services/contact.services';

function AllContacts() {

  const [rootState, setRootState] = useState({
    loading: false,
    page: 1,
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

      const response = await getAllContacts(rootState.page);

      setRootState((_rootState) => {
        return {
          ...rootState,
          loading: false,
          data: response.data
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
    mode: contactModes.ALL_CONTACTS,
    data: rootState.data,
    page: rootState.page,
    onLoadMore(page) {
      console.log(page);
      fetchContacts();
    }
  };

  if (rootState.loading === true) {
    return <Spinner />;
  }

  return <ContactsModal {...contactModelProperties} />;

}

export default AllContacts;