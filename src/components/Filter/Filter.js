import React, { useState } from 'react';
import ContactList from 'components/ContactList';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ contacts, onDeleteContact }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search contacts"
          className={css.filterInput}
        />
      </label>
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </>
  );
};

Filter.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func,
};

export default Filter;
