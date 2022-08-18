import React, { useEffect, useState } from 'react';

import useDebounce from 'hooks/use-debounce';

import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';

import styles from './ContactsSearchControl.module.scss';

function ContactsSearchControl(props) {

  const { onSearch } = props;

  const [searchText, setSearchText] = useState('');

  const debounceValue = useDebounce(searchText, 500);

  useEffect(() => {

    if (debounceValue === '') {
      return;
    }

    onSearch(debounceValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);

  function handleInputControlChangeEvent(event) {

    setSearchText(event.target.value);

  }

  function handleKeyDownEvent(event) {

    if (event.key !== 'Enter') {
      return;
    }

    onSearch(searchText);

  }

  const searchInputControlAttributes = {
    type: 'text',
    placeholder: 'Search contacts',
    className: styles.searchInputControl,
    value: searchText,
    onChange: handleInputControlChangeEvent,
    onKeyDown: handleKeyDownEvent
  };

  return (
    <div className={styles.contactsSearchControlMain}>

      <div className={styles.searchIconWrapper}>
        <SearchIcon className={styles.searchIcon} />
      </div>

      <input {...searchInputControlAttributes} />

    </div>
  );

}

export default ContactsSearchControl;