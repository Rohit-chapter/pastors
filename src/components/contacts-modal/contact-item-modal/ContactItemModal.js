import React from 'react';

import { ReactComponent as BackArrowIcon } from 'assets/images/back-arrow-icon.svg';

import styles from './ContactItemModal.module.scss';

function ContactItemContent(props) {

  const { data, onBack } = props;

  function renderContactItemHeader() {

    const backControlAttributes = {
      className: styles.backControl,
      onClick: onBack
    };

    return (
      <div className={styles.contactItemHeader}>
        <button {...backControlAttributes}>
          <BackArrowIcon className={styles.backArrowIcon} />
        </button>
        <h3 className={styles.contactInfoLabel}>Contact Info</h3>
      </div>
    );
  }

  function renderContactItemBody() {

    return (
      <div className={styles.contactItemBody}>
        <div className={styles.idAvatar}>{data.id}</div>
        <label className={styles.contactTitle}>{data.title || data.name}</label>
        <label className={styles.contactText}>{data.body}</label>
      </div>
    );

  }

  return (
    <div className={styles.contactItemModalMain}>

      {renderContactItemHeader()}

      {renderContactItemBody()}

    </div>
  );

}

export default ContactItemContent;