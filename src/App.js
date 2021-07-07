import React, { Component } from "react";
import shortid from "shortid";
import PropTypes from 'prop-types';
//import IconButton from
import { connect } from 'react-redux';
import * as actions from './redux/actions'

import Contacts from "./Components/Contacts/Contacts";
import Filter from "./Components/Filter/Filter";
import Form from "./Components/Form/Form";

const App = ({ filter, items, addContact, onChangeFilter, deleteContact }) => {
  const normalizedFilter = filter.toLowerCase();
  const getVisibleContacts = items.filter((item) =>
    item.name.toLowerCase().includes(normalizedFilter));
  return (
    <div>
      <h1>Phonebook</h1>
      <Form onAddContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={onChangeFilter} />
      <Contacts
        contacts={getVisibleContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  )
};
  App.propTypes = {
   filter: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  onAddContact: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}
  const mapStateToProps = state => {
    return {
      filter: state.contacts.filter,
      items: state.contacts.items
    }
  };
  const mapDispatchToProps = dispatch => {
    const contact = {
      id: shortid.generate(),
      name: "",
      number: "",
    };
    return {
    
      onAddContact: ({ name, number }) => dispatch(actions.addContact(contact)),
      onDeleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
      onChangeFilter: ({ target: { value } }) => dispatch(actions.onChangeFilter(value)),
    
    }
  }





export default connect(mapStateToProps, mapDispatchToProps)(App);
