import React from 'react';

import styles from './ContactsList.module.scss';

function ContactsList(props) {

  const { data } = props;

  function renderNoContactsFoundSection() {

    return (
      <div className={styles.noContactsFoundSection}>
        <p className={styles.noContactsFoundMessage}>No contacts found!</p>
      </div>
    );

  }

  function renderContactItem(contact) {

    const contactItemAttributes = {
      className: styles.contactItem,
      key: contact.id,
      onClick() { }
    };

    return (
      <div {...contactItemAttributes}>
        <div className={styles.contactAvatar}>{contact.id}</div>
        <label className={styles.contactName}>{contact.name}</label>
      </div>
    );
  }

  function renderList() {
    if (data.length === 0) {
      return renderNoContactsFoundSection();
    }

    return (
      <React.Fragment>
        {
          data.map((contact) => (
            renderContactItem(contact)
          ))
        }
      </React.Fragment>
    );
  }

  return (
    <div className={styles.contactsListMain}>
      {renderList()}
    </div>
  );
}

export default ContactsList;