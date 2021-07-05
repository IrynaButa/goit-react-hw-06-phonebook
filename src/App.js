import React, { Component } from "react";
import shortid from "shortid";
//import IconButton from
import { connect } from 'react-redux';
import * as actions from './redux/actions'

import Contacts from "./Components/Contacts/Contacts";
import Filter from "./Components/Filter/Filter";
import Form from "./Components/Form/Form";

class App extends Component {
  // state = {
  //   contacts: [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ],
  //   filter: "",
  // };

  componentDidMount() {
    // console.log('App componentDidMount');

    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');

    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem("contacts", JSON.stringify(nextContacts));
    }
  }

  // addContact = ({ name, number }) => {
  //   if (this.state.contacts.find((contact) => contact.name === name)) {
  //     alert(`${name} already exist`);
  //     return;
  //   }

  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };
  //   this.setState((state) => ({
  //     contacts: [contact, ...state.contacts],
  //   }));
  // };

  // deleteContact = (contactId) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter(
  //       (contact) => contact.id !== contactId
  //     ),
  //   }));
  // };

  // onChangeFilter = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  render() {
    // const { filter } = this.state;
    // const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onAddContact={this.addContact} />

        <h2>Contacts</h2>
        {/* <Filter value={this.filter} onChangeFilter={this.onChangeFilter} /> */}
        <Contacts
          contacts={this.getVisibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    filter: state.filter,
    visibleContacts: state.contacts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddContact: () => dispatch(actions.addContact()),
    onDeleteContact: () => dispatch(actions.deleteContact()),
    onChangeFilter: () => dispatch(actions.updateContact()),
    contacts: ()=> dispatch(actions.getVisibleContact())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
