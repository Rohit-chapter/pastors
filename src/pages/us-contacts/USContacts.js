import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import ContactsModal from 'components/contacts-modal/ContactsModal';
// import Spinner from 'components/generics/spinner/Spinner';

import contactModes from 'constants/contact-modes';

import { updateUserName } from 'redux/actions/user.actions';

function USContacts() {

  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);

  console.log(userName);

  useEffect(() => {

    dispatch(updateUserName('john mario'));

  }, [dispatch]);

  const usContactsProperties = {
    mode: contactModes.US_CONTACTS
  };

  return <ContactsModal {...usContactsProperties} />;

}

export default USContacts;