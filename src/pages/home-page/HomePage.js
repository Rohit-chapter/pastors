import React from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './HomePage.module.scss';

function HomePage() {

  const navigate = useNavigate();

  const allContactsControlAttributes = {
    className: `application-themed-button ${styles.allContactsControl}`,
    onClick() {
      navigate('/all-contacts');
    }
  };

  const usContactsControlAttributes = {
    className: `application-themed-button ${styles.usContactsControl}`,
    onClick() {
      navigate('/us-contacts');
    }
  };

  return (
    <div id={styles.homePageMain}>
      <button {...allContactsControlAttributes}>All Contacts</button>
      <button {...usContactsControlAttributes}>US Contacts</button>
    </div>
  );
}

export default HomePage;