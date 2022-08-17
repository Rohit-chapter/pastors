import React from 'react';

import styles from './HomePage.module.scss';

function HomePage() {

  const allContactsControlAttributes = {
    className: `application-themed-button ${styles.allContactsControl}`
  };

  const usContactsControlAttributes = {
    className: `application-themed-button ${styles.usContactsControl}`
  };

  return (
    <div id={styles.homePageMain}>
      <button {...allContactsControlAttributes}>All Contacts</button>
      <button {...usContactsControlAttributes}>US Contacts</button>
    </div>
  );
}

export default HomePage;