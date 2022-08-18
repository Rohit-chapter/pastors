import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ContactsModal from 'components/contacts-modal/ContactsModal';

import contactModes from 'constants/contact-modes';

import { getUSContacts } from 'services/contact.services';
import { updateUSContacts } from 'redux/actions/contact.action';

function USContacts() {

  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contact.usContacts);

  const [rootState, setRootState] = useState({
    loading: false,
    page: 0
  });

  useEffect(() => {

    fetchContacts();

    return () => {
      dispatch(updateUSContacts([]));
    };

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

      const data = [...contacts, ...response.data];

      dispatch(updateUSContacts(data));

      setRootState((_rootState) => {
        return {
          ...rootState,
          loading: false,
          page: rootState.page + 1
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
    data: contacts,
    page: rootState.page,
    onLoadMore: fetchContacts
  };

  return <ContactsModal {...contactModelProperties} />;

}

export default USContacts;