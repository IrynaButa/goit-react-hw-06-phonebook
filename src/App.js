import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import Contacts from "./Components/Contacts/Contacts";
import Filter from "./Components/Filter/Filter";
import Form from "./Components/Form/Form";


const App = ({ filter, items, onChangeFilter,deleteContact, addContact }) => {
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  return (
    <div>
        <h1>Phonebook</h1>
      <Form />
      {/* <Form onAddContact={addContact} /> */}

        <h2>Contacts</h2>
      <Filter />
       {/* <Filter value={filter} onChangeFilter={onChangeFilter} /> */}
        <Contacts
          contacts={visibleContacts}
         
      />
      {/* <Contacts
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        /> */}
      </div>
    
  );
};

App.propTypes = {
  filter: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  items: state.contacts.items,
  filter: state.contacts.filter,
});

export default connect(mapStateToProps)(App);
